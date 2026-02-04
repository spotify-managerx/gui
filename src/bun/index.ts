import { BrowserWindow, createRPC } from "electrobun/bun";
// @ts-ignore - discord-rpc has no types
import DiscordRPC from "discord-rpc";

// Discord RPC Setup
const DISCORD_CLIENT_ID = "1234567890123456789"; // TODO: Replace with actual client ID from Discord Developer Portal
const rpc = new DiscordRPC.Client({ transport: "ipc" });

rpc.on("ready", () => {
  console.log("Discord RPC connected");
  
  // Set initial activity
  rpc.setActivity({
    details: "Customizing Spotify",
    state: "In Main Menu",
    startTimestamp: Date.now(),
    largeImageKey: "managerx_logo", // TODO: Upload to Discord
    largeImageText: "ManagerX",
    buttons: [
      {
        label: "View on GitHub",
        url: "https://github.com/spotify-managerx/gui"
      }
    ],
    instance: false,
  });
});

rpc.login({ clientId: DISCORD_CLIENT_ID }).catch(console.error);

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
  styleMask: {
    Borderless: true,
    Titled: false,
    Closable: true,
    Miniaturizable: true,
    Resizable: false,
    UnifiedTitleAndToolbar: false,
    FullScreen: false,
    FullSizeContentView: true,
    UtilityWindow: false,
    DocModalWindow: false,
    NonactivatingPanel: false,
    HUDWindow: false,
  },
  titleBarStyle: "hiddenInset",
  rpc: createRPC({
    // @ts-ignore - handlers property type mismatch in Electrobun
    handlers: {
      closeWindow: () => {
        mainWindow.close();
      },
      // Minimize and maximize not yet supported by Electrobun API
      minimizeWindow: () => {
        console.log("Minimize not yet implemented in Electrobun");
      },
      maximizeWindow: () => {
        console.log("Maximize not yet implemented in Electrobun");
      },
    },
  }),
});