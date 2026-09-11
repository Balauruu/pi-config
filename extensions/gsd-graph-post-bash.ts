import { spawn } from "node:child_process"
import { access } from "node:fs/promises"
import path from "node:path"

import type {
  ExtensionAPI,
  ToolResultEvent,
} from "@earendil-works/pi-coding-agent"

const HOOK_PATH = path.join(
  ".gsd-graph",
  "hooks",
  "gsd-graph-update.sh",
)
const HOOK_TIMEOUT_MS = 5_000

function bashCommand(event: ToolResultEvent): string | null {
  if (event.toolName !== "bash") return null
  const command = event.input.command
  return typeof command === "string" ? command : null
}

async function runHook(cwd: string, command: string): Promise<void> {
  const hook = path.join(cwd, HOOK_PATH)

  try {
    await access(hook)
  } catch {
    // gsd-graph is project-scoped. Other projects intentionally do nothing.
    return
  }

  const payload = JSON.stringify({
    tool_name: "Bash",
    tool_input: { command },
  })

  await new Promise<void>((resolve, reject) => {
    const child = spawn(hook, [], {
      cwd,
      stdio: ["pipe", "ignore", "ignore"],
    })
    let settled = false

    const finish = (error?: Error) => {
      if (settled) return
      settled = true
      clearTimeout(timer)
      if (error) reject(error)
      else resolve()
    }

    const timer = setTimeout(() => {
      child.kill("SIGTERM")
      finish(new Error(`hook timed out after ${HOOK_TIMEOUT_MS}ms`))
    }, HOOK_TIMEOUT_MS)

    child.once("error", finish)
    child.once("close", (code, signal) => {
      if (code === 0) {
        finish()
        return
      }
      finish(
        new Error(
          `hook exited with ${signal ? `signal ${signal}` : `code ${code ?? "unknown"}`}`,
        ),
      )
    })
    child.stdin.on("error", () => {
      // A fast-exiting no-op hook can close stdin before the write completes.
    })
    child.stdin.end(payload)
  })
}

export default function gsdGraphPostBash(pi: ExtensionAPI) {
  pi.on("tool_result", async (event, ctx) => {
    const command = bashCommand(event)
    if (command === null) return

    try {
      await runHook(ctx.cwd, command)
    } catch (error) {
      const detail = error instanceof Error ? error.message : String(error)
      console.warn(`[gsd-graph] post-Bash update hook failed: ${detail}`)
    }
  })
}
