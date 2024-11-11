/* eslint-disable no-restricted-exports */
import { URL, fileURLToPath } from "url";

import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";

export default defineConfig({
    plugins: [
        eslint({
            lintOnStart: true,
            failOnWarning: false,
            failOnError: false
        })
    ],
    resolve: {
        alias: [
            {
                find: "@",
                replacement: fileURLToPath(new URL("./src", import.meta.url))
            }
        ]
    }
});
