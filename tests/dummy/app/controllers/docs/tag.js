import Controller from "@ember/controller";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { A } from "@ember/array";

export default class TagController extends Controller {
  // BEGIN-SNIPPET tag-removable-tag-demo.js
  @tracked removableTags = [
    { name: "Tag 1", type: "" },
    { name: "Tag 2", type: "success" },
    { name: "Tag 3", type: "info" },
    { name: "Tag 4", type: "warning" },
    { name: "Tag 5", type: "danger" },
  ];
  // END-SNIPPET

  // BEGIN-SNIPPET tag-edit-dynamically-demo.js
  @tracked editDynamicallyInputVisible = false;
  @tracked editDynamicallyInputValue = "";
  @tracked editDynamicallyTags = ["Tag 1", "Tag 2", "Tag 3"];

  @action
  handleEditDynamicallyShowInput() {
    this.editDynamicallyInputVisible = true;
  }

  @action
  handleEditDynamicallyClose(tag) {
    this.editDynamicallyTags.splice(this.editDynamicallyTags.indexOf(tag), 1);
    this.editDynamicallyTags = [...this.editDynamicallyTags];
  }
  // END-SNIPPET

  // BEGIN-SNIPPET tag-theme-demo.js
  @tracked themeTags = [
    { type: "", label: "Tag 1" },
    { type: "success", label: "Tag 2" },
    { type: "info", label: "Tag 3" },
    { type: "danger", label: "Tag 4" },
    { type: "warning", label: "Tag 5" },
  ];
  //END-SNIPPET
}
