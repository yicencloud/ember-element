<!-- markdownlint-disable MD033 -->

# Container

Container components for scaffolding basic structure of the page:

`<ElContainer>`: wrapper container. When nested with a `<ElHeader>` or `<ElFooter>`, all its child elements will be vertically arranged. Otherwise horizontally.

`<ElHeader>`: container for headers.

`<ElAside>`: container for side sections (usually a side nav).

`<ElMain>`: container for main sections.

`<ElFooter>`: container for footers.

> These components use flex for layout, so please make sure your browser supports it. Besides, `<ElContainer>`'s direct child elements have to be one or more of the latter four components. And father element of the latter four components must be a `<ElContainer>`.

## TODO

* [ ] implement the example

## Common layouts

<DocsDemo @class="demo-block" as |demo|>
    <demo.example @name="container-common-layouts-demo.hbs">
        <ElContainer>
            <ElHeader>Header</ElHeader>
            <ElMain>Main</ElMain>
        </ElContainer>
        <ElContainer>
            <ElHeader>Header</ElHeader>
            <ElMain>Main</ElMain>
            <ElFooter>Footer</ElFooter>
        </ElContainer>
        <ElContainer>
            <ElAside @width="200px">Aside</ElAside>
            <ElMain>Main</ElMain>
        </ElContainer>
        <ElContainer>
            <ElHeader>Header</ElHeader>
            <ElContainer>
                <ElAside @width="200px">Aside</ElAside>
                <ElMain>Main</ElMain>
            </ElContainer>
        </ElContainer>
        <ElContainer>
            <ElHeader>Header</ElHeader>
            <ElContainer>
                <ElAside @width="200px">Aside</ElAside>
                <ElContainer>
                    <ElMain>Main</ElMain>
                    <ElFooter>Footer</ElFooter>
                </ElContainer>
            </ElContainer>
        </ElContainer>
        <ElContainer>
            <ElAside @width="200px">Aside</ElAside>
            <ElContainer>
                <ElHeader>Header</ElHeader>
                <ElMain>Main</ElMain>
            </ElContainer>
        </ElContainer>
        <ElContainer>
            <ElAside @width="200px">Aside</ElAside>
            <ElContainer>
                <ElHeader>Header</ElHeader>
                <ElMain>Main</ElMain>
                <ElFooter>Footer</ElFooter>
            </ElContainer>
        </ElContainer>
    </demo.example>
    <demo.snippet @name="container-common-layouts-demo.hbs" />
</DocsDemo>

## Example

[TODO]

## Container Arguments

| Argument  | Description                         | Type   | Accepted Values       | Default                                                                |
| --------- | ----------------------------------- | ------ | --------------------- | ---------------------------------------------------------------------- |
| direction | layout direction for child elements | string | horizontal / vertical | vertical when nested with el-header or el-footer; horizontal otherwise |

## Header Arguments

| Argument  | Description          | Type   | Accepted Values | Default |
| --------- | -------------------- | ------ | --------------- | ------- |
| height    | height of the header | string | —               | 60px    |

## Aside Arguments

| Argument  | Description               | Type   | Accepted Values | Default |
| --------- | ------------------------- | ------ | --------------- | ------- |
| width     | width of the side section | string | —               | 300px   |

## Footer Arguments

| Argument  | Description          | Type   | Accepted Values | Default |
| --------- | -------------------- | ------ | --------------- | ------- |
| height    | height of the footer | string | —               | 60px    |
