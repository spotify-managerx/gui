export default {
    app: {
        name: "spotify-managerx",
        identifier: "spotify-managerx.dev",
        version: "0.0.1-alpha",
    },
    build: {
        views: {
            mainview: {
                entrypoint: "src/mainview/index.tsx",
                external: [],
            },
        },
        copy: {
            "src/mainview/index.html": "views/mainview/index.html",
            "src/mainview/index.css": "views/mainview/index.css",
        },
        mac: {
            bundleCEF: false,
        },
        linux: {
            bundleCEF: false,
        },
        win: {
            bundleCEF: false,
        },
    },
};