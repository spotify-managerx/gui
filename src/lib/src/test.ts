import SpotifyPatcher from "./SpotifyPatcher";

(async () => {
    const patcher = new SpotifyPatcher();
    console.log(patcher.config_dir_path);
    console.log(await patcher.getConfig())
    console.log(await patcher.extractSpotifyApps())
})();
