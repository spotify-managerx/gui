type PatchConfig = {
    current_theme: string | undefined;
    spotify_launch_flags: string | undefined;
    prefs_path: string | undefined;
    spotify_path: string | undefined;
    color_scheme: string | undefined;
    plugins: Plugin[];
    spotify_version?: string;
    homeConfig: boolean;
    sidebarConfig: boolean;
    expFeatures: boolean;
    versionInfo: boolean;
}

type Plugin = {
    name: string
    author: {
        name: string;
        url: string;
    }
}
interface Patch {
    Name: string;
    Regex: string;
    Replacement: (match: string, ...submatches: string[]) => string;
    Once?: boolean;
}

type Flag = {
    SpotifyVer: string;
    CustomApp: string[];
    HomeConfig: boolean;
    SidebarConfig: boolean;
    ExpFeatures: boolean;
}

export type {PatchConfig, Plugin, Flag, Patch}