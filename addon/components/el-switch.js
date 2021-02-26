import Component from "@glimmer/component";
import { action } from "@ember/object";
import argument from "../decorators/argument";

export default class ElSwitchComponent extends Component {
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
   * whether Switch is disabled
   *
   * @property disabled
   * @type {boolean}
   * @default false
   * @public
   */
  @argument
  disabled = false;

  /**
   * width of Switch
   *
   * @property width
   * @type {number}
   * @default 40
   * @public
   */
  @argument
  width = 40;

  /**
   * class name of the icon displayed when in `on` state, overrides `activeText`
   *
   * @property activeIconClass
   * @type {string}
   * @public
   */
  @argument
  activeIconClass = null;

  /**
   * class name of the icon displayed when in `off` state, overrides `inactiveText`
   *
   * @property inactiveIconClass
   * @type {string}
   * @public
   */
  @argument
  inactiveIconClass = null;

  /**
   * text displayed when in `on` state
   *
   * @property activeText
   * @type {string}
   * @public
   */
  @argument
  activeText = null;

  /**
   * text displayed when in `off` state
   *
   * @property inactiveText
   * @type {string}
   * @public
   */
  @argument
  inactiveText = null;

  /**
   * switch value when in `on` state
   *
   * @property activeValue
   * @type {string | number | boolean}
   * @default true
   * @public
   */
  @argument
  activeValue = true;

  /**
   * switch value when in `off` state
   *
   * @property inactiveValue
   * @type {string | number | boolean}
   * @default false
   * @public
   */
  @argument
  inactiveValue = false;

  /**
   * background color when in `on` state
   *
   * @property activeText
   * @type {string}
   * @default "#409EFF"
   * @public
   */
  @argument
  activeColor = "#409EFF";

  /**
   * background color when in `off` state
   *
   * @property inactiveText
   * @type {string}
   * @default "#C0CCDA"
   * @public
   */
  @argument
  inactiveColor = "#C0CCDA";

  /**
   * input name of Switch
   *
   * @property name
   * @type {string}
   * @public
   */
  @argument
  name = null;

  /**
   * whether to trigger form validation
   *
   * @property validateEvent
   * @type {boolean}
   * @default true
   * @public
   */
  @argument
  validateEvent = true;

  /**
   * check the `value` of the switch, if it is a boolean and is `true` or the `value`
   * equals to `activeValue`, `checked` will be `true`.
   *
   * @property checked
   * @type {boolean}
   * @public
   */
  get checked() {
    if (this.value && typeof this.value === "boolean") {
      return this.value;
    }

    if (this.value === this.activeValue) {
      return true;
    }

    return false;
  }

  /**
   * custom style of `switch`
   *
   * @property style
   * @type {string}
   * @public
   */
  get style() {
    let style = `width: ${this.width}px; `;
    if (this.activeColor !== "#409EFF" || this.inactiveColor !== "#C0CCDA") {
      let color = this.checked ? this.activeColor : this.inactiveColor;
      style += `background-color: ${color}; border-color: ${color};`;
    }

    return style;
  }

  /**
   * triggers when value changes
   *
   * @event change
   * @param {string | number | boolean} value value after changing
   * @param {boolean} checked whether the switch is active
   * @public
   */

  @action
  handleChange() {
    if (this.args.change === undefined) {
      return;
    }

    if (this.checked) {
      this.args.change(this.inactiveValue, false);
    } else {
      this.args.change(this.activeValue, true);
    }
  }

  /**
   * focus the Switch component
   *
   * @method focus
   */
  focus() {}
}
