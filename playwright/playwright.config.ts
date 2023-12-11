import { devices, PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './test',
  /* Maximum time one test can run for. */
  timeout: 30 * 1000,
  expect: {
    timeout: 50000
  },
  fullyParallel: true,
  retries: 0,
  workers: 1,
  reporter: [
        ['html', { open: 'never' }],
        ['list', { printSteps: true }]
      ],
  use: {
    headless: false,
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 30000,
    trace: 'retain-on-failure',
    ignoreHTTPSErrors: true,
    baseURL: 'www.google.com',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'ui',
      testDir: './test',
      testMatch: /.\/test\/.*.spec.ts/,
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1920, height: 1080 },
      }
    }
  ]
};

export default config;
