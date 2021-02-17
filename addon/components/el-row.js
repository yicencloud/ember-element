import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { computed } from "@ember/object";

/**
 * Element layout component, used to create rows.
 * 
 * @argument {number} gutter grid spacing
 * @argument {string} type layout mode, you can use flex, works in modern browsers
 * @argument {string} justify horizontal alignment of flex layout,
 *           accepted values: start/end/center/space-around/space-between
 * @argument {string} align vertical alignment of flex layout
 *           accepted values: top/middle/bottom.
 *           [TODO] implement it!
 * @argument {string} tag [TODO] implement it!
 *
 * @author Tower He (towerhe@gmail.com)
 */
export default class ElRowComponent extends Component {
  /**
   * grid spacing
   *
   * @property gutter
   * @type number
   * @default 0
   * @public
   */
  get gutter() {
      return this.args.gutter ?? 0;
  }
  /**
   * horizontal alignment of flex layout
   *
   * accepted values: start/end/center/space-around/space-between
   *
   * @property justify
   * @type string
   * @default "start"
   * @public
   */
  get justify() {
    return this.args.justify ?? "start";
  }
  /**
   * [TODO] implement it
   * 
   * vertical alignment of flex layout
   *
   * accepted values: top/middle/bottom
   * 
   * @property align
   * @type string
   * @default "top"
   * @public
   */
  @tracked align = "top";
  /**
   * [TODO] implement it
   * 
   * custom element tag
   *
   * accepted values: *
   *
   * @property tag
   * @type string
   * @default "div"
   * @public
   */
  get tag() {
    return this.args.tag ?? "div";
  }
  /**
   * margin styles based on `gutter`
   * 
   * @property gutterStyle
   * @type string
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
   * @type string
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
