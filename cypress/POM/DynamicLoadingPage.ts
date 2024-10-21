import { BasePage } from "./BasePage";

export class DynamicLoadingPage extends BasePage {
  private example1Link: string = "Example 1: Element on page that is hidden";
  private example2Link: string = "Example 2: Element rendered after the fact";
  private startButtonSelector: string = "#start button";
  private finishSelector: string = "#finish";

  navigate() {
    this.navigateTo("/dynamic_loading");
  }

  clickExample1() {
    cy.contains(this.example1Link).click();
  }

  clickExample2() {
    cy.contains(this.example2Link).click();
  }

  clickStartButton() {
    cy.get(this.startButtonSelector).click();
  }

  verifyElementIsVisible() {
    cy.get(this.finishSelector, { timeout: 10000 }).should("be.visible");
  }

  verifyElementContainsText(expectedText: string) {
    cy.get(this.finishSelector).should("contain.text", expectedText);
  }
}
