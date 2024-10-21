import { BasePage } from "./BasePage";

export class StatusCodesPage extends BasePage {
  private statusCode200Link: string = 'a[href="status_codes/200"]';
  private statusCode301Link: string = 'a[href="status_codes/301"]';
  private statusCode404Link: string = 'a[href="status_codes/404"]';
  private statusCode500Link: string = 'a[href="status_codes/500"]';
  private statusCodeText: string = "div.example p";

  navigate() {
    this.navigateTo("/status_codes");
  }

  clickStatusCode200() {
    cy.get(this.statusCode200Link).click();
  }

  clickStatusCode301() {
    cy.get(this.statusCode301Link).click();
  }

  clickStatusCode404() {
    cy.get(this.statusCode404Link).click();
  }

  clickStatusCode500() {
    cy.get(this.statusCode500Link).click();
  }

  verifyStatusCodeText(expectedText: string) {
    cy.get(this.statusCodeText).should("contain.text", expectedText);
  }
}
