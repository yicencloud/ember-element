import Component from "@glimmer/component";

export default class ElHeaderComponent extends Component {
  /**
   * height of the header
   * 
   * @default 60px
   * @type string
   * @public
   */
  get height() {
    return this.args.height ?? "60px";
  }
}
