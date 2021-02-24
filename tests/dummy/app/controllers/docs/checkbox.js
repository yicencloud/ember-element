import Controller from "@ember/controller";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class CheckboxController extends Controller {
  // BEGIN-SNIPPET checkbox-basic-usage-demo.js
  @tracked checkboxValue = true;

  @action
  toggleCheckboxValue(value) {
    this.checkboxValue = !this.checkboxValue;
  }
  // END-SNIPPET

  // BEGIN-SNIPPET checkbox-disabled-state-demo.js
  @tracked checkboxValue1 = false;
  @tracked checkboxValue2 = true;
  // END-SNIPPET

  // BEGIN-SNIPPET checkbox-group-demo.js
  @tracked checkboxGroupValue = ["selected and disabled", "Option A"];

  @action
  updateCheckboxGroupValue(value) {
    console.log(value);
    this.checkboxGroupValue = value;
  }
  // END-SNIPPET

  // BEGIN-SNIPPET checkbox-indeterminate-demo.js
  @tracked isIndeterminate = true;
  @tracked checkAll = false;
  @tracked checkedCities = ["Shanghai", "Beijing"];
  @tracked cities = ["Shanghai", "Beijing", "Guangzhou", "Shenzhen"];

  @action
  handleCheckAllChange() {
    this.checkAll = !this.checkAll;
    this.isIndeterminate = false;

    if (!this.checkAll) {
      this.checkedCities = [];
    } else {
      this.checkedCities = [...this.cities];
    }
  }

  @action
  handleCheckedCitiesChange(value) {
    this.checkedCities = value;

    let checkedCount = value.length;
    this.checkAll = checkedCount === this.cities.length;
    this.isIndeterminate =
      checkedCount > 0 && checkedCount < this.cities.length;
  }
  // END-SNIPPET

  // BEGIN-SNIPPET checkbox-min-max-items-demo.js
  @tracked minMaxItemsCheckedCities = ["Shanghai", "Beijing"];
  @tracked minMaxItemsCities = ["Shanghai", "Beijing", "Guangzhou", "Shenzhen"];

  @action
  handleMinMaxItemsChange(value) {
    this.minMaxItemsCheckedCities = value;
  }
  // END-SNIPPET

  // BEGIN-SNIPPET checkbox-button-style-demo.js
  @tracked buttonStyleCheckedCities1 = ["Shanghai"];
  @tracked buttonStyleCheckedCities2 = ["Shanghai"];
  @tracked buttonStyleCheckedCities3 = ["Shanghai"];
  @tracked buttonStyleCheckedCities4 = ["Shanghai"];
  @tracked buttonStyleCities = ["Shanghai", "Beijing", "Guangzhou", "Shenzhen"];

  @action
  handleButtonStyleChange1(value) {
    this.buttonStyleCheckedCities1 = value;
  }

  @action
  handleButtonStyleChange2(value) {
    this.buttonStyleCheckedCities2 = value;
  }

  @action
  handleButtonStyleChange3(value) {
    this.buttonStyleCheckedCities3 = value;
  }

  @action
  handleButtonStyleChange4(value) {
    this.buttonStyleCheckedCities4 = value;
  }
  // END-SNIPPET

  // BEGIN-SNIPPET checkbox-with-borders-demo.js
  @tracked withBordersValue1 = true;
  @tracked withBordersValue2 = false;
  @tracked withBordersValue3 = false;
  @tracked withBordersValue4 = true;

  @tracked withBordersGroupValue1 = [];
  @tracked withBordersGroupValue2 = [];

  @action
  toggleWithBordersValue1(value) {
    this.withBordersValue1 = value;
  }

  @action
  toggleWithBordersValue2(value) {
    this.withBordersValue2 = value;
  }

  @action
  toggleWithBordersValue3(value) {
    this.withBordersValue3 = value;
  }

  @action
  toggleWithBordersValue4(value) {
    this.withBordersValue4 = value;
  }

  @action
  handleWithBordersGroupValueChange1(value) {
    this.withBordersGroupValue1 = value;
  }

  @action
  handleWithBordersGroupValueChange2(value) {
    this.withBordersGroupValue2 = value;
  }
  // END-SNIPPET
}
