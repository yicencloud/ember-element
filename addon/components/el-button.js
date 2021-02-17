import Component from "@glimmer/component";

/**
 * Commonly used button.
 *
 * @argument {string} size button size, accepted values: medium / small / mini
 * @argument {string} type button type, accepted values: primary / success / warning / danger / info / text
 * @argument {boolean} plain determine whether it's a plain button
 * @argument {boolean} round determine whether it's a round button
 * @argument {boolean} circle determine whether it's a circle button
 * @argument {boolean} loading determine whether it's loading
 * @argument {boolean} disabled disable the button
 * @argument {string} icon icon class name
 * @argument {boolean} autofocus same as native button's `autofocus`
 * @argument {string} nativeType same as native button's type, accepted values: button / submit / reset
 *
 * @author Tower He (towerhe@gmail.com)
 */
export default class ElButtonComponent extends Component {
  /**
   * button type
   *
   * @property type
   * @type string
   * @public
   */
  get type() {
    return this.args.type ?? "default";
  }
  /**
   * same as native button's type
   *
   * accepted values: button / submit / reset
   *
   * @property nativeType
   * @type string
   * @public
   */
  get nativeType() {
    return this.args.nativeType ?? "button";
  }
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
