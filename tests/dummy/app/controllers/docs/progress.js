import Controller from "@ember/controller";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class ProgressController extends Controller {
  // BEGIN-SNIPPET progress-linear-progress-bar-demo.js
  formatLinearProgressBarText(percentage) {
    return percentage === 100 ? "Full" : `${percentage}%`;
  }
  // END-SNIPPET

  // BEGIN-SNIPPET progress-custom-color-demo.js
  @tracked customColorPercentage = 20;
  @tracked customColor = "#409eff";
  @tracked customColors = [
    { color: "#f56c6c", percentage: 20 },
    { color: "#e6a23c", percentage: 40 },
    { color: "#5cb87a", percentage: 60 },
    { color: "#1989fa", percentage: 80 },
    { color: "#6f7ad3", percentage: 100 },
  ];

  customColorMethod(percentage) {
    if (percentage < 30) {
      return "#909399";
    } else if (percentage < 70) {
      return "#e6a23c";
    } else {
      return "#67c23a";
    }
  }

  @action
  customColorIncrease() {
    this.customColorPercentage += 10;
    if (this.customColorPercentage > 100) {
      this.customColorPercentage = 100;
    }
  }

  @action
  customColorDecrease() {
    this.customColorPercentage -= 10;
    if (this.customColorPercentage < 0) {
      this.customColorPercentage = 0;
    }
  }
  // END-SNIPPET

  // BEGIN-SNIPPET progress-dashboard-progress-bar-demo.js
  @tracked dashboardProgressBarPercentage = 10;
  @tracked dashboardProgressBarColors = [
    { color: "#f56c6c", percentage: 20 },
    { color: "#e6a23c", percentage: 40 },
    { color: "#5cb87a", percentage: 60 },
    { color: "#1989fa", percentage: 80 },
    { color: "#6f7ad3", percentage: 100 },
  ];

  @action
  dashboardProgressBarIncrease() {
    this.dashboardProgressBarPercentage += 10;
    if (this.dashboardProgressBarPercentage > 100) {
      this.dashboardProgressBarPercentage = 100;
    }
  }

  @action
  dashboardProgressBarDecrease() {
    this.dashboardProgressBarPercentage -= 10;
    if (this.dashboardProgressBarPercentage < 0) {
      this.dashboardProgressBarPercentage = 0;
    }
  }
  // END-SNIPPET
}
