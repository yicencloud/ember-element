<!-- markdownlint-disable MD033 -->
# Tag

Used for marking and selection.

## TODO

* [ ] implements add a dynamical tag;
* [ ] implements transition.

## Basic usage

<DocsDemo @class="demo-block" as |demo|>
    <demo.example @name="tag-basic-usage-demo.hbs">
      <ElTag>Tag 1</ElTag>
      <ElTag @type="success">Tag 2</ElTag>
      <ElTag @type="info">Tag 3</ElTag>
      <ElTag @type="warning">Tag 4</ElTag>
      <ElTag @type="danger">Tag 5</ElTag>
    </demo.example>
    <div class="description">
        Use the `type` attribute to define Tag's type. In addition, the `color` attribute can be used to set the background color of the Tag.
    </div>
    <demo.snippet @name="tag-basic-usage-demo.hbs" />
</DocsDemo>

## Removable Tag

<DocsDemo @class="demo-block" as |demo|>
    <demo.example @name="tag-removable-tag-demo.hbs">
      {{#each this.removableTags as |tag|}}
        <ElTag @type={{tag.type}} @closable={{true}}>{{tag.name}}</ElTag>
      {{/each}}
    </demo.example>
    <div class="description">
        `closable` attribute can be used to define a removable tag. It accepts a `Boolean`. By default the removal of Tag has a fading animation. If you don't want to use it, you can set the `disableTransitions` attribute, which accepts a `Boolean`, to `true`. `close` event triggers when Tag is removed.
    </div>
    <demo.snippet @name="tag-removable-tag-demo.hbs" />
    <demo.snippet @name="tag-removable-tag-demo.js" />
</DocsDemo>

## Edit Dynamically

You can use the `close` event to add and remove tag dynamically.

<DocsDemo @class="demo-block" as |demo|>
    <demo.example @name="tag-edit-dynamically-demo.hbs">
      {{#each this.editDynamicallyTags as |tag|}}
        <ElTag @tag={{tag}} @closable={{true}} @close={{this.handleEditDynamicallyClose}}>{{tag}}</ElTag>
      {{/each}}
      {{#if this.editDynamicallyInputVisible}}
        <ElInput class="input-new-tag" @value={{this.editDynamicallyInputValue}} @size="mini" />
      {{else}}
        <ElButton class="button-new-tag" @size="small" @click={{this.handleEditDynamicallyShowInput}}>+ New Tag</ElButton>
      {{/if}}
    </demo.example>
    <demo.snippet @name="tag-edit-dynamically-demo.hbs" />
    <demo.snippet @name="tag-edit-dynamically-demo.js" />
</DocsDemo>

## Sizes

Besides default size, Tag component provides three additional sizes for you to choose among different scenarios.

<DocsDemo @class="demo-block" as |demo|>
    <demo.example @name="tag-sizes-demo.hbs">
      <ElTag>Default</ElTag>
      <ElTag @size="medium">Medium</ElTag>
      <ElTag @size="small">Small</ElTag>
      <ElTag @size="mini">Mini</ElTag>
    </demo.example>
    <div class="description">
      Use attribute `size` to set additional sizes with `medium`, `small` or `mini`.
    </div>
    <demo.snippet @name="tag-sizes-demo.hbs" />
</DocsDemo>

## Theme

Tag provide three different themes: `dark`, `light` and `plain`

<DocsDemo @class="demo-block" as |demo|>
    <demo.example @name="tag-theme-demo.hbs">
      <div class="tag-group">
        <span class="tag-group__title">Dark</span>
        {{#each this.themeTags as |tag|}}
          <ElTag @type={{tag.type}} @effect="dark">{{tag.label}}</ElTag>
        {{/each}}
      </div>
      <div class="tag-group">
        <span class="tag-group__title">Plain</span>
        {{#each this.themeTags as |tag|}}
          <ElTag @type={{tag.type}} @effect="plain">{{tag.label}}</ElTag>
        {{/each}}
      </div>
    </demo.example>
    <div class="description">
      Using `effect` to change, default is `light`
    </div>
    <demo.snippet @name="tag-theme-demo.hbs" />
</DocsDemo>

## Arguments

| Argument           | Description                          | Type    | Accepted Values             | Default |
| ------------------ | ------------------------------------ | ------- | --------------------------- | ------- |
| type               | component type                       | string  | success/info/warning/danger | —       |
| closable           | whether Tag can be removed           | boolean | —                           | false   |
| disableTransitions | whether to disable animations        | boolean | —                           | false   |
| hit                | whether Tag has a highlighted border | boolean | —                           | false   |
| color              | background color of the Tag          | string  | —                           | —       |
| size               | tag size                             | string  | medium / small / mini       | —       |
| effect             | component theme                      | string  | dark / light / plain        | light   |

## Events

| Event Name | Description                  | Parameters |
| ---------- | ---------------------------- | ---------- |
| click      | triggers when Tag is clicked | —          |
| close      | triggers when Tag is removed | —          |
