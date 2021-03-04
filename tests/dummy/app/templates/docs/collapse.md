<!-- markdownlint-disable MD033 -->

# Collapse

Use Collapse to store contents.

## TODO

* [ ] Add animation.

## Basic usage

<DocsDemo @class="demo-block" as |demo|>
    <demo.example @name="collapse-basic-usage-demo.hbs">
      <ElCollapse @value={{this.basicUsageActiveNames}} @change={{this.handleBasicUsageChange}} as |Collapse|>
        <Collapse.Item @title="Consistency" @name="1">
          <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
          <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>
        </Collapse.Item>
        <Collapse.Item @title="Feedback" @name="2">
          <div>Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;</div>
          <div>Visual feedback: reflect current state by updating or rearranging elements of the page.</div>
        </Collapse.Item>
        <Collapse.Item @title="Efficiency" @name="3">
          <div>Simplify the process: keep operating process simple and intuitive;</div>
          <div>Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;</div>
          <div>Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.</div>
        </Collapse.Item>
        <Collapse.Item @title="Controllability" @name="4">
          <div>Decision making: giving advices about operations is acceptable, but do not make decisions for the users;</div>
          <div>Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation.</div>
        </Collapse.Item>
      </ElCollapse>
    </demo.example>
    <demo.snippet @name="collapse-basic-usage-demo.hbs" />
    <demo.snippet @name="collapse-basic-usage-demo.js" />
</DocsDemo>

## Accordion

In accordion mode, only one panel can be expanded at once
You can expand multiple panels

<DocsDemo @class="demo-block" as |demo|>
    <demo.example @name="collapse-accordion-demo.hbs">
      <ElCollapse @value={{this.accordionActiveName}} @accordion={{true}} @change={{this.handleAccordionChange}} as |Collapse|>
        <Collapse.Item @title="Consistency" @name="1">
          <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
          <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>
        </Collapse.Item>
        <Collapse.Item @title="Feedback" @name="2">
          <div>Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;</div>
          <div>Visual feedback: reflect current state by updating or rearranging elements of the page.</div>
        </Collapse.Item>
        <Collapse.Item @title="Efficiency" @name="3">
          <div>Simplify the process: keep operating process simple and intuitive;</div>
          <div>Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;</div>
          <div>Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.</div>
        </Collapse.Item>
        <Collapse.Item @title="Controllability" @name="4">
          <div>Decision making: giving advices about operations is acceptable, but do not make decisions for the users;</div>
          <div>Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation.</div>
        </Collapse.Item>
      </ElCollapse>
    </demo.example>
    <div class="description">
      Activate accordion mode using the `accordion` attribute.
    </div>
    <demo.snippet @name="collapse-accordion-demo.hbs" />
    <demo.snippet @name="collapse-accordion-demo.js" />
</DocsDemo>

## Custom title

Besides using the `title` attribute, you can customize panel title with named slots, which makes adding custom content, e.g. icons, possible.

<DocsDemo @class="demo-block" as |demo|>
    <demo.example @name="collapse-custom-title-demo.hbs">
      <ElCollapse @value={{this.customTitleActiveName}} @accordion={{true}} @change={{this.handleCustomTitleChange}} as |Collapse|>
        <Collapse.Item @name="1">
          <:title>
            Consistency<i class="header-icon el-icon-info"></i>
          </:title>
          <:default>
            <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
            <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>
          </:default>
        </Collapse.Item>
        <Collapse.Item @title="Feedback" @name="2">
          <div>Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;</div>
          <div>Visual feedback: reflect current state by updating or rearranging elements of the page.</div>
        </Collapse.Item>
        <Collapse.Item @title="Efficiency" @name="3">
          <div>Simplify the process: keep operating process simple and intuitive;</div>
          <div>Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;</div>
          <div>Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.</div>
        </Collapse.Item>
        <Collapse.Item @title="Controllability" @name="4">
          <div>Decision making: giving advices about operations is acceptable, but do not make decisions for the users;</div>
          <div>Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation.</div>
        </Collapse.Item>
      </ElCollapse>
    </demo.example>
    <div class="description">
      Activate accordion mode using the `accordion` attribute.
    </div>
    <demo.snippet @name="collapse-custom-title-demo.hbs" />
    <demo.snippet @name="collapse-custom-title-demo.js" />
</DocsDemo>

## Collapse Arguments

| Argument  | Description                        | Type                                                 | Accepted Values | Default |
| --------- | ---------------------------------- | ---------------------------------------------------- | --------------- | ------- |
| value     | currently active panel             | string (accordion mode) / array (non-accordion mode) | —               | —       |
| accordion | whether to activate accordion mode | boolean                                              | —               | false   |

## Collapse Events

| Event Name | Description                        | Parameters                                                          |
| ---------- | ---------------------------------- | ------------------------------------------------------------------- |
| change     | triggers when active panels change | (activeNames: array (non-accordion mode) / string (accordion mode)) |

## Collapse Item Arguments

| Argument | Description                        | Type          | Accepted Values | Default |
| -------- | ---------------------------------- | ------------- | --------------- | ------- |
| name     | unique identification of the panel | string/number | —               | —       |
| title    | title of the panel                 | string        | —               | —       |
| disabled | disable the collapse item          | boolean       | —               | —       |
