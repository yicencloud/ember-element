import Component from "@glimmer/component";
import argument from "../decorators/argument";

/**
 * integrate information in a card container
 *
 * @class ElCardComponent
 * @extends Glimmer.Component
 * @public
 *
 * @author Tower He (towerhe@gmail.com)
 */
export default class ElCardComponent extends Component {
  /**
   * title of the card. also accepts a DOM passed by slot#header
   *
   * @property header
   * @type {string}
   * @public
   */
  @argument
  header = null;

  /**
   * CSS style of body
   *
   * @property bodyStyle
   * @type {object}
   * @default { padding: "20px" }
   * @public
   */
  @argument
  bodyStyle = { padding: "20px" };

  /**
   * when to show card shadows
   *
   * **accepted values**: always / hover / never
   *
   * @property shadow
   * @type {string}
   * @default "always"
   * @public
   */
  @argument
  shadow = "always";

  get bodyStyleString() {
    let style = JSON.stringify(this.bodyStyle);
    return style
      .replace("{", "")
      .replace("}", "")
      .replaceAll(",", ";")
      .replaceAll("\"", "");
  }
}
