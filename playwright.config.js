import { defineConfig } from "@playwright/test";
export default defineConfig({
  testDir: "tests",
  webServer: [
    {
      command: "npm run start-frontend",
      url: "http://127.0.0.1:5173",
      timeout: 120 * 1000,
    },
    {
      command: "npm run start-backend",
      url: "http://127.0.0.1:5000",
      timeout: 120 * 1000,
    },
  ],
  use: { baseURL: "http://127.0.0.1:5173" },
});
