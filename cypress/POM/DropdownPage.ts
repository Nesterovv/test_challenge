import { BasePage } from './BasePage';

export class DropdownPage extends BasePage {
    private dropdownSelector: string = '#dropdown';

  navigate() {
    this.navigateTo('/dropdown');
  }

  selectOption(value: string) {
    this.selectDropdownByValue(this.dropdownSelector, value);
  }

  verifyOptionSelected(value: string) {
    this.assertDropdownSelectedValue(this.dropdownSelector, value);
  }
}
