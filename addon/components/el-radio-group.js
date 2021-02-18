import Component from "@glimmer/component";
import { action } from "@ember/object";

/**
 * Radio group wrapper.
 * 
 * @argument {string | number | boolean} value binding value
 * @argument {string} size the size of radio buttons or bordered radios
 *           accepted values: medium / small / mini
 * @argument {boolean} disabled whether the nesting radios are disabled
 * @argument {string} textColor font color of the radio
 * @argument {string} fill border and background color of the radio
 * 
 * @event onChange triggers when the bound value changes
 *                 @param the label value of the chosen radio
 */
export default class ElRadioGroupComponent extends Component {
  /**
   * font color of the checked radio
   * 
   * @property textColor
   * @type string
   * @default "#ffffff"
   * @public
   */
  get textColor() {
    return this.args.textColor ?? "#ffffff";
  }
  /**
   * border and background color of the checked radio
   * 
   * @property fill
   * @type string
   * @default "#409EFF"
   * @public
   */
  get fill() {
    return this.args.fill ?? "#409EFF";
  }

  /**
   * @method updateValue
   * @param {*} value the value of the chosen radio
   */
  @action
  updateValue(value) {
    if (this.args.onChange === undefined) {
      return;
    }

    this.args.onChange(value);
  }
}
