import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

// Add one entry per custom tool that a Herdr agent may request in its
// `tools:` frontmatter. Use the extension's absolute entry-file path;
// multiple tools from the same extension can share that path.
const toolExtensions: Record<string, string> = {
  ffgrep: "/home/balauru/.pi/agent/npm/node_modules/@ff-labs/pi-fff/src/index.ts",
  fffind: "/home/balauru/.pi/agent/npm/node_modules/@ff-labs/pi-fff/src/index.ts",
};

export default function (pi: ExtensionAPI): void {
  // Herdr launches restricted children with extension discovery disabled.
  // Registering each tool tells Herdr which extension to load explicitly.
  pi.on("session_start", () => {
    const register = (
      globalThis as typeof globalThis & {
        __pi_interactive_subagents?: {
          registerToolExtension(name: string, path: string): void;
        };
      }
    ).__pi_interactive_subagents?.registerToolExtension;

    if (!register) return;

    for (const [tool, extensionPath] of Object.entries(toolExtensions)) {
      register(tool, extensionPath);
    }
  });
}
