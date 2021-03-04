import Component from '@glimmer/component';
import { action } from '@ember/object';
import { not } from '@ember/object/computed';
import argument from '../decorators/argument';

/**
 * item of collapse
 *
 * @class ElCollapseItemComponent
 * @extends Glimmer.Component
 * @public
 *
 * @author Tower He (towerhe@gmail.com)
 */
export default class ElCollapseItemComponent extends Component {
  /**
   * unique identification of the panel
   *
   * @property name
   * @type {string | number}
   * @public
   */
  @argument
  name = null;

  /**
   * title of the panel
   *
   * @property title
   * @type {string}
   * @public
   */
  @argument
  title = null;

  /**
   * disable the collapse item
   *
   * @property disabled
   * @type {boolean}
   * @default false
   * @public
   */
  @argument
  disabled = false;

  @argument
  selected = '';

  get active() {
    if (typeof this.selected === 'string') {
      return this.name === this.selected;
    } else {
      return this.selected.includes(this.name);
    }
  }

  @action
  handleClick() {
    this.args.click?.(this.name);
  }
}
