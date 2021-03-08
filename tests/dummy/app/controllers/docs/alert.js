import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class AlertController extends Controller {
  // BEGIN-SNIPPET alert-customizable-close-button-demo.js
  @action
  customizableCloseButtonHello() {
    alert('Hello World!');
  }
  // END-SNIPPET
}