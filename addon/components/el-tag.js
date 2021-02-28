import Component from "@glimmer/component";
import { action } from "@ember/object";
import argument from "../decorators/argument";

/**
 * Used for marking and selection.
 * 
 * @author Tower He (towerhe@gmail.com)
 */
export default class ElTagComponent extends Component {
  /**
   * component type
   * 
   * **accepted values**: success/info/warning/danger
   * 
   * @property type
   * @type {string}
   * @public
   */
  @argument
  type = null;

  /**
   * whether Tag can be removed
   * 
   * @property closable
   * @type {boolean}
   * @default false
   * @public
   */
  @argument
  closable = false;

  /**
   * whether to disable animations
   * 
   * @property disableTransitions
   * @type {boolean}
   * @default false
   * @public
   */
  @argument
  disableTransitions = false;

  /**
   * whether Tag has a highlighted border
   * 
   * @property hit
   * @type {boolean}
   * @default false
   * @public
   */
  @argument
  hit = false;

  /**
   * background color of the Tag
   * 
   * @property color
   * @type {string}
   * @public
   */
  @argument
  color = null;

  /**
   * tag size
   * 
   * @property size
   * @type {string}
   * @public
   */
  @argument
  size = null;

  /**
   * component theme
   * 
   * **accepted values**: medium / small / mini
   * 
   * @property effect
   * @type {string}
   * @default "light"
   * @public
   */
  @argument
  effect = "light";

  @argument
  tag = null;

  get style() {
    if (this.color) {
      return `background-color: ${this.color}`;
    }
  }

  /**
   * triggers when Tag is clicked
   * 
   * @event click
   * @public
   */

  @action
  handleClick() {
    if (this.args.click !== undefined) {
      this.args.click();
    }
  }

  /**
   * triggers when Tag is removed
   * 
   * @event close
   * @param {*} tag
   * @public
   */

  @action
  handleClose() {
    if (this.args.close !== undefined) {
      this.args.close(this.tag);
    }
  }
}
