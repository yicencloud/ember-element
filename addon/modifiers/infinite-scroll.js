import Modifier from 'ember-modifier';
import { throttle } from '@ember/runloop';

export default class InfiniteScrollModifier extends Modifier {
  /**
   * is disabled
   *
   * @property disabled
   * @type {boolean}
   * @default false
   * @public
   */
  disabled = false;

  /**
   * throttle delay (ms)
   *
   * @property delay
   * @type {number}
   * @default 200
   * @public
   */
  delay = 200;

  /**
   * trigger distance (px)
   *
   * @property distance
   * @type {number}
   * @default 0
   * @public
   */
  distance = 0;

  /**
   * Whether to execute the loading method immediately, in case the content
   * cannot be filled up in the initial state.
   *
   * @property immediate
   * @type {boolean}
   * @default true
   * @public
   */
  immediate = true;

  _handler = null;

  didReceiveArguments() {
    this.disabled = this.args.named.disabled;
    this.delay = this.args.named.delay;
    this.distance = this.args.named.delay;
    this.immediate = this.args.named.immediate;

    this._removeScrollEventListener();

    if (!this.disabled) {
      this._addScrollEventListener();
    }
  }

  willRemove() {
    this._removeScrollEventListener();
  }

  _addScrollEventListener() {
    this._handler = this._runHandler.bind(this);
  
    this.element.addEventListener('scroll', this._handler);
  }

  _removeScrollEventListener() {
    if (this._handler !== null) {
      this.element.removeEventListener('scroll', this._handler);
      this._handler = null;
    }
  }

  _runHandler() {
    if (this.element.scrollHeight - this.element.scrollTop > this.element.offsetHeight) {
      return;
    }

    if (this.immediate) {
      this.args.positional[0]?.();
      return;
    }

    throttle(this, this.args.positional[0], this.delay);
  }
}
