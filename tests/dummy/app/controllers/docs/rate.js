import { tracked } from "@glimmer/tracking";
import Controller from "@ember/controller";
import { action } from "@ember/object";

export default class RateController extends Controller {
  // BEGIN-SNIPPET rate-basic-usage-demo.js
  @tracked basicUsageValue1 = 3;
  @tracked basicUsageValue2 = 0;

  // same as { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
  @tracked basicUsageColors = ["#99A9BF", "#F7BA2A", "#FF9900"];
  // END-SNIPPET

  // BEGIN-SNIPPET rate-with-text-demo.js
  @tracked withTextValue = null;
  @tracked withTextTexts = ["oops", "disappointed", "normal", "good", "great"];
  // END-SNIPPET

  // BEGIN-SNIPPET rate-more-icons-demo.js
  @tracked moreIconsValue = null;

  // same as { 2: 'icon-rate-face-1', 4: { value: 'icon-rate-face-2', excluded: true }, 5: 'icon-rate-face-3' }
  @tracked moreIconsIconClasses = ["icon-rate-face-1", "icon-rate-face-2", "icon-rate-face-3"];

  @tracked moreIconsVoidIconClass = "icon-rate-face-off";
  @tracked moreIconsColors = ["#99A9BF", "#F7BA2A", "#FF9900"];
  // END-SNIPPET


  // BEGIN-SNIPPET rate-read-only-demo.js
  @tracked readOnlyValue = 3.7;
  // END-SNIPPET
}
