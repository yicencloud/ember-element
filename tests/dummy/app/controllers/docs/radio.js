import Controller from "@ember/controller";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class RadioController extends Controller {
  // BEGIN-SNIPPET basic-usage-demo.js
  @tracked radio = "1";

  @action
  changeRadio(radio) {
    this.radio = radio;
  }
  // END-SNIPPET

  // BEGIN-SNIPPET disabled-demo.js
  @tracked disabledRadio = "selected and disabled";
  // END-SNIPPET

  // BEGIN-SNIPPET button-group-demo.js
  @tracked groupRadio = "3";

  @action
  changeGroupRadio(radio) {
    this.groupRadio = radio;
  }
  // END-SNIPPET

  // BEGIN-SNIPPET button-styles-demo.js
  @tracked buttonStylesRadio1 = "New York";
  @tracked buttonStylesRadio2 = "New York";
  @tracked buttonStylesRadio3 = "New York";
  @tracked buttonStylesRadio4 = "New York";

  @action
  changeButtonStylesRadio1(radio) {
    this.buttonStylesRadio1 = radio;
  }
  @action
  changeButtonStylesRadio2(radio) {
    this.buttonStylesRadio2 = radio;
  }
  @action
  changeButtonStylesRadio3(radio) {
    this.buttonStylesRadio3 = radio;
  }
  // END-SNIPPET

  // BEGIN-SNIPPET with-borders-demo.js
  @tracked withBordersRadio1 = "1";
  @tracked withBordersRadio2 = "1";
  @tracked withBordersRadio3 = "1";
  @tracked withBordersRadio4 = "1";

  @action
  changeWithBordersRadio1(radio) {
    this.withBordersRadio1 = radio;
  }
  @action
  changeWithBordersRadio2(radio) {
    this.withBordersRadio2 = radio;
  }
  // END-SNIPPET
}
