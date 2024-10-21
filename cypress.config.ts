import { defineConfig } from "cypress";
import * as dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  e2e: {
    // The base URL for your test
    baseUrl: 'https://the-internet.herokuapp.com',

    // Path to the Cypress spec files
    specPattern: 'cypress/e2e/**/*.cy.ts',

    supportFile: false,

    // Setup node events (optional, for event-driven logic)
    setupNodeEvents(on, config) {
      // You can implement node event listeners here
    },

    // Set the viewport dimensions
    viewportWidth: 1280,
    viewportHeight: 720,

    // Customize other e2e settings here
    retries: {
      runMode: 2, // Retry twice in `cypress run`
      openMode: 0, // No retries in `cypress open`
    },
  },
  env: {
    githubUsername: process.env.GITHUB_USERNAME,
    githubPassword: process.env.GITHUB_PASSWORD,
    googleEmail: process.env.GOOGLE_EMAIL,
    googlePassword: process.env.GOOGLE_PASSWORD,
  },

  video: false, // Disable video recording
  screenshotOnRunFailure: true, // Enable screenshots on failures
});
