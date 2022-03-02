// playwright.config.ts
import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir:"src/tests/playwright",
  retries: process.env.CI ? 2 : 0,
  use: {
    trace: 'on-first-retry',
    viewport: { width: 2080, height: 2020 },
    ignoreHTTPSErrors: true,    
    video: 'on-first-retry'
  },
  webServer: {
    command: 'npx ng serve',
    url:"http://localhost:4200/#/",
    timeout: 120 * 1000,
    reuseExistingServer: false
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }
  ],
};
export default config;