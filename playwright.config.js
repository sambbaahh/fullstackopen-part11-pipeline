import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "tests",
  webServer: [
    {
      command: "npm run start-frontend",
      url: "http://localhost:5173",
      timeout: 120 * 1000,
    },
    {
      command: "npm run start-backend",
      url: "http://localhost:5000",
      timeout: 120 * 1000,
    },
  ],
  use: { baseURL: "http://localhost:5173" },
});
