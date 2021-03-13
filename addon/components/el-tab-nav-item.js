import Component from '@glimmer/component';
import { action } from '@ember/object';
import argument from '../decorators/argument';

export default class ElTabNavItemComponent extends Component {
  @argument
  pane = null;

  willDestroy() {
    this.pane.parent.panesCount--;
  }

  @action
  handleClick(e) {
    if (this.pane.disabled) {
      return;
    }

    this.args.click?.(this.pane, e);

    this._updateActiveBar(e.target);
  }

  @action
  handleClose() {
    if (this.pane.disabled) {
      return;
    }

    if (this.pane.parent.editable) {
      this.pane.parent.handleEdit(this.pane, "remove");
    } else if (this.pane.parent.closable) {
      this.pane.parent.handleRemove(this.pane.name);
    }
  }

  @action
  handleDidInsert(element) {
    this.pane.parent.panesCount++;
    if (this.pane.active) {
      this._updateActiveBar(element);
    }
  }

  @action
  handleDidUpdate(element) {
    if (this.pane.active) {
      this._updateActiveBar(element);
    }
  }

  _updateActiveBar(element) {
    let parent = this.pane.parent;

    if (parent.type) {
      return;
    }

    let style = window.getComputedStyle
      ? getComputedStyle(element, null)
      : element.currentStyle;

    parent.activeBarWidth = this._getActiveBarWidth(
      parent.position,
      element,
      style
    );
    parent.activeBarHeight = this._getActiveBarHeight(
      parent.position,
      element,
      style
    );
    parent.activeBarTransform = this._getActiveBarTransform(parent.position, element, style);
  }

  _getActiveBarWidth(position, element, style) {
    if (position === 'left' || position === 'right') {
      return "";
    }

    return `${(
      element.clientWidth -
      (parseInt(style.paddingLeft) || 0) -
      (parseInt(style.paddingRight) || 0)
    )}px`;
  }

  _getActiveBarHeight(position, element, style) {
    if (position === 'top' || position === 'bottom') {
      return "";
    }

    return `${(
      element.clientHeight -
      (parseInt(style.paddingTop) || 0) -
      (parseInt(style.paddingBottom) || 0)
    )}px`;
  }

  _getActiveBarTransform(position, element, style) {
    if (position === 'top' || position === 'bottom') {
      return `translateX(${element.offsetLeft + (parseInt(style.paddingLeft) || 0)}px)`;
    }

    return `translateY(${element.offsetTop + (parseInt(style.paddingTop) || 0)}px)`;
  }
}
