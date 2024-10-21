/// <reference types="cypress" />

import { DynamicLoadingPage } from "../POM/DynamicLoadingPage";

describe("Dynamically Loaded Page Elements Test", () => {
  const dynamicLoadingPage = new DynamicLoadingPage();

  beforeEach(() => {
    dynamicLoadingPage.navigate();
  });

  it("should verify Example 1: Element on page that is hidden", () => {
    dynamicLoadingPage.clickExample1();
    cy.url().should("include", "/dynamic_loading/1");
    dynamicLoadingPage.clickStartButton();
    dynamicLoadingPage.verifyElementIsVisible();
    dynamicLoadingPage.verifyElementContainsText("Hello World!");
  });

  it("should verify Example 2: Element rendered after the fact", () => {
    dynamicLoadingPage.clickExample2();
    cy.url().should("include", "/dynamic_loading/2");
    dynamicLoadingPage.clickStartButton();
    dynamicLoadingPage.verifyElementIsVisible();
    dynamicLoadingPage.verifyElementContainsText("Hello World!");
  });
});
