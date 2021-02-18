import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { computed } from "@ember/object";
import argument from "../decorators/argument";

/**
 * Element layout component, used to create rows.
 *
 * @author Tower He (towerhe@gmail.com)
 */
export default class ElRowComponent extends Component {
  /**
   *
   * grid spacing
   *
   * @property gutter
   * @type {number}
   * @default 0
   * @public
   */
  @argument
  gutter = 0;

  /**
   * layout mode, you can use flex, works in modern browsers
   *
   * @property
   * @type {string}
   * @public
   */

  /**
   * horizontal alignment of flex layout
   *
   * **accepted values**: start/end/center/space-around/space-between
   *
   * @property justify
   * @type {string}
   * @default "start"
   * @public
   */
  @argument
  justify = "start";

  /**
   * [TODO] implement it
   *
   * vertical alignment of flex layout
   *
   * **accepted values**: top/middle/bottom
   *
   * @property align
   * @type {string}
   * @default "top"
   * @public
   */
  @argument
  align = "top";

  /**
   * [TODO] implement it
   *
   * custom element tag
   *
   * **accepted values**: *
   *
   * @property tag
   * @type {string}
   * @default "div"
   * @public
   */
  @argument
  tag = "div";

  /**
   * margin styles based on `gutter`
   *
   * @property gutterStyle
   * @type {string}
   * @public
   */
  @computed("gutter")
  get gutterStyle() {
    if (this.gutter <= 0) {
      return null;
    }

    let halfGutter = this.gutter / 2;

    return `margin-left: ${halfGutter}px; margin-right: ${halfGutter}px`;
  }

  /**
   * calculate the `class` attribute
   *
   * @property classNames
   * @type {string}
   * @public
   */
  @computed("justify")
  get classNames() {
    let names = "el-row ";

    if (this.args.type == "flex") {
      names += `is-justify-${this.justify} el-row--flex`;
    }

    return names;
  }
}
