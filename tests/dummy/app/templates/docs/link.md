<!-- markdownlint-disable MD033 -->

# Link

## Basic

Basic text link

<DocsDemo @class="demo-block" as |demo|>
    <demo.example @name="link-basic-demo.hbs">
        <div>
            <ElLink @href="https://element.eleme.io" target="_blank">default</ElLink>
            <ElLink @type="primary">primary</ElLink>
            <ElLink @type="success">success</ElLink>
            <ElLink @type="warning">warning</ElLink>
            <ElLink @type="danger">danger</ElLink>
            <ElLink @type="info">info</ElLink>
        </div>
    </demo.example>
    <demo.snippet @name="link-basic-demo.hbs" />
</DocsDemo>

## Disabled

Disabled state of link

<DocsDemo @class="demo-block" as |demo|>
    <demo.example @name="link-disabled-demo.hbs">
        <div>
            <ElLink @disabled={{true}}>default</ElLink>
            <ElLink @type="primary" @disabled={{true}}>primary</ElLink>
            <ElLink @type="success" @disabled={{true}}>success</ElLink>
            <ElLink @type="warning" @disabled={{true}}>warning</ElLink>
            <ElLink @type="danger" @disabled={{true}}>danger</ElLink>
            <ElLink @type="info" @disabled={{true}}>info</ElLink>
        </div>
    </demo.example>
    <demo.snippet @name="link-disabled-demo.hbs" />
</DocsDemo>

## Underline

Underline of link

<DocsDemo @class="demo-block" as |demo|>
    <demo.example @name="link-underline-demo.hbs">
        <div>
            <ElLink @underline={{false}}>Without Underline</ElLink>
            <ElLink>With Underline</ElLink>
        </div>
    </demo.example>
    <demo.snippet @name="link-underline-demo.hbs" />
</DocsDemo>

## Icon

Link with icon

<DocsDemo @class="demo-block" as |demo|>
    <demo.example @name="icon-link-demo.hbs">
        <div>
            <ElLink @icon="edit">Edit</ElLink>
            <ElLink>Check<ElIcon @icon="view" class="el-icon--right" /></ElLink>
        </div>
    </demo.example>
    <demo.snippet @name="icon-link-demo.hbs" />
</DocsDemo>

## Arguments

| Argument  | Description                         | Type    | Options                                     | Default |
| --------- | ----------------------------------- | ------- | ------------------------------------------- | ------- |
| type      | type                                | string  | primary / success / warning / danger / info | default |
| underline | whether the component has underline | boolean | —                                           | true    |
| disabled  | whether the component is disabled   | boolean | —                                           | false   |
| href      | same as native hyperlink's href     | string  | —                                           | -       |
| icon      | class name of icon                  | string  | —                                           | -       |
