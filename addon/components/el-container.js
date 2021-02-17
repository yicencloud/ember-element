import Component from "@ember/component";
import { tracked } from "@glimmer/tracking";
import { computed } from "@ember/object";

/**
 * @argument {string} direction layout direction for child elements, 
 *                              accepted values: horizontal / vertical, 
 *                              default value: vertical when nested with
 *                              el-header or el-footer; horizontal otherwise.
 * 
 * @author Tower He (towerhe@gmail.com)
 */
export default class ElContainerComponent extends Component {
  tagName = "section";

  classNames = ["el-container"];

  classNameBindings = ["_directionClass"];

  /**
   * layout direction for child elements
   *
   * accepted values: horizontal / vertical
   *
   * @property direction
   * @default vertical when nested with el-header or el-footer; horizontal otherwise
   * @type string
   * @public
   */
  @tracked direction = null;

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

  @tracked _autoDirection = null;

  @computed("direction", "_autoDirection")
  get _directionClass() {
    return this.direction == "vertical" || this._autoDirection == "vertical"
      ? "is-vertical"
      : "";
  }
}
