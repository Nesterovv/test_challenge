export class BasePage {
  navigateTo(url: string) {
    cy.visit(url);
  }

  clickElement(selector: string) {
    cy.get(selector).click();
  }

  typeText(selector: string, text: string) {
    cy.get(selector).type(text);
  }

  assertUrlContains(path: string) {
    cy.url().should("include", path);
  }

  assertElementContainsText(selector: string, text: string) {
    cy.get(selector).should("contain.text", text);
  }

  selectDropdownByValue(selector: string, value: string) {
    cy.get(selector).select(value);
  }

  assertDropdownSelectedValue(selector: string, value: string) {
    cy.get(selector).should("have.value", value);
  }

  waitForElementVisible(selector: string, timeout = 10000) {
    cy.get(selector, { timeout }).should("be.visible");
  }
}
