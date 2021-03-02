import AddonDocsRouter, { docsRoute } from "ember-cli-addon-docs/router";
import config from "./config/environment";

const Router = AddonDocsRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function () {
  this.route("not-found", { path: "/*path" });

  docsRoute(this, function () {
    this.route("changelog");
    this.route("installation");
    this.route("quick-start");
    this.route("internationalization");
    this.route("custom-theme");
    this.route("built-in-transition");
    this.route("dependencies");

    // Basic
    this.route("layout");
    this.route("layout-container");
    this.route("color");
    this.route("typography");
    this.route("border");
    this.route("icon");
    this.route("button");
    this.route("link");

    // Form
    this.route("radio");
    this.route("checkbox");
    this.route("input");
    this.route("input-number");
    this.route("select");
    this.route("cascader");
    this.route("switchcomp");
    this.route("slider");
    this.route("time-picker");
    this.route("date-picker");
    this.route("date-time-picker");
    this.route("upload");
    this.route("rate");
    this.route("color-picker");
    this.route("transfer");
    this.route("form");

    // Data
    this.route("table");
    this.route("tag");
    this.route("progress");
    this.route("tree");
    this.route("pagination");
    this.route("badge");

    // Notice
    this.route("alert");
    this.route("loading");
    this.route("message");
    this.route("message-box");
    this.route("notification");

    // Navigation
    this.route("nav-menu");
    this.route("tabs");
    this.route("breadcrumb");
    this.route("page-header");
    this.route("dropdown");
    this.route("steps");

    // Others
    this.route("dialog");
    this.route("tooltip");
    this.route("popover");
    this.route("popconfirm");
    this.route("card");
    this.route("carousel");
    this.route("collapse");
    this.route("timeline");
    this.route("divider");
    this.route("calendar");
    this.route("image");
    this.route("backtop");
    this.route("infinite-scroll");
    this.route("avatar");
    this.route("drawer");

  });
});

export default Router;