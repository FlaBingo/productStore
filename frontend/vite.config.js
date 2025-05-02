import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    nodePolyfills({
      // Whether to polyfill `node:` protocol imports
      protocolImports: true,
    }),
  ],
  resolve: {
    alias: {
      'node:fs/promises': 'path-to-empty-module.js',
      'node:fs': 'path-to-empty-module.js',
      'crypto': 'crypto-browserify',
      'fs': 'path-to-empty-module.js',
      'path': 'path-browserify',
    }
  },
  optimizeDeps: {
    exclude: ['eslint', 'file-entry-cache'],
  },
  build: {
    commonjsOptions: {
      exclude: [/eslint/, /file-entry-cache/]
    },
    outDir: "dist",
    sourcemap: false
  },
  server: {
    proxy: {
      "/api": {
        target: process.env.CLIENT_URL || "http://localhost:5000",
        changeOrigin: true,
        secure: process.env.NODE_ENV === "production",
        ws: true,
        configure: (proxy) => {
          proxy.on("error", (err) => console.log("proxy error", err));
          proxy.on("proxyReq", (proxyReq, req) =>
            console.log("Sending Request:", req.method, req.url)
          );
        },
      },
    },
  },
});
