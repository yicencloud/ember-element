import Component from "@glimmer/component";
import argument from "../decorators/argument";

/**
 * Text hyperlink
 *
 * @author Tower He (towerhe@gmail.com)
 */
export default class ElLinkComponent extends Component {
  /**
   * type
   *
   * **accepted values**: default / primary / success / warning / danger / info
   *
   * @property type
   * @type {string}
   * @default "default"
   * @public
   */
  @argument
  type = "default";

  /**
   * whether the component has underline
   *
   * @property underline
   * @type {boolean}
   * @default true
   * @public
   */
  @argument
  underline = true;

  /**
   * whether the component is disabled
   *
   * @property disabled
   * @type boolean
   * @default false
   * @public
   */
  @argument
  disabled = false;

  /**
   * same as native hyperlink's `href`
   *
   * @property href
   * @type {string}
   * @public
   */
  @argument
  href = null;

  /**
   * icon class name
   *
   * @property icon
   * @type {string}
   * @public
   */
  @argument
  icon = null;
}
