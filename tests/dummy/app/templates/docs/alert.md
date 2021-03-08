<!-- markdownlint-disable MD033 -->

# Alert

Displays important alert messages.

## Basic usage

Alert components are non-overlay elements in the page that does not disappear automatically.

<DocsDemo @class="demo-block demo-alert" as |demo|>
    <demo.example @name="alert-basic-usage-demo.hbs">
      <ElAlert @title="success alert" @type="success" />
      <ElAlert @title="info alert" @type="info" />
      <ElAlert @title="warning alert" @type="warning" />
      <ElAlert @title="error alert" @type="error" />
    </demo.example>
    <div class="description">
      Alert provides 4 types of themes defined by `type`, whose default value is `info`.
    </div>
    <demo.snippet @name="alert-basic-usage-demo.hbs" />
</DocsDemo>

## Theme

Alert provide two different themes, light and dark.

<DocsDemo @class="demo-block demo-alert" as |demo|>
    <demo.example @name="alert-theme-demo.hbs">
      <ElAlert @title="success alert" @type="success" @effect="dark" />
      <ElAlert @title="info alert" @type="info" @effect="dark" />
      <ElAlert @title="warning alert" @type="warning" @effect="dark" />
      <ElAlert @title="error alert" @type="error" @effect="dark" />
    </demo.example>
    <div class="description">
      Set `effect` to change theme, default is `light`.
    </div>
    <demo.snippet @name="alert-theme-demo.hbs" />
</DocsDemo>

## Customizable close button

Customize the close button as texts or other symbols.

<DocsDemo @class="demo-block demo-alert" as |demo|>
    <demo.example @name="alert-customizable-close-button-demo.hbs">
      <ElAlert @title="unclosable alert" @type="success" @closable={{false}} />
      <ElAlert @title="customized close-text" @type="info" @closeText="Gotcha" />
      <ElAlert @title="alert with callback" @type="warning" @close={{this.customizableCloseButtonHello}} />
    </demo.example>
    <div class="description">
      Alert allows you to configure if it's closable. The close button text and closing callbacks are also customizable. `closable` attribute decides if the component can be closed or not. It accepts `boolean`, and the default is `true`. You can set `closeText` attribute to replace the default cross symbol as the close button. Be careful that close-text must be a string. `close` event fires when the component is closed.
    </div>
    <demo.snippet @name="alert-customizable-close-button-demo.hbs" />
    <demo.snippet @name="alert-customizable-close-button-demo.js" />
</DocsDemo>

## With icon

Displaying an icon improves readability.

<DocsDemo @class="demo-block demo-alert" as |demo|>
    <demo.example @name="alert-with-icon-demo.hbs">
      <ElAlert @title="success alert" @type="success" @showIcon={{true}} />
      <ElAlert @title="info alert" @type="info" @showIcon={{true}}  />
      <ElAlert @title="warning alert" @type="warning" @showIcon={{true}}  />
      <ElAlert @title="error alert" @type="error" @showIcon={{true}}  />
    </demo.example>
    <div class="description">
      Setting the `showIcon` attribute displays an icon that corresponds with the current Alert type.
    </div>
    <demo.snippet @name="alert-with-icon-demo.hbs" />
</DocsDemo>

## Centered text

Use the center attribute to center the text.

<DocsDemo @class="demo-block demo-alert" as |demo|>
    <demo.example @name="alert-centered-text-demo.hbs">
      <ElAlert @title="success alert" @type="success" @center={{true}} @showIcon={{true}} />
      <ElAlert @title="info alert" @type="info" @center={{true}} @showIcon={{true}}  />
      <ElAlert @title="warning alert" @type="warning" @center={{true}} @showIcon={{true}}  />
      <ElAlert @title="error alert" @type="error" @center={{true}} @showIcon={{true}}  />
    </demo.example>
    <demo.snippet @name="alert-centered-text-demo.hbs" />
</DocsDemo>

## With description

Description includes a message with more detailed information.

<DocsDemo @class="demo-block demo-alert" as |demo|>
    <demo.example @name="alert-with-description-demo.hbs">
      <ElAlert @title="with description" @type="success" @description="This is a description." />
    </demo.example>
    <div class="description">
      Besides the required `title` attribute, you can add a `description` attribute to help you describe the alert with more details. Description can only store text string, and it will word wrap automatically.
    </div>
    <demo.snippet @name="alert-with-description-demo.hbs" />
</DocsDemo>

## With icon and description

<DocsDemo @class="demo-block demo-alert" as |demo|>
    <demo.example @name="alert-with-icon-and-description-demo.hbs">
      <ElAlert @title="success alert" @type="success" @description="more text description" @showIcon={{true}} />
      <ElAlert @title="info alert" @type="info" @description="more text description" @showIcon={{true}}  />
      <ElAlert @title="warning alert" @type="warning" @description="more text description" @showIcon={{true}}  />
      <ElAlert @title="error alert" @type="error" @description="more text description" @showIcon={{true}}  />
    </demo.example>
    <div class="description">
      At last, this is an example with both icon and description.
    </div>
    <demo.snippet @name="alert-with-icon-and-description-demo.hbs" />
</DocsDemo>

## Arguments

| Argument    | Description                                                | Type    | Accepted Values            | Default |
| ----------- | ---------------------------------------------------------- | ------- | -------------------------- | ------- |
| title       | title                                                      | string  | —                          | —       |
| type        | Component type                                             | string  | success/warning/info/error | info    |
| description | Descriptive text. Can also be passed with the default slot | string  | —                          | —       |
| closable    | If closable or not                                         | boolean | —                          | true    |
| center      | Whether to center the text                                 | boolean | —                          | false   |
| closeText   | Customized close button text                               | string  | —                          | —       |
| showIcon    | If a type icon is displayed                                | boolean | —                          | false   |
| effect      | Choose theme                                               | string  | light/dark                 | light   |

## Events

| Event Name | Description                | Parameters |
| ---------- | -------------------------- | ---------- |
| close      | fires when alert is closed | —          |

## Blocks

| Name  | Description                |
| ----- | -------------------------- |
| —     | description                |
| title | content of the Alert title |
