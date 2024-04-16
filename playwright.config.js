import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './tests',
  webServer: [
    {
      command: 'npm run start-frontend',
      url: 'http://localhost:5173',
      timeout: 120 * 1000,
      reuseExistingServer: !process.env.CI,
    },
    {
      command: 'npm run start-backend',
      url: 'http://localhost:5000',
      timeout: 120 * 1000,
      reuseExistingServer: !process.env.CI,
    },
  ],
  use: { ignoreHTTPSErrors: true, baseURL: 'http://localhost:5000' },
});
