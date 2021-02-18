import Component from "@ember/component";
import { tracked } from "@glimmer/tracking";
import { computed } from "@ember/object";
import argument from "../decorators/argument";

/**
 * @author Tower He (towerhe@gmail.com)
 */
export default class ElContainerComponent extends Component {
  /**
   * layout direction for child elements
   * 
   * **accepted values**: horizontal / vertical
   * 
   * @property direction
   * @type {string}
   * @default "vertical" when nested with el-header or el-footer; horizontal otherwise.
   * @public
   */
  direction = null;

  /**
   * tag name of this component
   * 
   * @property direction
   * @type {string}
   * @default "section"
   * @public
   */
  tagName = "section";

  /**
   * class name
   * 
   * @property classNames
   * @type {Array}
   * @default ["el-container"]
   * @public
   */
  classNames = ["el-container"];

  /**
   * @property classNameBindings
   * @type {Array}
   * @default ["_directionClass"]
   * @public
   */
  classNameBindings = ["_directionClass"];

  /**
   * direction class of the container.
   * 
   * @property _directionClass
   * @type {string}
   * @private
   */
  @computed("direction", "_autoDirection")
  get _directionClass() {
    return this.direction == "vertical" || this._autoDirection == "vertical"
      ? "is-vertical"
      : "";
  }

  /**
   * when a header or footer is a child of the container `_autoDirection` will be set to `vertical`.
   * 
   * @property _autoDirection
   * @type {string}
   * @private
   */
  @tracked
  _autoDirection = null;

  /**
   * initialize `_autoDirection`
   */
  didInsertElement() {
    const children = this.element.children;
    let foundElements = false;
    for (let i = 0; i < children.length; i++) {
      let c = children[i];
      if (c.localName === "header" || c.localName === "footer") {
        foundElements = true;
        break;
      }
    }

    if (foundElements) {
      this._autoDirection = "vertical";
    }
  }

}
