import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import argument from "../decorators/argument";

export default class ElRateComponent extends Component {
  /**
   * binding value
   *
   * @property value
   * @type {number}
   * @default 0
   * @private
   */
  @tracked _value = 0;

  get value() {
    if (this._value > 0) {
      return this._value;
    }

    return this.args.value;
  }

  set value(value) {
    this._value = value;
  }

  /**
   * max rating score
   *
   * @property max
   * @type {number}
   * @default 5
   * @public
   */
  @argument
  max = 5;

  /**
   * whether Rate is read-only
   *
   * @property disabled
   * @type {boolean}
   * @default false
   * @public
   */
  @argument
  disabled = false;

  /**
   * whether picking half start is allowed
   *
   * @property allowHalf
   * @type {boolean}
   * @default false
   * @public
   */
  @argument
  allowHalf = false;

  /**
   * threshold value between low and medium level. The value itself will be
   * included in low level
   *
   * @property lowThreshold
   * @type {number}
   * @default 2
   * @public
   */
  @argument
  lowThreshold = 2;

  /**
   * threshold value between medium and high level. The value itself will be
   * included in high level
   *
   * @property highThreshold
   * @type {number}
   * @default 4
   * @public
   */
  @argument
  highThreshold = 4;

  /**
   * colors for icons. If array, it should have 3 elements, each of which
   * corresponds with a score level, else if object, the key should be
   * threshold value between two levels, and the value should be corresponding
   * color
   *
   * @property colors
   * @type {Array | object}
   * @default ["#F7BA2A", "#F7BA2A", "#F7BA2A"]
   * @public
   */
  @argument
  colors = ["#F7BA2A", "#F7BA2A", "#F7BA2A"];

  /**
   * color of unselected icons
   *
   * @property voidColor
   * @type {string}
   * @default "#C6D1DE"
   * @public
   */
  @argument
  voidColor = "#C6D1DE";

  /**
   * color of unselected read-only icons
   *
   * @property disabledVoidColor
   * @type {string}
   * @default "#EFF2F7"
   * @pubic
   */
  @argument
  disabledVoidColor = "#EFF2F7";

  /**
   * class names of icons. If array, it should have 3 elements, each of which
   * corresponds with a score level, else if object, the key should be
   * threshold value between two levels, and the value should be corresponding
   * icon class
   *
   * @property iconClasses
   * @type {Array | object}
   * @default ["el-icon-star-on", "el-icon-star-on", "el-icon-star-on"]
   * @public
   */
  @argument
  iconClasses = ["el-icon-star-on", "el-icon-star-on", "el-icon-star-on"];

  /**
   * class name of unselected icons
   *
   * @property voidIconClass
   * @type {string}
   * @default "el-icon-star-off"
   * @public
   */
  @argument
  voidIconClass = "el-icon-star-off";

  /**
   * class name of unselected read-only icons
   *
   * @property disabledVoidIconClass
   * @type {string}
   * @default "el-icon-star-on"
   * @public
   */
  @argument
  disabledVoidIconClass = "el-icon-star-on";

  /**
   * whether to display texts
   *
   * @property showText
   * @type {boolean}
   * @default false
   * @public
   */
  @argument
  showText = false;

  /**
   * whether to display current score. showScore and showText cannot be true at
   * the same time
   *
   * @property showScore
   * @type {boolean}
   * @default false
   * @public
   */
  @argument
  showScore = false;

  /**
   * color of texts
   *
   * @property textColor
   * @type {string}
   * @default "#1F2D3D"
   * @public
   */
  @argument
  textColor = "#1F2D3D";

  /**
   * text array
   *
   * @property texts
   * @type {Array}
   * @default ["极差", "失望", "一般", "满意", "惊喜"]
   * @public
   */
  @argument
  texts = ["极差", "失望", "一般", "满意", "惊喜"];

  /**
   * score template
   *
   * @property scoreTemplate
   * @type {string}
   * @default "{value}"
   * @public
   */
  @argument
  scoreTemplate = "{value}";

  @tracked activeValue = null;

  /**
   * text of the rate
   */
  get text() {
    if (this.activeValue === null && this.value === null) {
      return null;
    }

    if (this.showScore) {
      return this.scoreTemplate.replace("{value}", this.value);
    }

    let value = this.activeValue === null ? this.value : this.activeValue;
    if (this.showText) {
      let index = value > 1 ? Math.trunc(value) - 1 : 0;
      return this.texts[index];
    }
  }

  get color() {
    return this._getValueByThreshold(this.colors);
  }

  get iconClass() {
    return this._getValueByThreshold(this.iconClasses);
  }

  /**
   * Triggers when rate value is changed
   *
   * @event change
   * @param {number} value value after changing
   */

  @action
  setActiveValue(value) {
    this.activeValue = value;
  }

  @action
  resetActiveValue() {
    this.activeValue = this.value;
  }

  @action
  handleChange(value) {
    this.value = value;
    this.activeValue = value;

    if (this.args.change !== undefined) {
      this.args.change(value);
    }
  }

  /**
   * get the right element by the score level
   *
   * @param {Array} values has 3 elements
   * @return if the score is in low level, return the 1st element; if the score
   *         is in middle level, return the 2nd element; otherwise return the
   *         3rd element.
   * @private
   */
  _getValueByThreshold(values) {
    if (this.activeValue <= this.lowThreshold) {
      return values[0];
    }

    if (this.activeValue > this.lowThreshold && this.activeValue < this.highThreshold) {
      return values[1];
    }

    return values[2];
  }
}
