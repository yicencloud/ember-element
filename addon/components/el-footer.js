import Component from "@glimmer/component";
import argument from "../decorators/argument";

/**
 * @author Tower He (towerhe@gmail.com)
 */
export default class ElFooterComponent extends Component {
  /**
   * height of the footer
   *
   * @property height
   * @type {string}
   * @default "60px"
   * @public
   */
  @argument
  height = "60px";
}
