import Component from '@glimmer/component';

/**
 * Text hyperlink
 * 
 * @argument {string} type type, accepted values: default / primary / success / warning / danger / info
 * @argument {boolean} underline whether the component has underline
 * @argument {boolean} disabled whether the component is disabled
 * @argument {string} href same as native hyperlink's `href`
 * @argument {string} icon class name of icon
 * 
 * @author Tower He (towerhe@gmail.com)
 */
export default class ElLinkComponent extends Component {
    /**
     * type, accepted values: default / primary / success / warning / danger / info
     * 
     * @property type
     * @type string
     * @default "default"
     * @public
     */
    get type() {
        return this.args.type ?? "default";
    }
    /**
     * whether the component has underline
     * 
     * @property underline
     * @type boolean
     * @default true
     * @public
     */
    get underline() {
        return this.args.underline ?? true;
    }
    /**
     * whether the component is disabled
     * 
     * @property disabled
     * @type boolean
     * @default false
     * @public
     */
    get disabled() {
        return this.args.disabled ?? false;
    }
}
