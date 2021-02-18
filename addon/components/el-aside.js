import Component from "@glimmer/component";
import argument from "../decorators/argument";

/**
 * @author Tower He (towerhe@gmail.com)
 */
export default class ElAsideComponent extends Component {
  /**
   * width of the aside
   *
   * @property width
   * @type {string}
   * @default "300px"
   * @public
   */
  @argument
  width = "300px";
}
