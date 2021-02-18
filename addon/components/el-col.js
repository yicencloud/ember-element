import Component from "@glimmer/component";
import { computed } from "@ember/object";
import argument from "../decorators/argument";

/**
 * Element layout component, used to create columns.
 *
 * @author Tower He (towerhe@gmail.com)
 */
export default class ElColComponent extends Component {
  /**
   * grid spacing, set by `el-row` component
   *
   * @property gutter
   * @type {number}
   * @default 0
   * @public
   */
  @argument
  gutter = 0;

  /**
   * number of column the grid spans
   *
   * @property span
   * @type {number}
   * @default 24
   * @public
   */
  @argument
  span = 24;

  /**
   * number of spacing on the left side of the grid
   *
   * @property offset
   * @type {number}
   * @default 0
   * @public
   */
  @argument
  offset = 0;

  /**
   * number of columns that grid moves to the right
   *
   * @property push
   * @type {number}
   * @default 0
   * @public
   */
  @argument
  push = 0;

  /**
   * number of columns that grid moves to the right
   *
   * @property pull
   * @type {number}
   * @default 0
   * @public
   */
  @argument
  pull = 0;

  /**
   * `<768px` Responsive columns or column props object
   *
   * @property xs
   * @type {number | object} (e.g. {span: 4, offset: 4})
   * @public
   */
  @argument
  xs = null;

  /**
   * `≥768px` Responsive columns or column props object
   *
   * @property sm
   * @type {number | object} (e.g. {span: 4, offset: 4})
   * @public
   */
  @argument
  sm = null;

  /**
   * `≥992px` Responsive columns or column props object
   *
   * @property md
   * @type {number | object} (e.g. {span: 4, offset: 4})
   * @public
   */
  @argument
  md = null;

  /**
   * `≥1200px` Responsive columns or column props object
   *
   * @property lg
   * @type {number | object} (e.g. {span: 4, offset: 4})
   * @public
   */
  @argument
  lg = null;

  /**
   * `≥1920px` Responsive columns or column props object
   *
   * @property xl
   * @type {number | object} (e.g. {span: 4, offset: 4})
   * @public
   */
  @argument
  xl = null;

  /**
   * [TODO] implement it!
   *
   * custom element tag
   *
   * @property tag
   * @type {string}
   * @default "div"
   * @public
   */
  @argument
  tag = "div";

  /**
   * calculate the `class` attribute of the component
   *
   * @property classNames
   * @type {string}
   * @public
   */
  @computed("span", "offset", "push", "pull", "_isResponsiable")
  get classNames() {
    let names = `el-col el-col-${this.span} `;

    if (this.offset > 0) {
      names += `el-col-offset-${this.offset} `;
    }
    if (this.push > 0) {
      names += `el-col-push-${this.push} `;
    }
    if (this.pull > 0) {
      names += `el-col-pull-${this.pull} `;
    }
    if (this._isResponsible) {
      names += this._responsiveClassNames;
    }

    return names;
  }

  /**
   * padding styles based on `gutter`
   *
   * @property gutterStyle
   * @type {string}
   * @public
   */
  @computed("gutter")
  get gutterStyle() {
    if (this.gutter <= 0) {
      return null;
    }

    let halfGutter = this.gutter / 2;

    return `padding-left: ${halfGutter}px; padding-right: ${halfGutter}px`;
  }

  /**
   * whether the responsive attributes changed or not
   *
   * @type {boolean}
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
   * @type {string}
   * @private
   */
  get _responsiveClassNames() {
    let names = "";

    if (this.xs > 0) {
      names = `el-col-xs-${this.xs}`;
    }
    if (this.sm > 0) {
      names = `${names} el-col-sm-${this.sm}`;
    }
    if (this.md > 0) {
      names = `${names} el-col-md-${this.md}`;
    }
    if (this.lg > 0) {
      names = `${names} el-col-lg-${this.lg}`;
    }
    if (this.xl > 0) {
      names = `${names} el-col-xl-${this.xl}`;
    }

    return names;
  }
}
