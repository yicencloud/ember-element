import Component from "@glimmer/component";
import { action } from "@ember/object";

/**
 * provides a set of common icons.
 * 
 * @author Tower He (towerhe@gmail.com)
 */
export default class ElIconComponent extends Component {
  /**
   * triggers when icon is clicked
   *
   * @event click
   * @public
   */

  @action
  handleClick() {
    if (this.args.click !== undefined) {
      this.args.click();
    }
  }
}
