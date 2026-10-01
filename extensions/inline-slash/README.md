# Inline slash suggestions

Adds command-name autocomplete after whitespace anywhere in Pi's main input editor, including subsequent lines:

```text
Please use /skill:re
```

Uses Pi's existing command catalogue, including enabled skills, prompt templates, built-in commands, and extension commands. The selected completion replaces only the token before the cursor. Other text and lines are preserved. Tab selects a suggestion; Escape dismisses it. Existing start-of-message, argument, and file completions remain delegated to Pi.

This extension **only suggests and inserts text**. It does not execute commands embedded in a prompt or change Pi's command dispatch rules. Paths containing a second slash and slash characters inside words/URLs are not treated as inline commands.

## Load

Pi automatically discovers `/home/balauru/.pi/agent/extensions/inline-slash/index.ts`. Run `/reload` or restart Pi to load it.

The extension runs only in TUI mode. It composes with an existing editor factory rather than replacing its editor or rendering. Existing `CustomEditor` implementations and Zentui's wrapped editor are supported. An incompatible editor is preserved unchanged with a warning.

## Implementation and compatibility

A provider wrapper passes the current inline token to the existing provider as a standalone command, then maps its completion back into the original text. With no existing editor, a `CustomEditor` is installed. Otherwise the previous factory is retained and its underlying editor's input handler is enhanced, preserving application keybindings and UI decoration. The extension intercepts `ctx.ui.setEditorComponent()` for the session so later replacements are enhanced too: RPIV's lane switcher installs its own `LaneDockEditor` after other editors during startup. Shutdown restores the setter and any input handlers still owned by this extension.

Pi currently rejects `/` in extension provider `triggerCharacters`. There is also no public autocomplete-opening method. Consequently the editor uses the **internal method** `tryTriggerAutocomplete()` through a narrow TypeScript structural cast. To compose with Zentui's wrapper it also traverses the wrapper's internal `base` reference, checking capabilities and preventing cycles. Startup checks that the trigger method exists. Future Pi updates may require adapting this integration even if the method still exists. No installed Pi files are modified.

## Verify

```sh
node --test /home/balauru/.pi/agent/tests/inline-slash.test.mjs
```

Tests use the installed Pi editor and autocomplete provider, loaded through Pi's `jiti` dependency. They cover automatic inline menus, filtering, selection, undo, dismissal, prefilled Tab completion, preserved surrounding text, default behavior, registration guards, and activation with existing editors (including the installed Zentui wrapper), later RPIV lane editor replacement, and shutdown cleanup. The baseline test confirms that a provider wrapper alone cannot open inline menus in the default editor.

The default installed-package directory in the test is `/home/balauru/.local/share/pi-node/node-v22.23.1-linux-x64/lib/node_modules/@earendil-works/pi-coding-agent`. Set `PI_CODING_AGENT_DIR` to the absolute package directory if Pi moves. The wrapper regression test also uses the installed Zentui source at `/home/balauru/.pi/agent/npm/node_modules/pi-zentui/extensions/zentui/ui.ts`. The replacement regression uses `/home/balauru/.pi/agent/npm/node_modules/@juicesharp/rpiv-pi/extensions/rpiv-core/lane-dock-editor.ts`.
