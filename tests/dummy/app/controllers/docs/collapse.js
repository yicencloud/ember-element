import { tracked } from '@glimmer/tracking';
import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class CollapseController extends Controller {
  // BEGIN-SNIPPET collapse-basic-usage-demo.js
  @tracked basicUsageActiveNames = ['1'];

  @action
  handleBasicUsageChange(value) {
    this.basicUsageActiveNames = value;
  }  
  // END-SNIPPET

  // BEGIN-SNIPPET collapse-accordion-demo.js
  @tracked accordionActiveName = '1';

  @action
  handleAccordionChange(value) {
    this.accordionActiveName = value;
  }
  // END-SNIPPET

  // BEGIN-SNIPPET collapse-custom-title-demo.js
  @tracked customTitleActiveName = '';

  @action
  handleCustomTitleChange(value) {
    this.customTitleActiveName = value;
  }
  // END-SNIPPET
}