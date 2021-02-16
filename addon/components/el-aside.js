import Component from '@glimmer/component';

export default class ElAsideComponent extends Component {
    get width() {
        return this.args.width ?? "300px";
    }
}
