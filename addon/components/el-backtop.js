import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import argument from '../decorators/argument';

/**
 * A button to back to top
 *
 * @class ElBacktopComponent
 * @extends Glimmer.Component
 * @public
 *
 * @author Tower He (towerhe@gmail.com)
 */
export default class ElBacktopComponent extends Component {
  /**
   * the target to trigger scroll
   *
   * @property target
   * @type {string}
   * @public
   */
  @argument
  target = null;

  /**
   * the button will not show until the scroll height reaches this value
   *
   * @property visibilityHeight
   * @type {number}
   * @default 200
   * @public
   */
  @argument
  visibilityHeight = 200;

  /**
   * right distance
   *
   * @property right
   * @type {number}
   * @default 40
   * @public
   */
  @argument
  right = 40;

  /**
   * bottom distance
   *
   * @property bottom
   * @type {number}
   * @default 40
   * @public
   */
  @argument
  bottom = 40;

  @tracked show = false;

  get targetElement() {
    return this.target === null
      ? document
      : document.querySelector(this.target);
  }

  /**
   * triggers when click
   *
   * @event click
   * @public
   */

  @action
  handleDidInsert() {
    console.log(this.targetElement.scrollTop, this.visibilityHeight);

    this.targetElement.addEventListener(
      'scroll',
      this._checkTargetScrollPosition.bind(this)
    );
  }

  @action
  handleClick() {
    let target =
      this.targetElement === document
        ? document.documentElement
        : this.targetElement;

    target.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  _checkTargetScrollPosition() {
    let scrollTop =
      this.targetElement === document
        ? document.documentElement.scrollTop
        : this.targetElement.scrollTop;
    this.show = scrollTop >= this.visibilityHeight;
  }

  willDestroy() {
    this.targetElement.removeEventListener(
      'scroll',
      this._checkTargetScrollPosition
    );
  }
}
