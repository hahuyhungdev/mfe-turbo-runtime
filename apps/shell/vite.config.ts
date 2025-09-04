import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

export default defineConfig({
  server: { port: 3000 },
  preview: { port: 5000 },
  plugins: [
    react(),
    federation({
      name: "shell",
      remotes: {
        products: {
          type: "module",
          entry: "http://localhost:3002/remoteEntry.js",
          name: "products",
        },
        cart: {
          type: "module",
          entry: "http://localhost:3001/remoteEntry.js",
          name: "cart",
        },
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: "^18.3.1",
        },
        "react-dom": {
          singleton: true,
          requiredVersion: "^18.3.1",
        },
      },
    }),
  ],
  build: {
    target: "esnext",
    modulePreload: false,
    cssCodeSplit: true,
  },
});
