import Component from '@glimmer/component';
import { action } from '@ember/object';
import argument from '../decorators/argument';

/**
 * Use Collapse to store contents.
 *
 * @class ElCollapseComponent
 * @extends Glimmer.Component
 * @public
 *
 * @author Tower He (towerhe@gmail.com)
 */
export default class ElCollapseComponent extends Component {
  /**
   * currently active panel
   *
   * @property value
   * @type {string | array}
   * @public
   */
  @argument
  value = null;

  /**
   * whether to activate accordion mode
   *
   * @property accordion
   * @type {boolean}
   * @default false
   * @public
   */
  @argument
  accordion = false;

  /**
   * triggers when active panels change
   *
   * @event change
   * @param {string | array} activeNames string for acordion mode, array for non-accordion mode
   * @public
   */

  @action
  handleChange(newValue) {
    if (this.accordion) {
      this.args.change?.(newValue, this.value);
      return;
    }

    let value = [...this.value];
    if (value.includes(newValue)) {
      value.splice(value.indexOf(newValue), 1);
    } else {
      value.push(newValue);
    }

    this.args.change?.(value, this.value);
  }
}
