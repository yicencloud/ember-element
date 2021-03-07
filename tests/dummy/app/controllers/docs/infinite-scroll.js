import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class InfiniteScrollController extends Controller {
  // BEGIN-SNIPPET infinite-scroll-basic-usage-demo.js
  @tracked basicUsageCount = 6;

  @action
  increaseBasicUsageCount() {
    this.basicUsageCount += 2;
  }
  // END-SNIPPET

  // BEGIN-SNIPPET infinite-scroll-disable-loading-demo.js
  @tracked disableLoadingCount = 6;
  @tracked disableLoadingLoading = false;
  @tracked disableLoadingDisabled = false;

  get disableLoadingNoMore() {
    return this.disableLoadingCount >= 20;
  }

  @action
  increaseDisableLoadingCount() {
    this.disableLoadingLoading = true;

    setTimeout(() => {
      this.disableLoadingDisabled = true;
      this.disableLoadingCount += 2;
      this.disableLoadingDisabled = this.disableLoadingCount >= 20;
      this.disableLoadingLoading = false;
    }, 2000);
  }
  // END-SNIPPET
}
