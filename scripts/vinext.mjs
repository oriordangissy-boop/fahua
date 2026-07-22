import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";

const action = process.argv[2] ?? "dev";
const cliPath = fileURLToPath(new URL("../node_modules/vinext/dist/cli.js", import.meta.url));
const child = spawn(process.execPath, [cliPath, action], {
  stdio: "inherit",
  env: { ...process.env, WRANGLER_LOG_PATH: ".wrangler/wrangler.log" },
});

child.on("exit", (code) => process.exit(code ?? 1));
