import Component from "@glimmer/component";
import { action } from "@ember/object";
import argument from "../decorators/argument";

/**
 * It is used for multiple checkboxes which are bound in one group, and
 * indicates whether one option is selected by checking if it is checked.
 *
 * `<ElCheckboxGroup>` element can manage multiple checkboxes in one group
 * by using `value` which is bound as an Array. Inside the `<ElCheckbox>`
 * element, `label` is the value of the checkbox. If no content is nested
 * in that tag, `label` will be rendered as the description following the
 * button of the checkbox. `label` also corresponds with the element values
 * in the array. It is selected if the specified value exists in the array,
 * and vice versa.
 *
 * @author Tower He (towerhe@gmail.com)
 *
 * @class ElCheckboxGroupComponent
 * @extends Ember.Component
 * @public
 */
export default class ElCheckboxGroupComponent extends Component {
  /**
   * binding value
   *
   * @property value
   * @type {Array}
   * @public
   */
  @argument
  value = null;

  /**
   * size of checkbox buttons or bordered checkboxes
   * 
   * accept values: medium / small / mini
   * 
   * @property size
   * @type {string}
   * @public
   */
  @argument
  size = null;

  /**
   * whether the nesting checkboxes are disabled
   * 
   * @property disabled
   * @type {boolean}
   * @default false
   * @public
   */
  @argument
  disabled = false;

  /**
   * minimum number of checkbox checked
   * 
   * @property min
   * @type {number}
   * @public
   */
  @argument
  min = null;

  /**
   * maximum number of checkbox checked
   * 
   * @property max
   * @type {number}
   * @public
   */
  @argument
  max = null;

  /**
   * font color when button is active
   * 
   * @property textColor
   * @type {string}
   * @default "#ffffff"
   * @public
   */
  @argument
  textColor = "#ffffff";
  
  /**
   * border and background color when button is active
   * 
   * @property fill
   * @type {string}
   * @default "#409EFF"
   * @public
   */
  @argument
  fill = "#409EFF";

  /**
   * triggers when the binding value changes
   *
   * @event change
   * @param {Array} value updated value
   * @public
   */

  /**
   * @method handleChange
   * @param {boolean} checked `checked` of the selected checkbox
   * @param {string | number | boolean} value `value` of the selected checkbox
   * @public
   */
  @action
  handleChange(checked, value) {
    let groupValue = this.args.value;

    if (checked) {
      groupValue.push(value);
    } else {
      groupValue.splice(groupValue.indexOf(value), 1);
    }

    if (this.args.change !== undefined) {
        console.log("fire `change` in checkbox-group. " + groupValue);
      this.args.change(groupValue);
    }
  }
}
