import { BrowserWindow } from "electrobun/bun";

// Create the main application window
const mainWindow = new BrowserWindow({
  title: "spotify-managerx",
  url: "views://mainview/index.html",
  frame: {
    width: 1200,
    height: 800,
    x: 200,
    y: 200,
  },
  devTools: false, // Disable devtools
});

// Prevent F12 and other devtools shortcuts
mainWindow.on('ready', () => {
  // Disable devtools keyboard shortcuts
  mainWindow.webContents?.on('before-input-event', (event, input) => {
    if (input.key === 'F12' || 
        (input.control && input.shift && input.key === 'I') ||
        (input.control && input.shift && input.key === 'J') ||
        (input.control && input.key === 'U')) {
      event.preventDefault();
    }
  });
});

console.log("spotify-managerx started!");