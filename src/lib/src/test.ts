import SpotifyPatcher from "./SpotifyPatcher";

(async () => {
    const patcher = new SpotifyPatcher();
    console.log(patcher.config_dir_path);
    await patcher.extractSpotifyApps();
    await patcher.patchSpotifyApps();
})();
