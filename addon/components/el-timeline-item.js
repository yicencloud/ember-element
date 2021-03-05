import Component from '@glimmer/component';
import argument from '../decorators/argument';

/**
 * item of timeline
 * 
 * @class ElTimelineItemComponent
 * @extends Glimmer.Component
 * @public
 * 
 * @author Tower He (towerhe@gmail.com)
 */
export default class ElTimelineItemComponent extends Component {
  /**
   * timestamp content
   * 
   * @property timestamp
   * @type {string}
   * @public
   */
  @argument
  timestamp = null;

  /**
   * whether to show timestamp
   * 
   * @property hideTimestamp
   * @type {boolean}
   * @default false
   * @public
   */
  @argument
  hideTimestamp = false;

  /**
   * position of timestamp
   * 
   * **accepted values**: top / bottom
   * 
   * @property placement
   * @type {string}
   * @default 'bottom'
   * @public
   */
  @argument
  placement = 'bottom';

  /**
   * node type
   * 
   * **accepted values**: primary / success / warning / danger / info
   * 
   * @property type
   * @type {string}
   * @public
   */
  @argument
  type = null;

  /**
   * background color of node
   * 
   * **accepted values**: hsl / hsv / hex / rgb
   * 
   * @property color
   * @type {string}
   * @public
   */
  @argument
  color = null;

  /**
   * node size
   * 
   * **accepted values**: normal / large
   * 
   * @property size
   * @type {string}
   * @default 'normal'
   * @public
   */
  @argument
  size = 'normal';

  /**
   * icon class name
   * 
   * @property icon
   * @type {string}
   * @public
   */
  @argument
  icon = null;

  get style() {
    return `background-color: ${this.color};`;
  }
}
