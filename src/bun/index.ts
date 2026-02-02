import { BrowserWindow } from "electrobun/bun";

new BrowserWindow({
  title: "spotify-managerx",
  url: "views://mainview/index.html",
  frame: {
    width: 1200,
    height: 800,
    x: 200,
    y: 200,
  },
});