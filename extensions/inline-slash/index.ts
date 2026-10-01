import { CustomEditor, type ExtensionAPI } from "@earendil-works/pi-coding-agent";
import type { AutocompleteProvider } from "@earendil-works/pi-tui";

/** Only command-name tokens at whitespace boundaries; leave paths and arguments alone. */
function inlineToken(lines: string[], line: number, col: number): string | undefined {
	const before = (lines[line] ?? "").slice(0, col);
	const match = before.match(/(?:^|[ \t])(\/[^\s/]*)$/u);
	if (!match) return;
	const token = match[1];
	// Preserve built-in completion at the very start of the message.
	if (line === 0 && before.length === token.length) return;
	return token;
}

export function wrapInlineSlash(current: AutocompleteProvider): AutocompleteProvider {
	return {
		triggerCharacters: current.triggerCharacters,
		async getSuggestions(lines, line, col, options) {
			const token = inlineToken(lines, line, col);
			if (!token) return current.getSuggestions(lines, line, col, options);
			// Reuse Pi's live commands (including skills, templates, and extensions).
			return current.getSuggestions([token], 0, token.length, { ...options, force: false });
		},
		applyCompletion(lines, line, col, item, prefix) {
			const token = inlineToken(lines, line, col);
			if (!token || token !== prefix) {
				return current.applyCompletion(lines, line, col, item, prefix);
			}
			const completed = current.applyCompletion([token], 0, token.length, item, prefix);
			const start = col - token.length;
			const result = [...lines];
			result[line] = lines[line].slice(0, start) + completed.lines[0] + lines[line].slice(col);
			return { lines: result, cursorLine: line, cursorCol: start + completed.cursorCol };
		},
		shouldTriggerFileCompletion(lines, line, col) {
			return !!inlineToken(lines, line, col) ||
				(current.shouldTriggerFileCompletion?.(lines, line, col) ?? true);
		},
	};
}

// Pi excludes '/' from provider trigger characters and exposes no public method
// to open autocomplete. Keep the single version-sensitive access isolated here.
type AutocompleteTrigger = { tryTriggerAutocomplete(explicitTab?: boolean): void };

type InlineEditor = Pick<CustomEditor,
	"handleInput" | "getText" | "getLines" | "getCursor" | "isShowingAutocomplete"> & AutocompleteTrigger;

function triggerAfterEdit(editor: InlineEditor, before: string): void {
	const cursor = editor.getCursor();
	if (before !== editor.getText() && !editor.isShowingAutocomplete() &&
		inlineToken(editor.getLines(), cursor.line, cursor.col)) {
		editor.tryTriggerAutocomplete();
	}
}

export class InlineSlashEditor extends CustomEditor {
	handleInput(data: string): void {
		const before = this.getText();
		super.handleInput(data);
		triggerAfterEdit(this as unknown as InlineEditor, before);
	}
}

const PATCHED = Symbol.for("inline-slash.patched-editor");

/** Preserve existing editor rendering; Zentui delegates input to its internal base. */
function enhanceEditor(editor: unknown, cleanups: Set<() => void>): boolean {
	const seen = new Set<object>();
	let candidate = editor;
	while (candidate && typeof candidate === "object" && !seen.has(candidate)) {
		seen.add(candidate);
		const target = candidate as Partial<InlineEditor> & { base?: unknown; [PATCHED]?: boolean };
		if ([target.handleInput, target.getText, target.getLines, target.getCursor,
			target.isShowingAutocomplete, target.tryTriggerAutocomplete].every(fn => typeof fn === "function")) {
			if (target[PATCHED]) return true;
			const editable = target as InlineEditor;
			const originalInput = editable.handleInput;
			const patchedInput = (data: string) => {
				const before = editable.getText();
				originalInput.call(editable, data);
				triggerAfterEdit(editable, before);
			};
			editable.handleInput = patchedInput;
			target[PATCHED] = true;
			cleanups.add(() => {
				if (editable.handleInput === patchedInput) {
					editable.handleInput = originalInput;
					delete target[PATCHED];
				}
			});
			return true;
		}
		candidate = target.base;
	}
	return false;
}

export default function (pi: ExtensionAPI) {
	let dispose: (() => void) | undefined;
	pi.on("session_start", (_event, ctx) => {
		dispose?.();
		dispose = undefined;
		if (ctx.mode !== "tui") return;
		if (typeof (InlineSlashEditor.prototype as unknown as AutocompleteTrigger).tryTriggerAutocomplete !== "function") {
			ctx.ui.notify("Inline slash suggestions: this Pi version lacks the required editor autocomplete hook.", "warning");
			return;
		}
		const ui = ctx.ui;
		const previousEditor = ui.getEditorComponent();
		const originalSetEditor = ui.setEditorComponent;
		const cleanups = new Set<() => void>();
		// RPIV installs its lane editor later in session_start. Enhance every new
		// editor factory, not just the one active when this extension starts.
		const installEditor: typeof ui.setEditorComponent = factory => {
			originalSetEditor.call(ui, factory && ((tui, theme, keybindings) => {
				const editor = factory(tui, theme, keybindings);
				if (!enhanceEditor(editor, cleanups)) {
					ui.notify("Inline slash suggestions: the custom editor has no compatible autocomplete hook; preserving it unchanged.", "warning");
				}
				return editor;
			}));
		};
		ui.setEditorComponent = installEditor;
		dispose = () => {
			if (ui.setEditorComponent === installEditor) ui.setEditorComponent = originalSetEditor;
			for (const cleanup of cleanups) cleanup();
			cleanups.clear();
		};
		ui.addAutocompleteProvider(wrapInlineSlash);
		installEditor(previousEditor ?? ((tui, theme, keybindings) => new CustomEditor(tui, theme, keybindings)));
	});
	pi.on("session_shutdown", () => {
		dispose?.();
		dispose = undefined;
	});
}
