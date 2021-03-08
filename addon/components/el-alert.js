import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import argument from '../decorators/argument';

/**
 * Displays important alert messages.
 * 
 * @class ElAlertComponent
 * @extends Glimmer.Component
 * @public
 * 
 * @author Tower He (towerhe@gmail.com)
 */
export default class ElAlertComponent extends Component {
  /**
   * title 
   * 
   * @property title
   * @type {string}
   * @public
   */
  @argument
  title = null;

  /**
   * component type
   * 
   * **accepted values**: success / warning / info / error
   * 
   * @property type
   * @type {string}
   * @default 'info'
   * @public
   */
  @argument
  type = 'info';

  /**
   * descriptive text. can also be passed with the default block
   * 
   * @property description
   * @type {string}
   * @public
   */
  @argument
  description = null;

  /**
   * if closable or not
   * 
   * @property closable
   * @type {boolean}
   * @default true
   * @public
   */
  @argument
  closable = true;

  /**
   * whether to center the text
   * 
   * @property center
   * @type {boolean}
   * @default false
   * @public
   */
  @argument
  center = false;

  /**
   * customized close button text
   * 
   * @property closeText
   * @type {string}
   * @public
   */
  @argument
  closeText = null;

  /**
   * if a type icon is displayed
   * 
   * @property showIcon
   * @type {boolean}
   * @default false
   * @public
   */
  @argument
  showIcon = false;

  /**
   * choose theme
   * 
   * **accepted values**: light / dark
   * 
   * @property effect
   * @type {string}
   * @default 'light'
   * @public
   */
  @argument
  effect = 'light';

  @tracked closed = false;

  /**
   * fires when alert is closed
   * 
   * @event close
   * @public
   */

  @action
  handleClose() {
    this.args.close?.();
    this.closed = true;
  }
}
