import Component from "@glimmer/component";

/**
 * @argument {string} height height of the header, default `60px`
 * 
 * @author Tower He (towerhe@gmail.com)
 */
export default class ElHeaderComponent extends Component {
  /**
   * height of the header
   * 
   * @property height
   * @default 60px
   * @type string
   * @public
   */
  get height() {
    return this.args.height ?? "60px";
  }
}
