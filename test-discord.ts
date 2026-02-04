// Test if Bun can connect to Discord IPC
import { createConnection } from "node:net";

const PIPE_PATH = "\\\\.\\pipe\\discord-ipc-0";

console.log("Testing Discord IPC connection...");
console.log("Pipe path:", PIPE_PATH);

const socket = createConnection(PIPE_PATH, () => {
  console.log("✓ Successfully connected to Discord IPC!");
  socket.end();
  process.exit(0);
});

socket.on("error", (err) => {
  console.log("✗ Failed to connect:", err.message);
  process.exit(1);
});

setTimeout(() => {
  console.log("✗ Timeout - could not connect");
  socket.end();
  process.exit(1);
}, 5000);
