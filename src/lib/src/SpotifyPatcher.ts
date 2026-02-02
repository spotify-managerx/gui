import fs from "fs/promises";
import path from "path";

export default class SpotifyPatcher {
  config_dir_path: string;

  constructor(configPath?: string) {
    this.config_dir_path = configPath
      ? configPath
      : path.join(process.env.APPDATA!, "spotify-patcher");

    fs.exists(this.config_dir_path).then((res) => {
      if (!res) {
        fs.mkdir(this.config_dir_path);
      }
    });
  }
}
