import Controller from "@ember/controller";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class SwitchController extends Controller {
  // BEGIN-SNIPPET switch-basic-usage-demo.js
  @tracked basicUsageValue1 = true;
  @tracked basicUsageValue2 = true;

  @action
  toggleBasicUsageValue1(value, checked) {
    console.log(`toggleBasicUsageValue1 - (value: ${value}, checked: ${checked})`);
    this.basicUsageValue1 = !this.basicUsageValue1;
  }

  @action
  toggleBasicUsageValue2(value, checked) {
    console.log(`toggleBasicUsageValue2 - (value: ${value}, checked: ${checked})`);
    this.basicUsageValue2 = !this.basicUsageValue2;
  }
  // END-SNIPPET

  // BEGIN-SNIPPET switch-text-description-demo.js
  @tracked textDescriptionValue1 = true;
  @tracked textDescriptionValue2 = true;

  @action
  toggleTextDescriptionValue1(value, checked) {
    console.log(`toggleTextDescriptionValue2 - (value: ${value}, checked: ${checked})`);
    this.textDescriptionValue1 = !this.textDescriptionValue1;
  }

  @action
  toggleTextDescriptionValue2(value, checked) {
    console.log(`toggleTextDescriptionValue2 - (value: ${value}, checked: ${checked})`);
    this.textDescriptionValue2 = !this.textDescriptionValue2;
  }
  // END-SNIPPET

  // BEGIN-SNIPPET switch-extended-value-types-demo.js
  @tracked extendedValueTypesValue = 100;

  @action
  handleExtendedValueTypesValueChange(value, checked) {
    console.log(`handleExtendedValueTypesValue - (value: ${value}, checked: ${checked})`);
    this.extendedValueTypesValue = value;
  }
  // END-SNIPPET

  // BEGIN-SNIPPET switch-disabled-demo.js
  @tracked disabledValue1 = true;
  @tracked disabledValue2 = false;
  // END-SNIPPET
}
