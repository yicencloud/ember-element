import Component from '@glimmer/component';
import { action } from '@ember/object';
import argument from '../decorators/argument';

/**
 * tab pane
 *
 * @class ElTabPaneComponent
 * @extends Glimmer.Component
 * @public
 *
 * @author Tower He (towerhe@gmail.com)
 */
export default class ElTabPaneComponent extends Component {
  /**
   * title of the tab
   *
   * @property label
   * @type {string}
   * @public
   */
  @argument
  label = null;

  /**
   * whether Tab is disabled
   *
   * @property disabled
   * @type {boolean}
   * @default false
   * @public
   */
  @argument
  disabled = false;

  /**
   * identifier corresponding to the name of Tabs, representing the alias of
   * the tab-pane
   *
   * @property name
   * @type {string}
   * @default '1' ordinal number of the tab-pane in the sequence, e.g. the
   *              first tab-pane is '1'
   * @public
   */
  @argument
  name = null;

  /**
   * whether Tab is closable
   *
   * @property closable
   * @type {boolean}
   * @default false
   * @public
   */
  @argument
  closable = false;

  /**
   * whether Tab is lazily rendered
   *
   * @property lazy
   * @type {boolean}
   * @default false
   * @public
   */
  @argument
  lazy = false;

  @argument
  parent = null;

  get navElement() {
    if (this.parent.element) {
      return this.parent.element.querySelector('.el-tabs__nav');
    }
  }

  get navItemElement() {
    if (this.navElement) {
      return this.navElement.querySelector(`#tab-${this.name}`);
    }
  }

  get active() {
    return this.name === this.parent.value;
  }

  @action
  handleNavItemClick(e) {
    this.parent.handleClick?.(this, e);
  }
}
