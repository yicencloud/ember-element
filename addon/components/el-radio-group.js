import Component from "@glimmer/component";
import { action } from "@ember/object";
import argument from "../decorators/argument";

/**
 * Radio group wrapper.
 *
 * @author Tower He (towerhe@gmail.com)
 */
export default class ElRadioGroupComponent extends Component {
  /**
   * binding value
   *
   * @property value
   * @type {string | number | boolean}
   * @public
   */
  @argument
  value = null;

  /**
   * the size of radio buttons or bordered radios
   *
   * **accepted values**: medium / small / mini
   *
   * @property size
   * @type {string}
   * @public
   */
  @argument
  size = null;

  /**
   * whether the nesting radios are disabled
   *
   * @property disabled
   * @type {boolean}
   * @default false
   * @public
   */
  @argument
  disabled = false;

  /**
   * font color of the checked radio
   *
   * @property textColor
   * @type {string}
   * @default "#ffffff"
   * @public
   */
  @argument
  textColor = "#ffffff";

  /**
   * border and background color of the checked radio
   *
   * @property fill
   * @type {string}
   * @default "#409EFF"
   * @public
   */
  @argument
  fill = "#409EFF";

  /**
   * when clicking the nested radio this action is called with the value of the radio.
   *
   * @event onChange
   * @param {string | number | boolean} value
   * @public
   */

  /**
   * @method updateValue
   * @param {string | number | boolean} value the value of the chosen radio
   */
  @action
  updateValue(value) {
    if (this.args.onChange === undefined) {
      return;
    }

    this.args.onChange(value);
  }
}
