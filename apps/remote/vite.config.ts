import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { federation } from '@module-federation/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    federation({
      filename: "remoteEntry.js",
      name: "remote",
      exposes: {
        "./remote-app": "./src/App.svelte",
      },
      shared: {
        "svelte": {
          requiredVersion: "^5.0.0",
        },
      },
      remotes: {},
    }),
  ],
  build: {
    rollupOptions: {
      external: ["svelte"],
    }
  }
})
