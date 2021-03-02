import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import argument from "../decorators/argument";

/**
 * item of carousel
 *
 * @class ElCarouselItemComponent
 * @extends Glimmer.Component
 * @public
 *
 * @author Tower He (towerhe@gmail.com)
 */
export default class ElCarouselItemComponent extends Component {
  /**
   * name of the item, can be used in `setActiveItem` of carousel
   * 
   * @property name
   * @type {string}
   * @public
   */
  @argument
  name = null;

  /**
   * text content for the corresponding indicator
   * 
   * @property label
   * @type {string}
   * @public
   */
  @argument
  label = null;
}
