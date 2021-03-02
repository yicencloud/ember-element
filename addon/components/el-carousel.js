import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import argument from "../decorators/argument";

/**
 * Loop a series of images or texts in a limited space
 *
 * @class ElCarouselComponent
 * @extends Glimmer.Component
 * @public
 *
 * @author Tower He (towerhe@gmail.com)
 */
export default class ElCarouselComponent extends Component {
  /**
   * height of the carousel
   *
   * @property height
   * @type {string}
   * @public
   */
  @argument
  height = null;

  /**
   * index of the initially active slide (starting from 0)
   *
   * @property initialIndex
   * @type {number}
   * @default 0
   * @public
   */
  @argument
  initialIndex = 0;

  /**
   * how indicators are triggered
   *
   * **accepted values**: hover / click
   *
   * @property trigger
   * @type {string}
   * @default "hover"
   * @public
   */
  @argument
  trigger = "hover";

  /**
   * whether automatically loop the slides
   *
   * @property autoplay
   * @type {boolean}
   * @default true
   * @public
   */
  @argument
  autoplay = true;

  /**
   * interval of the auto loop, in milliseconds
   *
   * @property interval
   * @type {number}
   * @default 3000
   * @public
   */
  @argument
  interval = 3000;

  /**
   * position of the indicators
   *
   * **accepted values**: outside / none
   *
   * @property indicatorPosition
   * @type {string}
   * @public
   */
  @argument
  indicatorPosition = null;

  /**
   * when arrows are shown
   *
   * **accepted values**: always / hover / never
   *
   * @property arrow
   * @type {string}
   * @default "hover"
   * @public
   */
  @argument
  arrow = "hover";

  /**
   * type of the Carousel
   *
   * **accepted values**: card
   *
   * @property type
   * @type {string}
   * @public
   */
  @argument
  type = null;

  /**
   * display the items in loop
   *
   * @property loop
   * @type {boolean}
   * @default true
   * @public
   */
  @argument
  loop = true;

  /**
   * display direction
   *
   * **accepted values**: horizontal / vertical
   *
   * @property direction
   * @type {string}
   * @default "horizontal"
   * @public
   */
  @argument
  direction = "horizontal";

  @tracked _items = [];

  get itemsCount() {
    return this._items.length;
  }

  @tracked currentIndex = 0;

  @tracked _width = 0;

  @tracked _height = 0;

  /**
   * @property _isHover
   * @type {boolean}
   * @default false
   * @private
   */
  @tracked _isHover = false;

  _intervalHandle = null;

  constructor() {
    super(...arguments);

    this.currentIndex = this.initialIndex;
  }

  get showArrow() {
    return (
      this.direction !== "vertical" &&
      (this.arrow === "always" || (this.arrow === "hover" && this._isHover))
    );
  }

  get triggerEvent() {
    return this.trigger === "hover" ? "mousemove" : "click";
  }

  /**
   * triggers when the active slide switches
   *
   * @event change
   * @param {number} index index of the new active slide,
   * @param {number} oldIndex index of the old active slide
   * @public
   */

  @action
  handleChange() {}

  @action
  handleMouseOver() {
    this._isHover = true;
    this._stopAutoPlay();
  }

  @action
  handleMouseLeave() {
    this._isHover = false;
    this._startAutoplay();
  }

  @action
  didInsert(element) {
    this._width = element.offsetWidth;
    this._height = element.offsetHeight;
    this._items = element.querySelectorAll(".el-carousel__item");

    this._initPositions();

    this._markCards();
    this._startAutoplay();
  }

  @action
  willDestroy() {
    this._stopAutoPlay();
  }

  /**
   * manually switch slide
   *
   * @method setActiveItem
   * @param {number | string} item index of the slide to be switched to,
   *                               starting from 0
   * @public
   */
  @action
  setActiveItem(index) {
    this._stopAutoPlay();

    if (this.currentIndex == index) {
      return;
    }

    let ordinal = this.currentIndex < index;
    let dv = Math.abs(this.currentIndex - index);
    this.currentIndex = index;

    for (let i = 0; i < dv; i++) {
      this._resetPositionIndexes(ordinal);
    }
    this._transform(ordinal);
  }

  /**
   * switch to the previous slide
   *
   * @method prev
   * @public
   */
  @action
  prev() {
    this.currentIndex--;

    if (this.currentIndex < 0) {
      this.currentIndex = this.loop ? this.itemsCount - 1 : 0;
    }

    this._resetPositionIndexes(false);
    this._transform(false);
  }

  /**
   * switch to the next slide
   *
   * @method next
   * @public
   */
  @action
  next() {
    this.currentIndex++;

    if (this.currentIndex > this.itemsCount - 1) {
      this.currentIndex = this.loop ? 0 : this.itemsCount - 1;
    }

    this._resetPositionIndexes(true);
    this._transform(true);
  }

  _markCards() {
    if (this.type !== "card") {
      return;
    }

    for (let i = 0; i < this.itemsCount; i++) {
      this._items[i].classList.add("el-carousel__item--card");
    }
  }

  _startAutoplay() {
    if (this.autoplay) {
      this._intervalHandle = setInterval(this.next, this.interval);
    }
  }

  _stopAutoPlay() {
    if (this.autoplay && this._intervalHandle) {
      clearInterval(this._intervalHandle);
    }
  }

  _setActive() {
    this._clearActive();

    this._items[this.currentIndex].classList.add("is-active");
  }

  _clearActive() {
    for (let i = 0; i < this.itemsCount; i++) {
      this._items[i].classList.remove("is-active");
    }
  }

  _setAnimating(ordinal) {
    let className = this.type === "card" ? "is-in-stage" : "is-animating";
    this._clearAnimating(className);

    this._items[this._getPrevIndex(this.currentIndex, ordinal)].classList.add(
      className
    );
    if (this.type === "card") {
      this._items[this._getNextIndex(this.currentIndex, ordinal)].classList.add(
        className
      );
    }
    this._items[this.currentIndex].classList.add(className);
  }

  _clearAnimating(className) {
    for (let i = 0; i < this.itemsCount; i++) {
      this._items[i].classList.remove(className);
    }
  }

  _getPrevIndex(index, ordinal) {
    if (ordinal) {
      return index - 1 < 0 ? this.itemsCount - 1 : index - 1;
    }

    return this._getNextIndex(index, true);
  }

  _getNextIndex(index, ordinal) {
    if (ordinal) {
      return index + 1 > this.itemsCount - 1 ? 0 : index + 1;
    }

    return this._getPrevIndex(index, true);
  }

  _positionIndexes = [];

  _xPositions = [];

  _yPositions = [];

  get _axis() {
    return this.direction === "horizontal" ? "X" : "Y";
  }

  get _half() {
    return Math.trunc(this.itemsCount / 2);
  }

  get _scale() {
    return this.type === "card" ? 0.83 : 1;
  }

  get _scaledCardWidth() {
    return this._width * 0.5 * this._scale;
  }

  get _scaleCardHeight() {
    return this._height * 0.5 * this._scale;
  }

  _initPositions() {
    this._calculatePositions();
    this._initPositionIndexes();
    this._transform(true);

    console.log(this._xPositions);
  }

  _calculatePositions() {
    if (this.type === "card") {
      this._calculateCardPositions();
      return;
    }

    let len = this.itemsCount % 2 === 0 ? this.itemsCount + 1 : this.itemsCount;
    for (let i = 0; i < len; i++) {
      this._xPositions.push((i - this._half) * this._width);
      this._yPositions.push((i - this._half) * this._height);
    }
  }

  _calculateCardPositions() {
    this._calculateLeftCardPositions();
    this._calculateVisibleCardPositions();
    this._calculateRightCardPositions();
  }

  _calculateLeftCardPositions() {
    if (this.itemsCount <= 3) {
      return;
    }

    let leftCount = Math.ceil((this.itemsCount - 3) / 2);
    for (let i = 0; i < leftCount; i++) {
      this._xPositions.push((i - leftCount) * this._scaledCardWidth);
      this._yPositions.push((i - leftCount) * this._scaleCardHeight);
    }
  }

  _calculateVisibleCardPositions() {
    this._xPositions.push(this._scaledCardWidth - this._width * 0.5);
    this._yPositions.push(this._scaleCardHeight - this._height * 0.5);

    this._xPositions.push(this._width * 0.25);
    this._yPositions.push(this._height * 0.25);

    this._xPositions.push(this._width - this._scaledCardWidth);
    this._yPositions.push(this._height - this._scaleCardHeight);
  }

  _calculateRightCardPositions() {
    if (this.itemsCount <= 3) {
      return;
    }

    let rightCount = Math.ceil((this.itemsCount - 3) / 2);
    for (let i = 0; i < rightCount; i++) {
      this._xPositions.push((rightCount - i) * this._scaledCardWidth);
      this._yPositions.push((rightCount - i) * this._scaleCardHeight);
    }
  }

  _initPositionIndexes() {
    for (let i = 0; i < this._half + (this.itemsCount % 2); i++) {
      this._positionIndexes.push(i + this._half);
    }

    for (let i = 0; i < this._half; i++) {
      this._positionIndexes.push(i);
    }
  }

  _resetPositionIndexes(ordinal = true) {
    if (ordinal) {
      if (this._positionIndexes.includes(this.itemsCount)) {
        this._positionIndexes = this._positionIndexes.map((i) => i - 1);
      } else {
        let index = this._positionIndexes.pop();
        this._positionIndexes.unshift(index);
      }
    } else {
      if (this._positionIndexes.includes(this.itemsCount)) {
        let index = this._positionIndexes.shift();
        this._positionIndexes.push(index);
      } else {
        this._positionIndexes = this._positionIndexes.map((i) => i + 1);
      }
    }
  }

  _transform(ordinal) {
    this._setActive();
    this._setAnimating(ordinal);

    for (let i = 0; i < this.itemsCount; i++) {
      let position =
        this._axis === "X"
          ? this._xPositions[this._positionIndexes[i]]
          : this._yPositions[this._positionIndexes[i]];

      this._items[i].style.transform = `translate${
        this._axis
      }(${position}px) scale(${i === this.currentIndex ? 1 : this._scale})`;
    }
  }
}
