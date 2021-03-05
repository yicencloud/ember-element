import Component from '@glimmer/component';
import argument from '../decorators/argument';

/**
 * Visually display timeline.
 * 
 * @class ElTimelineComponent
 * @extends Glimmer.Component
 * @public
 * 
 * @author Tower He (towerhe@gmail.com)
 */
export default class ElTimelineComponent extends Component {
  /**
   * whether the node is ascending or descending, default is ascending
   * 
   * @property reverse
   * @type {boolean}
   * @default false
   * @public
   */
  @argument
  reverse = false;
}
