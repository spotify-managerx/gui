import fs from "fs/promises";
import path from "path";
import { Parse } from "unzipper"
import type { PatchConfig } from "./types";
import type { PathLike } from "fs";
import { createReadStream, createWriteStream } from "fs";

export default class SpotifyPatcher {
  config_dir_path: string;

  constructor(configPath?: string) {
    this.config_dir_path = configPath
      ? configPath
      : path.join(process.env.APPDATA!, "spotify-patcher");

    fs.stat(this.config_dir_path).then((res) => {
      if (!res.isDirectory) {
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

  async extractSpotifyApps(): Promise<PathLike[]> {
    const spotifyPath = path.join(process.env.APPDATA!, "Spotify");
    const paths: PathLike[] = [];

    const appEntries = await fs.readdir(path.join(spotifyPath, "Apps"));
    
    for (const appEntry of appEntries) {
      if (appEntry.endsWith(".spa")) {
        console.log(appEntry)
        const extractDir = path.join(spotifyPath, "Apps", appEntry.split(".spa")[0])
        paths.push(extractDir)

        const dirExists = (await fs.stat(extractDir).catch(() => null))?.isDirectory?.();
        if (dirExists) {
          console.log(`Removing ${extractDir}...`)
          await fs.rm(extractDir, {recursive: true})
        }

        const stream = createReadStream(path.join(spotifyPath, "Apps", appEntry)).pipe(Parse())
        
        await new Promise<void>((resolve, reject) => {
          stream.on('entry', async (entry) => {
            const targetPath = path.join(extractDir, entry.path)
            console.log(targetPath)
            const targetDir = path.dirname(targetPath)
            console.log(targetDir)
            
            await fs.mkdir(targetDir, {recursive: true})
            
            if (entry.type === 'Directory') {
              await fs.mkdir(targetPath, {recursive: true})
            } else {
              const writeStream = createWriteStream(targetPath)
              entry.pipe(writeStream)
            }
          });
          stream.on('finish', () => resolve());
          stream.on('error', (error) => reject(error));
        });
      }
    }

    return paths
  }

  async getConfig(): Promise<PatchConfig> {
    return JSON.parse((await fs.readFile(path.join(this.config_dir_path, "config.json"))).toString()) as PatchConfig
  }

  getSpotifyPaths(): {prefs: string; exec: string} {
    return {
      prefs: path.join(process.env.APPDATA!, "Spotify", "prefs"),
      exec: path.join(process.env.APPDATA!, "Spotify", "spotify.exe")
    }
  }
}
