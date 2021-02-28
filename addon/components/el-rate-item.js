import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import argument from "../decorators/argument";

export default class ElRateItemComponent extends Component {
  @argument
  value = null;

  @argument
  rate = null;

  @tracked hover = false;

  get diffValue() {
    return this.value - this.rate.value;
  }

  get isPartial() {
    return this.diffValue > 0 && this.diffValue < 1;
  }

  get width() {
    return `${Math.round((1 - this.diffValue) * 100)}%`;
  }

  get active() {
    return (
      this.isPartial ||
      (this.rate.activeValue === null && this.value <= this.rate.value) ||
      this.value <= this.rate.activeValue
    );
  }

  get disabled() {
    return this.rate.disabled;
  }

  get color() {
    if (
      this.disabled &&
      ((this.active && this.isPartial) || (!this.active && !this.isPartial))
    ) {
      return this.rate.disabledVoidColor;
    }

    return this.active ? this.rate.color : this.rate.voidColor;
  }

  get partialColor() {
    return this.rate.color;
  }

  get iconClass() {
    if (this.disabled && !this.active) {
      return this.rate.disabledVoidIconClass;
    }

    if (!this.active && !this.disabled) {
      return this.rate.voidIconClass;
    }

    if (this.active) {
      return this.rate.iconClass;
    }
  }

  @action
  setActive() {
    if (this.disabled) {
      return;
    }

    this.hover = true;

    this.rate.setActiveValue(this.value);
  }

  @action
  resetActive() {
    if (this.disabled) {
      return;
    }

    this.hover = false;

    this.rate.resetActiveValue();
  }

  @action
  handleChange() {
    if (this.disabled) {
      return;
    }

    this.rate.handleChange(this.value);
  }
}
