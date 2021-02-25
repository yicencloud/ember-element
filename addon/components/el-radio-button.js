import RadioComponent from "./el-radio";
import { computed } from "@ember/object";
import { alias } from "@ember/object/computed";

/**
 * Single selection among multiple options and looks like buttons.
 * 
 * @author Tower He (towerhe@gmail.com)
 */
export default class ElRadioButtonComponent extends RadioComponent {
  
  /**
   * font color of the checked radio
   *
   * @property textColor
   * @type {string}
   * @default "#ffffff"
   * @public
   */
  get textColor() {
    if (this.group && this.group.textColor) {
      return this.group.textColor;
    }

    return "#ffffff";
  }

  /**
   * border and background color of the checked radio
   *
   * @property fill
   * @type {string}
   * @default "#409EFF"
   * @public
   */
  get fill() {
    if (this.group && this.group.fill) {
      return this.group.fill;
    }

    return "#409EFF";
  }

  /**
   * Alias of `checked`
   *
   * @property active
   * @type {boolean}
   * @public
   */
  @alias("checked") active;
  
  /**
   * custom style of the radio
   * 
   * @property buttonStyle
   * @type {string}
   * @public
   */
  @computed("textColor", "fill")
  get buttonStyle() {
    if (this.textColor !== "#ffffff" || this.fill !== "#409EFF") {
      return `background-color: ${this.fill}; border-color: ${this.fill}; box-shadow: ${this.fill} -1px 0px 0px 0px; color: ${this.textColor};`;
    }
  }

}
