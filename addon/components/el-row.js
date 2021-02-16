import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { computed } from "@ember/object";
import { gt } from "@ember/object/computed";

/**
 * Element layout component, used to create rows.
 *
 * @author Tower He (towerhe@gmail.com)
 */
export default class ElRowComponent extends Component {
  /**
   * grid spacing
   *
   * @type number
   * @public
   */
  get gutter() {
      return this.args.gutter ?? 0;
  }
  /**
   * layout mode, you can use flex, works in modern browsers
   *
   * @type string
   * @public
   */
  get type() {
    return this.args.type ?? null;
  }
  /**
   * horizontal alignment of flex layout
   *
   * accepted values: start/end/center/space-around/space-between
   *
   * @type string
   * @public
   */
  get justify() {
    return this.args.justify ?? "start";
  }
  /**
   * vertical alignment of flex layout
   *
   * accepted values: top/middle/bottom
   *
   * @type string
   * @public
   * 
   * TODO implement it
   */
  @tracked align = "top";
  /**
   * custom element tag
   *
   * accepted values: *
   *
   * @type string
   * @public
   * 
   * TODO implement it
   */
  @tracked tag = "div";
  /**
   * wether `gutter` is set or not
   * 
   * @type boolean
   */
  @gt("gutter", 0) hasGutter;
  /**
   * margin styles based on `gutter`
   * 
   * @type string
   * @public
   */
  @computed("gutter")
  get gutterStyle() {
    if (!this.hasGutter) {
      return null;
    }

    let halfGutter = this.gutter / 2;

    return `margin-left: ${halfGutter}}px; margin-right: ${halfGutter}px`;
  }
  /**
   * calculate the `class` attribute
   * 
   * @type string
   * @public
   */
  @computed("type", "justify")
  get classes() {
    let classes = "el-row ";

    if (this.type == "flex") {
      if (this.justify) {
        classes += `is-justify-${this.justify} el-row--flex`;
      }
    }

    return classes;
  }
}
