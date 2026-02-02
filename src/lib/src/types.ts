type PatchConfig = {
    current_theme: string | undefined;
    spotify_launch_flags: string | undefined;
    prefs_path: string | undefined;
    spotify_path: string | undefined;
    color_scheme: string | undefined;
    plugins: Plugin[];
}

type Plugin = {
    name: string
    author: {
        name: string;
        url: string;
    }
}

export type {PatchConfig, Plugin}