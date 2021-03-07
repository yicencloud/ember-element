import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import argument from '../decorators/argument';

/**
 * Besides the native features of img, support lazy load, custom placeholder and load failure, etc.
 *
 * @class ElImageComponent
 * @extends Glimmer.Component
 * @public
 *
 * @author Tower He (towerhe@gmail.com)
 */
export default class ElImageComponent extends Component {
  /**
   * Image source, same as native
   *
   * @property src
   * @type {string}
   * @public
   */
  @argument
  src = null;

  /**
   * Indicate how the image should be resized to fit its container, same as
   * [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
   *
   * **accepted values**: fill / contain / cover / none / scale-down
   *
   * @property fit
   * @type {string}
   * @public
   */
  @argument
  fit = null;

  /**
   * Native alt
   *
   * @property alt
   * @type {string}
   * @public
   */
  @argument
  alt = null;

  /**
   * Native referrerPolicy
   *
   * @property referrerPolicy
   * @type {string}
   * @public
   */
  @argument
  referrerPolicy = null;

  /**
   * Whether to use lazy load
   *
   * @property lazy
   * @type {boolean}
   * @default false
   * @public
   */
  @argument
  lazy = false;

  /**
   * The container to add scroll listener when using lazy load
   *
   * @property scrollContainer
   * @type {string | HTMLElement}
   * @default The nearest parent container whose overflow property is auto or scroll
   * @public
   */
  @argument
  scrollContainer = null;

  /**
   * allow big image preview
   *
   * @property previewSrcList
   * @type {array}
   * @public
   */
  @argument
  previewSrcList = null;

  /**
   * set image preview z-index
   *
   * @property zIndex
   * @type {number}
   * @default 2000
   * @public
   */
  @argument
  zIndex = 2000;

  @tracked showViewer = false;

  /**
   * Same as native load
   *
   * @event load
   * @param {Event} e
   * @public
   */

  /**
   * Same as native error
   *
   * @event error
   * @param {Event} e
   * @public
   */

  @action
  handleLoad(e) {
    this.args.load?.(e);
  }

  @action
  handleError(e) {
    this.args.error?.(e);
  }

  @action
  handleClick() {
    if (this.previewSrcList !== null) {
      this.showViewer = true;
    }
  }

  @action
  handleViewerCloseClick() {
    this.showViewer = false;
  }

  @action
  didInsert(element) {
    if (!this.lazy) {
      return;
    }

    let scrollContainer =
      this.scrollContainer === null
        ? element.parentElement
        : document.querySelector(this.scrollContainer);

    let img = element.querySelector('img');

    if (
      element.offsetTop <
      scrollContainer.offsetHeight + scrollContainer.offsetTop
    ) {
      img.src = this.src;
      return;
    }

    let lazyloadThrottleTimeout;

    let self = this;
    function lazyload() {
      if (lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }

      lazyloadThrottleTimeout = setTimeout(function () {
        if (
          element.offsetTop <
          scrollContainer.scrollTop +
            scrollContainer.offsetHeight +
            scrollContainer.offsetTop
        ) {
          img.src = self.src;
          scrollContainer.removeEventListener('scroll', lazyload);
        }
      }, 20);
    }
    scrollContainer.addEventListener('scroll', lazyload);
  }
}
