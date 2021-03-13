<!-- markdownlint-disable MD033 -->

# Tabs

Divide data collections which are related yet belong to different types.

## TODO

* [ ] Fix `card` type css issues.

## Basic usage

Basic and concise tabs.

<DocsDemo @class="demo-block demo-tabs" as |demo|>
    <demo.example @name="tabs-basic-usage-demo.hbs">
      <ElTabs @stretch={{true}} @value={{this.basicUsageActiveName}} @click={{this.handleBasicUsageClick}} as |Tabs|>
        <Tabs.Pane @label="User" @name="first">User</Tabs.Pane>
        <Tabs.Pane @label="Config" @name="second">Config</Tabs.Pane>
        <Tabs.Pane @label="Role" @name="third">Role</Tabs.Pane>
        <Tabs.Pane @label="Task" @name="fourth">Task</Tabs.Pane>
      </ElTabs>
    </demo.example>
    <div class="description">
      Tabs provide a selective card functionality. By default the first tab is selected as active, and you can activate any tab by setting the `value` attribute.
    </div>
    <demo.snippet @name="tabs-basic-usage-demo.hbs" />
    <demo.snippet @name="tabs-basic-usage-demo.js" />
</DocsDemo>

## Card Style

Tabs styled as cards.

<DocsDemo @class="demo-block demo-tabs" as |demo|>
    <demo.example @name="tabs-card-style-demo.hbs">
      <ElTabs @type="card" @value={{this.cardStyleActiveName}} @click={{this.handleCardStyleClick}} as |Tabs|>
        <Tabs.Pane @label="User" @name="first">User</Tabs.Pane>
        <Tabs.Pane @label="Config" @name="second">Config</Tabs.Pane>
        <Tabs.Pane @label="Role" @name="third">Role</Tabs.Pane>
        <Tabs.Pane @label="Task" @name="fourth">Task</Tabs.Pane>
      </ElTabs>
    </demo.example>
    <div class="description">
      Set `type` to `card` can get a card-styled tab.
    </div>
    <demo.snippet @name="tabs-card-style-demo.hbs" />
    <demo.snippet @name="tabs-card-style-demo.js" />
</DocsDemo>

## Border card

Border card tabs.

<DocsDemo @class="demo-block demo-tabs" as |demo|>
    <demo.example @name="tabs-border-card-demo.hbs">
      <ElTabs @type="border-card" @value={{this.borderCardActiveName}} @click={{this.handleBorderCardClick}} as |Tabs|>
        <Tabs.Pane @label="User" @name="first">User</Tabs.Pane>
        <Tabs.Pane @label="Config" @name="second">Config</Tabs.Pane>
        <Tabs.Pane @label="Role" @name="third">Role</Tabs.Pane>
        <Tabs.Pane @label="Task" @name="fourth">Task</Tabs.Pane>
      </ElTabs>
    </demo.example>
    <div class="description">
      Set `type` to `border-card`.
    </div>
    <demo.snippet @name="tabs-border-card-demo.hbs" />
    <demo.snippet @name="tabs-border-card-demo.js" />
</DocsDemo>

## Tab position

You can use tab-position attribute to set the tab's position.

<DocsDemo @class="demo-block demo-tabs" as |demo|>
    <demo.example @name="tabs-tab-position-demo.hbs">
      <ElRadioGroup @value={{this.tabPosition}} @change={{this.handleTabPositionChange}} style="margin-bottom: 30px;" as |Group|>
        <Group.RadioButton @label="top">top</Group.RadioButton>
        <Group.RadioButton @label="right">right</Group.RadioButton>
        <Group.RadioButton @label="bottom">bottom</Group.RadioButton>
        <Group.RadioButton @label="left">left</Group.RadioButton>
      </ElRadioGroup>
      <ElTabs @position={{this.tabPosition}} @value={{this.tabPositionActiveName}} @click={{this.handleTabPositionClick}} as |Tabs|>
        <Tabs.Pane @label="User" @name="first">User</Tabs.Pane>
        <Tabs.Pane @label="Config" @name="second">Config</Tabs.Pane>
        <Tabs.Pane @label="Role" @name="third">Role</Tabs.Pane>
        <Tabs.Pane @label="Task" @name="fourth">Task</Tabs.Pane>
      </ElTabs>
    </demo.example>
    <div class="description">
      You can choose from four directions: `position="left|right|top|bottom"`
    </div>
    <demo.snippet @name="tabs-tab-position-demo.hbs" />
    <demo.snippet @name="tabs-tab-position-demo.js" />
</DocsDemo>

## Custom Tab

You can use named block to customize the tab label content.

<DocsDemo @class="demo-block demo-tabs" as |demo|>
    <demo.example @name="tabs-custom-tab-demo.hbs">
      <ElTabs @type="border-card" @value={{this.customTabActiveName}} @click={{this.handleCustomTabClick}} as |Tabs|>
        <Tabs.Pane @name="first">
          <:label>
            <span><ElIcon @icon="date" /> Route</span>
          </:label>
          <:default>Route</:default>
        </Tabs.Pane>
        <Tabs.Pane @label="Config" @name="second">Config</Tabs.Pane>
        <Tabs.Pane @label="Role" @name="third">Role</Tabs.Pane>
        <Tabs.Pane @label="Task" @name="fourth">Task</Tabs.Pane>
      </ElTabs>
    </demo.example>
    <demo.snippet @name="tabs-custom-tab-demo.hbs" />
    <demo.snippet @name="tabs-custom-tab-demo.js" />
</DocsDemo>

## Add & close tab

Only card type Tabs support addable & closeable.

<DocsDemo @class="demo-block demo-tabs" as |demo|>
    <demo.example @name="tabs-add-and-close-tab-demo.hbs">
      <ElTabs @type="card" @editable={{true}} @value={{this.addAndCloseTabActiveName}} @edit={{this.handleAddAndCloseTabEdit}} @click={{this.handleAddAndCloseTabClick}} as |Tabs|>
        {{#each this.addAndCloseTabs as |tab|}}
          <Tabs.Pane @label={{tab.title}} @name={{tab.name}}>
            {{tab.content}}
          </Tabs.Pane>
        {{/each}}
      </ElTabs>
    </demo.example>
    <demo.snippet @name="tabs-add-and-close-tab-demo.hbs" />
    <demo.snippet @name="tabs-add-and-close-tab-demo.js" />
</DocsDemo>

## Customized trigger button of new tab

<DocsDemo @class="demo-block demo-tabs" as |demo|>
    <demo.example @name="tabs-customized-trigger-button-tab-demo.hbs">
      <div style="margin-bottom: 20px;">
        <ElButton
          @size="small"
          @click={{this.handleCustomizedTriggerButtonTabAdd}}
        >
          add tab
        </ElButton>
      </div>
      <ElTabs @type="card" @closable={{true}} @value={{this.customizedTriggerButtonTabActiveName}} @remove={{this.handleCustomizedTriggerButtonTabRemove}} @click={{this.handleCustomizedTriggerButtonTabClick}} as |Tabs|>
        {{#each this.customizedTriggerButtonTabs as |tab|}}
          <Tabs.Pane @label={{tab.title}} @name={{tab.name}}>
            {{tab.content}}
          </Tabs.Pane>
        {{/each}}
      </ElTabs>
    </demo.example>
    <demo.snippet @name="tabs-customized-trigger-button-tab-demo.hbs" />
    <demo.snippet @name="tabs-customized-trigger-button-tab-demo.js" />
</DocsDemo>

## Tabs Arguments

| Argument    | Description                                                                                                                         | Type                                | Accepted Values       | Default           |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | --------------------- | ----------------- |
| value       | binding value, name of the selected tab                                                                                             | string                              | —                     | name of first tab |
| type        | type of Tab                                                                                                                         | string                              | card/border-card      | —                 |
| closable    | whether Tab is closable                                                                                                             | boolean                             | —                     | false             |
| addable     | whether Tab is addable                                                                                                              | boolean                             | —                     | false             |
| editable    | whether Tab is addable and closable                                                                                                 | boolean                             | —                     | false             |
| position    | position of tabs                                                                                                                    | string                              | top/right/bottom/left | top               |
| stretch     | whether width of tab automatically fits its container                                                                               | boolean                             | -                     | false             |
| beforeLeave | hook function before switching tab. If false is returned or a Promise is returned and then is rejected, switching will be prevented | Function(activeName, oldActiveName) | —                     | —                 |

## Tabs Events

| Event Name | Description                                           | Parameters              |
| ---------- | ----------------------------------------------------- | ----------------------- |
| click      | triggers when a tab is clicked                        | clicked tab             |
| remove     | triggers when tab-remove button is clicked            | name of the removed tab |
| add        | triggers when tab-add button is clicked               | —                       |
| edit       | triggers when tab-add button or tab-remove is clicked | (targetName, action)    |

## Tab-pane Arguments

| Argument | Description                                                                          | Type    | Accepted Values | Default                                                                        |
| -------- | ------------------------------------------------------------------------------------ | ------- | --------------- | ------------------------------------------------------------------------------ |
| label    | title of the tab                                                                     | string  | —               | —                                                                              |
| disabled | whether Tab is disabled                                                              | boolean | —               | false                                                                          |
| name     | identifier corresponding to the name of Tabs, representing the alias of the tab-pane | string  | —               | ordinal number of the tab-pane in the sequence, e.g. the first tab-pane is '1' |
| closable | whether Tab is closable                                                              | boolean | —               | false                                                                          |
| lazy     | whether Tab is lazily rendered                                                       | boolean | —               | false                                                                          |
