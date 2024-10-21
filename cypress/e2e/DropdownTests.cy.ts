import { DropdownPage } from "../POM/DropdownPage";

describe("Dropdown Test", () => {
  const dropdownPage = new DropdownPage();

  it("should select an option from the dropdown", () => {
    dropdownPage.navigate();
    dropdownPage.selectOption("Option 1");
    dropdownPage.verifyOptionSelected("1");
    dropdownPage.selectOption("Option 2");
    dropdownPage.verifyOptionSelected("2");
  });
});
