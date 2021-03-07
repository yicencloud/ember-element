import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class AvatarController extends Controller {
  // BEGIN-SNIPPET avatar-basic-usage-demo.js
  basicUsageCircleUrl =
    'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png';
  basicUsageSquareUrl =
    'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png';
  basicUsageSizeList = ['large', 'medium', 'small'];
  // END-SNIPPET

  // BEGIN-SNIPPET avatar-fallback-demo.js
  @action
  fallbackErrorHandler() {
    console.log('fallback');
  }
  // END-SNIPPET

  // BEGIN-SNIPPET avatar-fit-demo.js
  fitFits = ['fill', 'contain', 'cover', 'none', 'scale-down'];
  fitUrl =
    'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg';
  // END-SNIPPET
}
