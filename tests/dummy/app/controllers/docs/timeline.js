import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class TimelineController extends Controller {
  // BEGIN-SNIPPET timeline-basic-usage-demo.js
  @tracked basicUsageReverse = true;

  @tracked
  basicUsageActivities = [
    {
      content: 'Event start',
      timestamp: '2018-04-15',
    },
    {
      content: 'Approved',
      timestamp: '2018-04-13',
    },
    {
      content: 'Success',
      timestamp: '2018-04-11',
    },
  ];

  @action
  handleBasicUsageReverseChange(value) {
    if (this.basicUsageReverse !== value) {
      this.basicUsageReverse = value;
      this.basicUsageActivities = this.basicUsageActivities.reverse();
    }
  }
  // END-SNIPPET

  // BEGIN-SNIPPET timeline-custom-node-demo.js
  @tracked
  customNodeActivities = [{
    content: 'Custom icon',
    timestamp: '2018-04-12 20:46',
    size: 'large',
    type: 'primary',
    icon: 'more'
  }, {
    content: 'Custom color',
    timestamp: '2018-04-03 20:46',
    color: '#0bbd87'
  }, {
    content: 'Custom size',
    timestamp: '2018-04-03 20:46',
    size: 'large'
  }, {
    content: 'Default node',
    timestamp: '2018-04-03 20:46'
  }];
  // END-SNIPPET
}
