import { BrowserWindow, createRPC } from "electrobun/bun";

const DISCORD_CLIENT_ID = "1468686976222761168";

// Initialize Discord RPC using simple direct IPC implementation
(async () => {
  try {
    console.log("[Discord RPC] Initializing...");
    
    const SimpleDiscordRPC = (await import("../services/simpleDiscordRPC")).default;
    const rpc = new SimpleDiscordRPC(DISCORD_CLIENT_ID);
    
    console.log("[Discord RPC] Connecting to Discord...");
    await rpc.connect();
    
    // Set activity once connected
    await rpc.setActivity({
      details: "Customizing Spotify",
      state: "In Main Menu",
      timestamps: {
        start: Date.now(),
      },
      instance: false,
    });
    
    console.log("[Discord RPC] ✓ Successfully initialized!");
    
  } catch (error: any) {
    console.log("[Discord RPC] Failed to initialize:", error?.message || error);
  }
})();

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