import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class TabsController extends Controller {
  // BEGIN-SNIPPET tabs-basic-usage-demo.js
  @tracked basicUsageActiveName = 'first';

  @action
  handleBasicUsageClick(tab, event) {
    console.log(tab, event);
    this.basicUsageActiveName = tab.name;
  }
  // END-SNIPPET

  // BEGIN-SNIPPET tabs-card-style-demo.js
  @tracked cardStyleActiveName = 'first';

  @action
  handleCardStyleClick(tab, event) {
    console.log(tab, event);
    this.cardStyleActiveName = tab.name;
  }
  // END-SNIPPET

  // BEGIN-SNIPPET tabs-border-card-demo.js
  @tracked borderCardActiveName = 'first';

  @action
  handleBorderCardClick(tab, event) {
    console.log(tab, event);
    this.borderCardActiveName = tab.name;
  }
  // END-SNIPPET

  // BEGIN-SNIPPET tabs-tab-position-demo.js
  @tracked tabPosition = 'left';
  @tracked tabPositionActiveName = 'first';

  @action
  handleTabPositionChange(position) {
    this.tabPosition = position;
  }

  @action
  handleTabPositionClick(tab, event) {
    console.log(tab, event);
    this.tabPositionActiveName = tab.name;
  }
  // END-SNIPPET

  // BEGIN-SNIPPET tabs-custom-tab-demo.js
  @tracked customTabActiveName = 'first';

  @action
  handleCustomTabClick(tab, event) {
    console.log(tab, event);
    this.customTabActiveName = tab.name;
  }
  // END-SNIPPET

  // BEGIN-SNIPPET tabs-add-and-close-tab-demo.js
  @tracked addAndCloseTabActiveName = '2';

  @tracked addAndCloseTabs = [
    {
      title: 'Tab 1',
      name: '1',
      content: 'Tab 1 content',
    },
    {
      title: 'Tab 2',
      name: '2',
      content: 'Tab 2 content',
    },
  ];

  addAndCloseTabIndex = 2;

  @action
  handleAddAndCloseTabClick(tab, event) {
    this.addAndCloseTabActiveName = tab.name;
  }

  @action
  handleAddAndCloseTabEdit(targetName, act) {
    if (act === 'add') {
      let newTabName = ++this.addAndCloseTabIndex + '';
      this.addAndCloseTabs = [...this.addAndCloseTabs, {
        title: 'New Tab',
        name: newTabName,
        content: 'New Tab content'
      }];
      this.addAndCloseTabActiveName = newTabName;
    }
    if (act === 'remove') {
      let tabs = [...this.addAndCloseTabs];
      let activeName = this.addAndCloseTabActiveName;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }
      
      this.addAndCloseTabActiveName = activeName;
      this.addAndCloseTabs = tabs.filter(tab => tab.name !== targetName);
    }
  }
  // END-SNIPPET


  // BEGIN-SNIPPET tabs-customized-trigger-button-tab-demo.js
  @tracked customizedTriggerButtonTabActiveName = '2';

  @tracked customizedTriggerButtonTabs = [
    {
      title: 'Tab 1',
      name: '1',
      content: 'Tab 1 content',
    },
    {
      title: 'Tab 2',
      name: '2',
      content: 'Tab 2 content',
    },
  ];

  customizedTriggerButtonTabIndex = 2;

  @action
  handleCustomizedTriggerButtonTabClick(tab, event) {
    this.customizedTriggerButtonTabActiveName = tab.name;
  }

  @action
  handleCustomizedTriggerButtonTabAdd() {
    let newTabName = ++this.customizedTriggerButtonTabIndex + '';
    this.customizedTriggerButtonTabs = [...this.customizedTriggerButtonTabs, {
      title: 'New Tab',
      name: newTabName,
      content: 'New Tab content'
    }];
    this.customizedTriggerButtonTabActiveName = newTabName;
  }

  @action
  handleCustomizedTriggerButtonTabRemove(targetName) {
    let tabs = this.customizedTriggerButtonTabs;
    let activeName = this.customizedTriggerButtonTabActiveName;
    if (activeName === targetName) {
      tabs.forEach((tab, index) => {
        if (tab.name === targetName) {
          let nextTab = tabs[index + 1] || tabs[index - 1];
          if (nextTab) {
            activeName = nextTab.name;
          }
        }
      });
    }
    
    this.customizedTriggerButtonTabActiveName = activeName;
    this.customizedTriggerButtonTabs = tabs.filter(tab => tab.name !== targetName);
  }
  // END-SNIPPET
}
