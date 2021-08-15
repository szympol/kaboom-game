import {defineConfig} from "vite";

const path = require('path');

export default defineConfig({
    resolve: {
        alias: {
            kaboom: path.resolve(__dirname, 'node_modules/kaboom/dist/kaboom.mjs'),
            '@': path.resolve(__dirname, './src')
        }
    }
});
