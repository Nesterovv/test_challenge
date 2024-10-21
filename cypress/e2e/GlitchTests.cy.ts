/// <reference types="cypress" />

import { GlitchLoginPage } from '../POM/GlitchLoginPage';

describe('Glitch Support Login Test using POM', () => {
  const glitchLoginPage = new GlitchLoginPage();

  beforeEach(() => {
    glitchLoginPage.navigateToGlitchSupport();
    glitchLoginPage.interceptCheckUsernameAPI();
  });

  it('should log in via GitHub successfully', () => {
    glitchLoginPage.clickLoginButton();
    glitchLoginPage.clickGithubLoginButton();

    glitchLoginPage.loginWithGithub();
    glitchLoginPage.waitForCheckUsernameAPI();
    glitchLoginPage.verifyUsernameValidationLabel();
  });
});
