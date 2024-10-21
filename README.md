
# Cypress TypeScript Automation Project

This project is a Cypress test automation suite written in TypeScript. It automates different components from [The Internet](https://the-internet.herokuapp.com/) website and includes a login validation on the [Glitch Support](https://support.glitch.com/) website.

## Features

- **Task 1**: Automation of components from the "The Internet" website:
  - Dropdown
  - Broken Images
  - Dynamic Loading
  - Redirect Link (with status code validation)
  
- **Task 2**: Automating the login process using OAuth (GitHub) and validating successful login on the Glitch Support website.

- **Page Object Model (POM)** structure for easier test maintenance and scalability.
- Use of `.env` file for storing sensitive credentials securely.

## Prerequisites

Before running the project, make sure you have the following installed:

- Node.js (v12 or higher)
- npm (v6 or higher)
- Git

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install dependencies:**
   Install the Cypress and other dependencies by running:
   ```bash
   npm install
   ```

3. **Create a `.env` file:**
   Create a `.env` file in the root of the project to securely store your credentials:
   ```bash
   touch .env
   ```

   Add the following contents (replace the values with your actual credentials):
   ```bash
   GITHUB_USERNAME=your-github-username
   GITHUB_PASSWORD=your-github-password
   ```

4. **Run Cypress Test Runner:**
   You can run Cypress in interactive mode by running the following command:
   ```bash
   npx cypress open
   ```

5. **Run Tests in Headless Mode:**
   If you want to run the tests in headless mode, use the following command:
   ```bash
   npx cypress run
   ```

## Test Description

### Task 1: Automating Components from [The Internet](https://the-internet.herokuapp.com/)

- **Dropdown Test**: Automates the selection of options from a dropdown component.
- **Broken Images Test**: Verifies that certain images on the page are broken.
- **Dynamic Loading Test**: Verifies that elements are dynamically loaded after a trigger.
- **Redirect Link Test**: Automates navigating through redirect links and validates that the page contains the correct status code on the final destination page.

### Task 2: Glitch Support Login Automation

- **GitHub Login Test**: Automates the process of logging into the Glitch support page using GitHub OAuth and verifies that the user is logged in.

## Project Structure

```
|-- cypress
|   |-- e2e
|       |-- BrokenImageTests.cy.ts   # Test file for broken images
|       |-- DropdownTests.cy.ts      # Test file for dropdown functionality
|       |-- DynamicLoadingPage.cy.ts # Test file for dynamic loading
|       |-- GlitchTests.cy.ts        # Test file for login (Google/GitHub)
|       |-- RedirectLinkPage.cy.ts   # Test file for redirect link validation
|   |-- POM                          # Folder containing Page Object Models for different components
|       |-- BasePage.ts              # BasePage containing shared functionalities
|       |-- BrokenImagePage.ts       # POM for broken images
|       |-- DropdownPage.ts          # POM for dropdown functionality
|       |-- DynamicLoadingPage.ts    # POM for dynamic loading
|       |-- GlitchLoginPage.ts       # POM for handling Glitch login (Google/GitHub)
|       |-- RedirectLinkPage.ts      # POM for redirect link
|-- .env                             # Environment variables file (not committed)
|-- cypress.config.ts                # Cypress configuration file
|-- package-lock.json                # Package lock for consistent dependency versions
|-- package.json                     # Project dependencies
|-- tsconfig.json                    # TypeScript configuration file
|-- .gitignore                       # Git ignore file
```

## Custom Commands

- The project includes support for custom Cypress commands such as waiting for API requests, interacting with dropdowns, handling dynamic elements, and OAuth login flows.

## License

This project is licensed under the MIT License.
