import Component from "@glimmer/component";
import argument from "../decorators/argument";

/**
 * The dividing line that separates the content
 * 
 * @class ElDividerComponent
 * @extends Glimmer.Component
 * @public
 * 
 * @author Tower He (towerhe@gmail.com)
 */
export default class ElDividerComponent extends Component {
  /**
   * set divider's direction
   * 
   * **accepted values**: horizontal / vertical
   * 
   * @property direction
   * @type {string}
   * @default "horizontal"
   * @public
   */
  @argument
  direction = "horizontal";

  /**
   * customize the content on the divider line
   * 
   * **accepted value**: left / right / center
   * 
   * @property contentPosition
   * @type {string}
   * @default "center"
   * @public
   */
  @argument
  contentPosition = "center";
}
