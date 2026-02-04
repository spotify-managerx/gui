// Minimal Discord RPC implementation for direct IPC communication
import { createConnection, Socket } from "node:net";
import { randomUUID } from "node:crypto";

const OPCODES = {
  HANDSHAKE: 0,
  FRAME: 1,
  CLOSE: 2,
  PING: 3,
  PONG: 4,
};

class SimpleDiscordRPC {
  private socket: Socket | null = null;
  private clientId: string;
  private connected = false;

  constructor(clientId: string) {
    this.clientId = clientId;
  }

  private encode(op: number, data: any): Buffer {
    const dataStr = JSON.stringify(data);
    const dataLen = Buffer.byteLength(dataStr);
    const packet = Buffer.alloc(8 + dataLen);
    packet.writeInt32LE(op, 0);
    packet.writeInt32LE(dataLen, 4);
    packet.write(dataStr, 8, dataLen);
    return packet;
  }

  async connect(): Promise<void> {
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        if (!this.connected) {
          this.socket?.destroy();
          reject(new Error("Connection timeout"));
        }
      }, 10000);

      this.socket = createConnection("\\\\.\\pipe\\discord-ipc-0", () => {
        console.log("[SimpleRPC] Connected to Discord IPC");
        
        // Send handshake
        const handshake = this.encode(OPCODES.HANDSHAKE, {
          v: 1,
          client_id: this.clientId,
        });
        this.socket?.write(handshake);
      });

      this.socket.on("readable", () => {
        const data = this.socket?.read();
        if (!data) return;

        try {
          const op = data.readInt32LE(0);
          const len = data.readInt32LE(4);
          const payload = JSON.parse(data.slice(8, 8 + len).toString());

          if (op === OPCODES.FRAME && payload.cmd === "DISPATCH" && payload.evt === "READY") {
            this.connected = true;
            clearTimeout(timeout);
            console.log("[SimpleRPC] Ready! Connected as:", payload.data.user.username);
            resolve();
          }
        } catch (err) {
          console.error("[SimpleRPC] Parse error:", err);
        }
      });

      this.socket.on("error", (err) => {
        clearTimeout(timeout);
        reject(err);
      });
    });
  }

  async setActivity(activity: any): Promise<void> {
    if (!this.connected || !this.socket) {
      throw new Error("Not connected");
    }

    const nonce = randomUUID();
    const frame = this.encode(OPCODES.FRAME, {
      cmd: "SET_ACTIVITY",
      args: {
        pid: process.pid,
        activity,
      },
      nonce,
    });

    this.socket.write(frame);
    console.log("[SimpleRPC] Activity set");
  }

  close() {
    this.socket?.end();
    this.connected = false;
  }
}

export default SimpleDiscordRPC;
