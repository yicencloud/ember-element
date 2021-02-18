import Component from "@glimmer/component";
import argument from "../decorators/argument";

/**
 * @author Tower He (towerhe@gmail.com)
 */
export default class ElHeaderComponent extends Component {
  /**
   * height of the header
   * 
   * @property height
   * @type {string}
   * @default "60px"
   * @public
   */
  @argument
  height = "60px";
}
