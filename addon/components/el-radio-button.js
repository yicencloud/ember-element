import RadioComponent from "./el-radio";
import { computed } from "@ember/object";
import { alias } from "@ember/object/computed";

/**
 * Single selection among multiple options and looks like buttons.
 * 
 * @argument {string | number | boolean} value binding value
 * @argument {string | number} label the value of Radio
 * @argument {boolean} disabled whether Radio is disabled
 * @argument {string} size size of the Radio, only works when `border` is true
 * @argument {string} name native 'name' attribute
 * 
 * @argument {string} textColor font color of the radio
 * @argument {string} fill border and background color of the radio
 * 
 * @event onClick triggers when the bound value changes
 *                @param value the label value of the chosen radio
 */
export default class ElRadioButtonComponent extends RadioComponent {
  /**
   * Alias of `checked`
   *
   * @property active
   * @type boolean
   * @public
   */
  @alias("checked") active;
  /**
   * font color of the radio
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
   * border and background color of the radio
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
   * custom style of the radio
   * 
   * @property buttonStyle
   * @type string
   * @public
   */
  @computed("textColor", "fill")
  get buttonStyle() {
    if (this.textColor !== "#ffffff" || this.fill !== "#409EFF") {
      return `background-color: ${this.fill}; border-color: ${this.fill}; box-shadow: ${this.fill} -1px 0px 0px 0px; color: ${this.textColor};`;
    }
  }
}
