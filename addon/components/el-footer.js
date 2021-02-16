import Component from '@glimmer/component';

export default class ElFooterComponent extends Component {
    /**
     * height of the footer
     * 
     * @default 60px
     * @type string
     * @public
     */
    get height() {
      return this.args.height ?? "60px";
    }
}
