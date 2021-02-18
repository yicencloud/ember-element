import Component from "@glimmer/component";
import argument from "../decorators/argument";

/**
 * Commonly used button.
 *
 * @author Tower He (towerhe@gmail.com)
 */
export default class ElButtonComponent extends Component {
  /**
   * button size
   *
   * **accepted values**: medium / small / mini
   *
   * @property size
   * @type {string}
   * @public
   */
  @argument
  size = null;

  /**
   * button type
   *
   * **accepted values**: primary / success / warning / danger / info / text
   *
   * @property type
   * @type {string}
   * @default "default"
   * @public
   */
  @argument
  type = "default";

  /**
   * determine whether it's a plain button
   *
   * @property plain
   * @type {boolean}
   * @default false
   * @public
   */
  @argument
  plain = false;

  /**
   * determine whether it's a round button
   *
   * @property round
   * @type {boolean}
   * @default false
   * @public
   */
  @argument
  round = false;

  /**
   * determine whether it's a circle button
   *
   * @property circle
   * @type {boolean}
   * @default false
   * @public
   */
  @argument
  circle = false;

  /**
   * determine whether it's loading
   *
   * @property loading
   * @type {boolean}
   * @default false
   * @public
   */
  @argument
  loading = false;

  /**
   * disable the button
   *
   * @property disabled
   * @type {boolean}
   * @default false
   * @public
   */
  @argument
  disabled = false;

  /**
   * same as native button's `autofocus`
   *
   * @property autofocus
   * @type {boolean}
   * @default false
   * @public
   */
  @argument
  autofocus = false;

  /**
   * same as native button's type
   *
   * **accepted values**: button / submit / reset
   *
   * @property nativeType
   * @type {string}
   * @default "button"
   * @public
   */
  @argument
  nativeType = "button";

  /**
   * icon class name
   *
   * @property icon
   * @type string
   * @public
   */
  get icon() {
    if (this.args.loading) {
      return "loading";
    }

    return this.args.icon;
  }
}
