import Component from "@glimmer/component";
import { computed } from "@ember/object";
import { gt } from "@ember/object/computed";

/**
 * Element layout component, used to create columns.
 *
 * @author Tower He (towerhe@gmail.com)
 */
export default class ElColComponent extends Component {
  /**
   * number of column the grid spans
   *
   * @type number
   * @public
   */
  get span() {
    return this.args.span ?? 24;
  }
  /**
   * number of spacing on the left side of the grid
   *
   * @type number
   * @public
   */
  get offset() {
    return this.args.offset ?? 0;
  }
  /**
   * number of columns that grid moves to the right
   *
   * @type number
   * @public
   */
  get push() {
    return this.args.push ?? 0;
  }
  /**
   * number of columns that grid moves to the right
   *
   * @type number
   * @public
   */
  get pull() {
    return this.args.pull ?? 0;
  }
  /**
   * <768px Responsive columns or column props object
   *
   * @type number/object (e.g. {span: 4, offset: 4})
   * @public
   */
  get xs() {
    return this.args.xs ?? null;
  }
  /**
   * ≥768px Responsive columns or column props object
   *
   * @type number/object (e.g. {span: 4, offset: 4})
   * @public
   */
  get sm() {
    return this.args.sm ?? null;
  }
  /**
   * ≥992px Responsive columns or column props object
   *
   * @type number/object (e.g. {span: 4, offset: 4})
   * @public
   */
  get md() {
    return this.args.md ?? null;
  }
  /**
   * ≥1200px Responsive columns or column props object
   *
   * @type number/object (e.g. {span: 4, offset: 4})
   * @public
   */
  get lg() {
    return this.args.lg ?? null;
  }
  /**
   * ≥1920px Responsive columns or column props object
   *
   * @type number/object (e.g. {span: 4, offset: 4})
   * @public
   */
  get xl() {
    return this.args.xl ?? null;
  }
  /**
   * custom element tag
   *
   * @type string
   * @public
   * @unused
   */
  get tag() {
    return this.args.tag ?? "div";
  }
  /**
   * grid spacing, set by `el-row` component
   *
   * @type number
   * @public
   */
  get gutter() {
    return this.args.gutter ?? 0;
  }
  /**
   * whether `gutter` is set or not
   *
   * @type boolean
   * @public
   */
  @gt("gutter", 0) hasGutter;
  /**
   * calculate the `class` attribute of the component
   * 
   * @type string
   * @public
   */
  @computed("span", "offset", "push", "pull", "_isResponsiable")
  get classes() {
    let classes = `el-col el-col-${this.span} `;

    if (this.offset > 0) {
      classes += `el-col-offset-${this.offset} `;
    }
    if (this.push > 0) {
      classes += `el-col-push-${this.push} `;
    }
    if (this.pull > 0) {
      classes += `el-col-pull-${this.pull} `;
    }
    if (this._isResponsible) {
      classes += this._responsiveClasses;
    }

    return classes;
  }
  /**
   * padding styles based on `gutter`
   * 
   * @type string
   * @public
   */
  @computed("gutter")
  get gutterStyle() {
    if (!this.hasGutter) {
      return null;
    }

    let halfGutter = this.gutter / 2;

    return `padding-left: ${halfGutter}}px; padding-right: ${halfGutter}px`;
  }
  /**
   * whether the responsive attributes changed or not
   * 
   * @type boolean
   * @private
   */
  @computed("xs", "sm", "md", "lg", "xl")
  get _isResponsible() {
    return (
      this.xs > 0 || this.sm > 0 || this.md > 0 || this.lg > 0 || this.xl > 0
    );
  }
  /**
   * calculate the responsive classes
   * 
   * @type string
   * @private
   */
  get _responsiveClasses() {
    let classes = "";

    if (this.xs > 0) {
      classes = `el-col-xs-${this.xs}`;
    }
    if (this.sm > 0) {
      classes = `${classes} el-col-sm-${this.sm}`;
    }
    if (this.md > 0) {
      classes = `${classes} el-col-md-${this.md}`;
    }
    if (this.lg > 0) {
      classes = `${classes} el-col-lg-${this.lg}`;
    }
    if (this.xl > 0) {
      classes = `${classes} el-col-xl-${this.xl}`;
    }

    return classes;
  }

}
