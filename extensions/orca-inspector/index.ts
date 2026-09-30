import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";
import type { InspectorRegistration, InspectorRegistrationRequest } from "pi-subagents/inspectors";
import { createOrcaInspector } from "./plugin.ts";

export default function (pi: ExtensionAPI) {
  const plugin = createOrcaInspector();
  let registration: InspectorRegistration | undefined;
  pi.on("session_start", (_event, ctx) => {
    registration?.dispose();
    const request: InspectorRegistrationRequest = { version: 1, plugin };
    pi.events.emit("pi-subagents:inspector-register:v1", request);
    if (request.result?.ok) registration = request.result.registration;
    else if (process.env.ORCA_WORKTREE_ID) {
      ctx.ui.notify(request.result ? String(request.result.error) :
        "Orca inspector requires pi-subagents with the inspector registration API (v0.72.0+).", "warning");
    }
  });
  // Unregister callbacks only: an inspector is independent of its parent session.
  pi.on("session_shutdown", () => registration?.dispose());
}
