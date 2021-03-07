import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import argument from '../decorators/argument';

/**
 * create an image viewer for previewing a list of images.
 *
 * @class ElImageViewerComponent
 * @extends Glimmer.Component
 * @public
 */
export default class ElImageViewerComponent extends Component {
  @argument
  zIndex = 2000;

  @argument
  previewSrcList = null;

  @tracked currentIndex = 0;

  @tracked scale = 1;

  @tracked rotate = 0;

  @tracked fullscreen = false;

  get previewSrcListLength() {
    return this.previewSrcList === null ? 0 : this.previewSrcList.length;
  }

  get currentSrc() {
    return this.previewSrcListLength <= 0
      ? null
      : this.previewSrcList[this.currentIndex];
  }

  /**
   * triggers when image viewer is closed
   *
   * @event close
   * @public
   */

  @action
  handlePrevClick() {
    this.currentIndex--;

    if (this.currentIndex < 0) {
      this.currentIndex = this.previewSrcListLength - 1;
    }
  }

  @action
  handleNextClick() {
    this.currentIndex++;

    if (this.currentIndex === this.previewSrcListLength) {
      this.currentIndex = 0;
    }
  }

  @action
  handleZoomOutClick() {
    this.scale = this.scale - 0.2;
  }

  @action
  handleZoomInClick() {
    this.scale = this.scale + 0.2;
  }

  @action
  handleFullscreenClick() {
    this.fullscreen = true;
  }

  @action
  handleOriginClick() {
    this.fullscreen = false;
    this.scale = 1;
    this.rotate = 0;
  }

  @action
  handleAnticlockwiseClick() {
    this.rotate = this.rotate - 90;
  }
  @action
  handleClockwiseClick() {
    this.rotate = this.rotate + 90;
  }

  @action
  handleCloseClick() {
    this.args.close?.();
  }
}
