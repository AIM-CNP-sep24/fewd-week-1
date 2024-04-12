import { defineConfig } from "vite";
import { apiServer } from "vite-api-server";

export default defineConfig({
  plugins: [
    apiServer({
      handler: "./api.js",
    }),
  ],
});
