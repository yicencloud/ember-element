import Component from "@glimmer/component";
import { action } from "@ember/object";

/**
 * Single selection among multiple options.
 * 
 * @argument {string | number | boolean} value binding value
 * @argument {string | number | boolean} label the value of Radio
 * @argument {boolean} disabled whether Radio is disabled
 * @argument {boolean} border whether to add a border around Radio
 * @argument {string} size size of the Radio, only works when `border` is true
 * @argument {string} name native 'name' attribute
 * 
 * @event onClick triggers when the bound value changes
 *                @param value the label value of the chosen radio
 */
export default class ElRadioComponent extends Component {
  /**
   * whether the passed `value` is equals `label`
   * 
   * @property checked
   * @type boolean
   * @public
   */
  get checked() {
    return this.args.value == this.args.label;
  }
  /**
   * @method handleClick
   */
  @action
  handleClick() {
    if (this.args.onClick === undefined) {
      return;
    }

    this.args.onClick(this.args.label);
  }
}
