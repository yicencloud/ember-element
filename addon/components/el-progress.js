import Component from "@glimmer/component";
import argument from "../decorators/argument";

/**
 *
 * Progress is used to show the progress of current operation, and inform the
 * user the current status.
 *
 * @class ElProgressComponent
 * @extends Glimmer.Component
 * @public
 *
 * @author Tower He (towerhe@gmail.com)
 */
export default class ElProgressComponent extends Component {
  /**
   * percentage, required
   *
   * **accepted values**: 0-100
   *
   * @property percentage
   * @type {number}
   * @default 0
   * @public
   */
  @argument
  percentage = 0;

  /**
   * the type of progress
   *
   * **accepted values**: line/circle/dashboard
   *
   * @property type
   * @type {string}
   * @default "line"
   * @public
   */
  @argument
  type = "line";

  /**
   * the width of progress bar
   *
   * @property strokeWidth
   * @type {number}
   * @default 6
   * @public
   */
  @argument
  strokeWidth = 6;

  /**
   * whether to place the percentage inside progress bar, only works when type
   * is 'line'
   *
   * @property textInline
   * @type {boolean}
   * @default false
   * @public
   */
  @argument
  textInline = false;

  /**
   * the current status of progress bar
   *
   * **accepted values**: success/exception/warning
   *
   * @property status
   * @type {string}
   * @public
   */
  @argument
  status = null;

  /**
   * background color of progress bar. Overrides status prop
   *
   * @property color
   * @type {string | function | array}
   * @default ""
   * @public
   */
  @argument
  color = "";

  /**
   * the canvas width of circle progress bar
   *
   * @property width
   * @type {number}
   * @default 126
   * @public
   */
  @argument
  width = 126;

  /**
   * whether to show percentage
   *
   * @property showText
   * @type {boolean}
   * @default true
   * @public
   */
  @argument
  showText = true;

  /**
   * circle/dashboard type shape at the end path
   *
   * **accepted values**: butt/round/square
   *
   * @property strokeLinecap
   * @type {string}
   * @default "round"
   * @public
   */
  @argument
  strokeLinecap = "round";

  /**
   * custom text format
   *
   * @property format
   * @type {function}
   * @public
   */
  @argument
  format = null;

  get icon() {
    if (this.status === "success") {
      return "circle-check";
    } else if (this.status === "warning") {
      return "warning";
    } else if (this.status === "exception") {
      return "circle-close";
    }
  }

  get text() {
    if (this.format) {
      return this.format(this.percentage);
    }

    return `${this.percentage}%`;
  }

  get barStyle() {
    return `width: ${this.percentage}%; background-color: ${this.stroke}`;
  }

  get strokeDashLength() {
    let c = this.type === "circle" ? 295.31 : 221.482;
    return this.percentage * c / 100;
  }

  get strokeDashOffset() {
    return this.type === "circle" ? 0 : -36.9137;
  }

  strokes = {
    primary: "#20a0ff",
    success: "#13ce66",
    warning: "#e6a23c",
    exception: "#ff4949",
  };

  get stroke() {
    if (typeof this.color === "string" && this.color) {
      return this.color;
    } else if (typeof this.color === "function") {
      return this.color(this.percentage);
    } else if (typeof this.color === "object") {
      let filtered = this.color.filter(
        (color) => this.percentage <= color.percentage
      );
      return filtered[0].color;
    }

    let stroke = this.strokes[this.status];
    return stroke ? stroke : this.strokes["primary"];
  }
}
