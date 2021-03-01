import Controller from "@ember/controller";
import { tracked } from "@glimmer/tracking";

export default class CardController extends Controller {
  // BEGIN-SNIPPET card-with-images-demo.js
  @tracked withImagesCurrentDate = new Date();
  @tracked withImagesBodyStyle = { padding: "0px" };
  // END-SNIPPET
}