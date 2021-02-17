import Component from '@glimmer/component';

/**
 * @argument {string} width width of the aside, default `300px`
 * 
 * @author Tower He (towerhe@gmail.com)
 */
export default class ElAsideComponent extends Component {
    /**
     * width of the aside
     *
     * @property width
     * @default 300px
     * @type string
     * @public
     */
    get width() {
        return this.args.width ?? "300px";
    }
}
