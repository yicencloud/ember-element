import Component from "@glimmer/component";
import { action } from "@ember/object";
import argument from "../decorators/argument";

/**
 * Single selection among multiple options.
 *
 * @author Tower He (towerhe@gmail.com)
 * 
 * @class ElRadioComponent
 * @extends Glimmer.Component
 * @public
 */
export default class ElRadioComponent extends Component {
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
   * the value of Radio
   *
   * @property label
   * @type {string | number | boolean}
   * @public
   */
  @argument
  label = null;

  /**
   * whether Radio is disabled
   *
   * @property disabled
   * @type {boolean}
   * @default false
   * @public
   */
  @argument
  disabled = false;

  /**
   * whether to add a border around Radio
   *
   * @property border
   * @type {boolean}
   * @default false
   * @public
   */
  @argument
  border = false;

  /**
   * size of the Radio, only works when `border` is true
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
   * native 'name' attribute
   *
   * @property value
   * @type {string}
   * @public
   */
  @argument
  name = null;

  /**
   * whether the passed `value` equals to `label`
   *
   * @property checked
   * @type {boolean}
   * @public
   */
  get checked() {
    return this.args.value === this.args.label;
  }

  /**
   * when clicking the radio this action is called with the value of the radio.
   *
   * @event change
   * @param {string | number | boolean} value
   * @public
   */

  @action
  handleChange() {
    if (this.args.change === undefined) {
      return;
    }

    this.args.change(this.args.label);
  }
}
