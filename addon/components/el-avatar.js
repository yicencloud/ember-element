import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import argument from '../decorators/argument';

/**
 * Avatars can be used to represent people or objects. It supports images, Icons, or characters.
 * 
 * @class ElAvatarComponent
 * @extends Glimmer.Component
 * @public
 * 
 * @author Tower He (towerhe@gmail.com)
 */
export default class ElAvatarComponent extends Component {
  /**
   * set representation type to Icon, more info on Icon Component
   * 
   * @property icon
   * @type {string}
   * @public
   */
  @argument
  icon = null;

  /**
   * set avatar size
   * 
   * **accepted values**: {number} / large / medium / small
   * 
   * @property size
   * @type {string | number}
   * @default 'large'
   * @public
   */
  @argument
  size = 'large';

  /**
   * set avatar shape
   * 
   * **accepted values**: circle / square
   * 
   * @property shape
   * @type {string}
   * @default 'circle'
   * @public
   */
  @argument
  shape = 'circle';

  /**
   * the address of the image for an image avatar
   * 
   * @property src
   * @type {string}
   * @public
   */
  @argument
  src = null;

  /**
   * A list of one or more strings separated by commas indicating a set of 
   * possible image sources for the user agent to use
   * 
   * @property srcSet
   * @type {string}
   * @public
   */
  @argument
  srcSet = null;

  /**
   * This attribute defines an alternative text description of the image
   * 
   * @property alt
   * @type {string}
   * @public
   */
  @argument
  alt = null;

  /**
   * set how the image fit its container for an image avatar
   * 
   * **accepted values**: fill / contain / cover / none / scale-down
   * 
   * @property fit
   * @type {string}
   * @default 'cover'
   * @public
   */
  @argument
  fit = 'cover';

  get isNumericSize() {
    return typeof this.size !== 'string';
  }

  get isValidSrc() {
    return this.src !== null && !this._loadImageFailed;
  }

  @tracked _loadImageFailed = false;

  /**
   * handler when img load error, return false to prevent default fallback
   * behavior
   * 
   * @event error
   * @param {Event} e
   * @public
   */

  @action
  handleLoadImageFailed(e) {
    this._loadImageFailed = true;

    this.args.error?.(e);
  }
}
