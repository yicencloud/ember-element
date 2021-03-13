import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import argument from '../decorators/argument';

/**
 * Divide data collections which are related yet belong to different types.
 *
 * @class ElTabsComponent
 * @extends Glimmer.Component
 * @public
 *
 * @author Tower He (towerhe@gmail.com)
 */
export default class ElTabsComponent extends Component {
  /**
   * binding value, name of the selected tab
   *
   * @property value
   * @type {string}
   * @public
   */
  @argument
  value = null;

  /**
   * type of Tab
   *
   * **accepted values**: card / border-card
   *
   * @property type
   * @type {string}
   * @public
   */
  @argument
  type = null;

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
   * whether Tab is addable
   *
   * @property addable
   * @type {boolean}
   * @default false
   * @public
   */
  @argument
  addable = false;

  /**
   * whether Tab is editable
   *
   * @property editable
   * @type {boolean}
   * @default false
   * @public
   */
  @argument
  editable = false;

  /**
   * position of tabs
   *
   * **accepted values**: top / right / bottom / left
   *
   * @property position
   * @type {string}
   * @default 'top'
   * @public
   */
  @argument
  position = 'top';

  /**
   * whether width of tab automatically fits its container
   *
   * @property stretch
   * @type {boolean}
   * @default false
   * @public
   */
  @argument
  stretch = false;

  /**
   * hook function before switching tab. If false is returned or a Promise is
   * returned and then is rejected, switching will be prevented
   *
   * @property beforeLeave
   * @type {Function}
   * @public
   */
  @argument
  beforeLeave = null;

  @tracked element = null;

  @tracked activeBarWidth = undefined;

  @tracked activeBarHeight = undefined;

  @tracked activeBarTransform = undefined;

  @tracked panesCount = 0;

  /**
   * @event click
   * @param {ElTabPane} tab
   * @param {Event} e
   * @public
   */

  /**
   * @event remove
   * @param {string} name
   * @public
   */

  /**
   * @event add
   * @public
   */

  /**
   * @event edit
   * @param {string} targetName
   * @param {string} action
   * @public
   */

  @action
  handleClick(tab, e) {
    this.args.click?.(tab, e);
  }

  @action
  handleRemove(name) {
    this.args.remove?.(name);
  }

  @action
  handleAdd() {
    if (this.addable) {
      this.args.add?.();
    } else if (this.editable) {
      this.args.edit?.(null, 'add');
    }
  }

  @action
  handleEdit(pane, act) {
    this.args.edit?.(pane?.name, act);
  }

  @action
  handleDidInsert(element) {
    this.element = element;
  }
}
