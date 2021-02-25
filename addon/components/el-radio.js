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
  get value() {
    if (this.args.value !== undefined) {
      return this.args.value;
    }

    if (this.group) {
      return this.group.value;
    }
  }

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
  get disabled() {
    if (this.args.disabled) {
      return true;
    }

    if (this.group) {
      return this.group.disabled;
    }

    return false;
  }

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
  get size() {
    if (this.args.size) {
      return this.args.size;
    }

    if (this.group) {
      return this.group.size;
    }

    return null;
  };

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
    return this.value === this.args.label;
  }

  /**
   * the group which radio is nested in.
   * 
   * @property group
   * @type {ElRadioGroupComponent}
   * @public
   */
  @argument
  group = null;

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
