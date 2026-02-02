import fs from "fs/promises";
import path from "path";
import type { PatchConfig } from "./types";

export default class SpotifyPatcher {
  config_dir_path: string;

  constructor(configPath?: string) {
    this.config_dir_path = configPath
      ? configPath
      : path.join(process.env.APPDATA!, "spotify-patcher");

    fs.exists(this.config_dir_path).then((res) => {
      if (!res) {
        const {prefs: prefsPath, exec: execPath} = this.getSpotifyPaths()

        fs.mkdir(this.config_dir_path).then(() => {
          fs.writeFile(path.join(this.config_dir_path, "config.json"), JSON.stringify({
          color_scheme: "default",
          current_theme: "default",
          plugins: [],
          prefs_path: prefsPath,
          spotify_path: execPath,
          spotify_launch_flags: ""
        } as PatchConfig));
        });
      }
    });
  }

  installWrapper(): void {
    
  }

  getSpotifyPaths(): {prefs: string; exec: string} {
    return {
      prefs: path.join(process.env.APPDATA!, "Spotify", "prefs"),
      exec: path.join(process.env.APPDATA!, "Spotify", "spotify.exe")
    }
  }
}
