import Component from "@glimmer/component";
import { action } from "@ember/object";
import argument from "../decorators/argument";

/**
 * A group of options for multiple choices.
 *
 * @author Tower He (towerhe@gmail.com)
 *
 * @class ElCheckboxComponent
 * @extends Glimmer.Component
 * @public
 */
export default class ElCheckboxComponent extends Component {
  /**
   * binding value. if `groupValue` is present, `label` is the `value`; if
   * `trueLabel` is present and the checkbox is checked, use `trueLabel` for
   * `value`; if `falseLabel is present and the checkbox is not checked, use
   * `falseLabel` for `value.
   *
   * @property value
   * @type {string | number | boolean}
   * @public
   */
  get value() {
    if (this.group && this.group.value !== null) {
      return this.label;
    } else if (this.trueLabel !== null && this._checked) {
      return this.trueLabel;
    } else if (this.falseLabel !== null && !this._checked) {
      return this.falseLabel;
    }

    return this.args.value ?? null;
  }

  /**
   * value of the `ElCheckbox` when used inside an `ElCheckboxGroup`
   *
   * @property label
   * @type {string}
   * @public
   */
  @argument
  label = null;

  /**
   * value of the `ElCheckbox` if it's checked
   *
   * @property trueLabel
   * @type {string}
   * @public
   */
  @argument
  trueLabel = null;

  /**
   * value of the `ElCheckbox` if it's not checked
   *
   * @property falseLabel
   * @type {string}
   * @public
   */
  @argument
  falseLabel = null;

  /**
   * whether the Checkbox is disabled
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

    if (this.group === null) {
      return false;
    }

    if (this.group.disabled) {
      return true;
    }

    if (this.group.min === null && this.group.max === null) {
      return false;
    }

    if (
      this.group.min &&
      this.group.value.length == this.group.min &&
      this.group.value.includes(this.value)
    ) {
      return true;
    }

    if (
      this.group.max &&
      this.group.value.length >= this.group.max &&
      !this.group.value.includes(this.value)
    ) {
      return true;
    }

    return false;
  }

  /**
   * whether to add a border around `ElCheckbox`
   *
   * @property border
   * @type {boolean}
   * @default false
   * @public
   */
  get border() {
    if (this.args.border) {
      return true;
    }

    if (this.group && this.group.border) {
      return true;
    }

    return false;
  }

  /**
   * size of the Checkbox, only works when `border` is `true`
   *
   * accept values: medium / small / mini
   *
   * @property size
   * @type {string}
   * @public
   */
  get size() {
    if (this.args.size) {
      return this.args.size;
    }

    if (this.group && this.group.size) {
      return this.group.size;
    }

    return null;
  }

  /**
   * native 'name' attribute
   *
   * @property name
   * @type {string}
   * @public
   */
  @argument
  name = null;

  /**
   * same as indeterminate in native checkbox
   *
   * @property indeterminate
   * @type {boolean}
   * @default false
   * @public
   */
  @argument
  indeterminate = false;

  /**
   * the group which checkbox is nested in.
   *
   * @property group
   * @type {ElCheckboxGroupComponent}
   * @public
   */
  @argument
  group = null;

  /**
   * if `indeterminate` is `true`, `checked` will always be `false`.
   * if the `checked` argument is missing and the `value` argument is a
   * boolean, `value` is used for `checked`. otherwise, check whether the
   * `group` argument is present, if it is present and it's `value` contains
   * `label`, set `checked` to `true`.
   *
   * @property checked
   * @type {boolean}
   * @default false
   * @private
   */
  _checked = false;

  get checked() {
    if (this.args.indeterminate) {
      this._checked = false;
    } else if (this.args.checked) {
      this._checked = this.args.checked;
    } else if (typeof this.value === "boolean") {
      this._checked = this.value;
    } else {
      if (
        this.group &&
        this.group.value &&
        this.group.value.includes(this.args.label)
      ) {
        this._checked = true;
      } else {
        this._checked = false;
      }
    }

    return this._checked;
  }

  set checked(value) {
    this._checked = value;
  }

  /**
   * triggers when the binding value changes
   *
   * @event change
   * @param {boolean} checked `checked` of checkbox
   * @param {string | number | boolean} value `value` of checkbox
   * @public
   */

  @action
  handleChange() {
    this._checked = !this._checked;

    if (this.args.change !== undefined) {
      console.log("fire change event in checkbox: ", this._checked, this.value);
      this.args.change(this._checked, this.value);
    }
  }
}
