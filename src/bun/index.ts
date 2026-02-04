import { BrowserWindow } from "electrobun/bun";
// @ts-ignore - no types available
// import DiscordRPC from "discord-rpc";

// Discord RPC Setup - DISABLED (causes timeout if Discord not running)
// const DISCORD_CLIENT_ID = "1234567890123456789";
// const rpc = new DiscordRPC.Client({ transport: "ipc" });
// rpc.on("ready", () => {
//   console.log("Discord RPC connected");
//   rpc.setActivity({
//     details: "Customizing Spotify",
//     state: "In Main Menu",
//     startTimestamp: Date.now(),
//     largeImageKey: "managerx_logo",
//     largeImageText: "ManagerX",
//     buttons: [{ label: "View on GitHub", url: "https://github.com/spotify-managerx/gui" }],
//     instance: false,
//   });
// });
// rpc.login({ clientId: DISCORD_CLIENT_ID }).catch(console.error);

// Create the main application window
const mainWindow = new BrowserWindow({
  title: "ManagerX",
  url: "views://mainview/index.html",
  frame: {
    width: 1200,
    height: 800,
    x: 200,
    y: 200,
  },
  // Note: styleMask and titleBarStyle are macOS-only
  // Windows doesn't support custom borderless windows yet in Electrobun
});