export class GlitchLoginPage {
  private loginButton = "Log In";
  private githubLoginButton = "Log in with GitHub";
  private usernameValidationSelector = "#username-validation";

  navigateToGlitchSupport() {
    cy.visit("https://support.glitch.com/");
  }

  clickLoginButton() {
    cy.contains(this.loginButton).click();
  }

  clickGithubLoginButton() {
    cy.contains(this.githubLoginButton).click();
  }

  loginWithGithub() {
    cy.origin("https://github.com", () => {
      cy.get('input[name="login"]').type(Cypress.env("githubUsername"));
      cy.get('input[name="password"]').type(Cypress.env("githubPassword"), {
        log: false,
      });
      cy.get('input[name="commit"]').click();
    });
  }

  interceptCheckUsernameAPI() {
    cy.intercept("GET", "/u/check_username*").as("checkUsername");
  }

  waitForCheckUsernameAPI() {
    cy.wait("@checkUsername").its("response.statusCode").should("eq", 200);
  }

  verifyUsernameValidationLabel() {
    cy.get(this.usernameValidationSelector).should(
      "contain.text",
      "Your username is available"
    );
  }
}
