<!-- markdownlint-disable MD033 -->

# Layout

Quickly and easily create layouts with the basic 24-column.

## TODO

* [ ] ElRow `align` attribute
* [ ] ElRow `tag` attribute
* [ ] ElCol `tag` attribute
* [ ] Utility classes for hiding elements

## Basic layout

Create basic grid layout using columns.

<DocsDemo @class="demo-block" as |demo|>
    <demo.example @name="layout-basic-layout-demo.hbs">
        <ElRow>
            <ElCol @span=24><div class="grid-content bg-purple-dark"></div></ElCol>
            </ElRow>
        <ElRow>
            <ElCol @span=12><div class="grid-content bg-purple-dark"></div></ElCol>
            <ElCol @span=12><div class="grid-content bg-purple-dark"></div></ElCol>
        </ElRow>
        <ElRow>
            <ElCol @span=8><div class="grid-content bg-purple"></div></ElCol>
            <ElCol @span=8><div class="grid-content bg-purple-light"></div></ElCol>
            <ElCol @span=8><div class="grid-content bg-purple"></div></ElCol>
        </ElRow>
        <ElRow>
            <ElCol @span=6><div class="grid-content bg-purple"></div></ElCol>
            <ElCol @span=6><div class="grid-content bg-purple-light"></div></ElCol>
            <ElCol @span=6><div class="grid-content bg-purple"></div></ElCol>
            <ElCol @span=6><div class="grid-content bg-purple-light"></div></ElCol>
        </ElRow>
        <ElRow>
            <ElCol @span=4><div class="grid-content bg-purple"></div></ElCol>
            <ElCol @span=4><div class="grid-content bg-purple-light"></div></ElCol>
            <ElCol @span=4><div class="grid-content bg-purple"></div></ElCol>
            <ElCol @span=4><div class="grid-content bg-purple-light"></div></ElCol>
            <ElCol @span=4><div class="grid-content bg-purple"></div></ElCol>
            <ElCol @span=4><div class="grid-content bg-purple-light"></div></ElCol>
        </ElRow>
    </demo.example>
    <div class="description">
        With `row` and `col`, we can easily manipulate the layout using the `span` attribute.
    </div>
    <demo.snippet @name="layout-basic-layout-demo.hbs" />
</DocsDemo>

## Column spacing

Column spacing is supported.

<DocsDemo @class="demo-block" as |demo|>
    <demo.example @name="layout-column-spacing-demo.hbs">
        <ElRow @gutter=20 as |row|>
            <row.col @span=6><div class="grid-content bg-purple"></div></row.col>
            <row.col @span=6><div class="grid-content bg-purple"></div></row.col>
            <row.col @span=6><div class="grid-content bg-purple"></div></row.col>
            <row.col @span=6><div class="grid-content bg-purple"></div></row.col>
        </ElRow>
    </demo.example>
    <div class="description">
        Row provides `gutter` attribute to specify spacings between columns, and its default value is 0.
    </div>
    <demo.snippet @name="layout-column-spacing-demo.hbs" />
</DocsDemo>

## Hybrid layout

Form a more complex hybrid layout by combining the basic 1/24 columns.

<DocsDemo @class="demo-block" as |demo|>
    <demo.example @name="layout-hybrid-layout-demo.hbs">
        <ElRow @gutter=20 as |row|>
            <row.col @span=16><div class="grid-content bg-purple"></div></row.col>
            <row.col @span=8><div class="grid-content bg-purple"></div></row.col>
        </ElRow>
        <ElRow @gutter=20 as |row|>
            <row.col @span=8><div class="grid-content bg-purple"></div></row.col>
            <row.col @span=8><div class="grid-content bg-purple"></div></row.col>
            <row.col @span=4><div class="grid-content bg-purple"></div></row.col>
            <row.col @span=4><div class="grid-content bg-purple"></div></row.col>
        </ElRow>
        <ElRow @gutter=20 as |row|>
            <row.col @span=4><div class="grid-content bg-purple"></div></row.col>
            <row.col @span=16><div class="grid-content bg-purple"></div></row.col>
            <row.col @span=4><div class="grid-content bg-purple"></div></row.col>
        </ElRow>
    </demo.example>
    <demo.snippet @name="layout-hybrid-layout-demo.hbs" />
</DocsDemo>

## Column offset

You can specify column offsets.

<DocsDemo @class="demo-block" as |demo|>
    <demo.example @name="layout-column-offset-demo.hbs">
        <ElRow @gutter=20 as |row|>
            <row.col @span=6><div class="grid-content bg-purple"></div></row.col>
            <row.col @span=6 @offset=6><div class="grid-content bg-purple"></div></row.col>
        </ElRow>
        <ElRow @gutter=20 as |row|>
            <row.col @span=6 @offset=6><div class="grid-content bg-purple"></div></row.col>
            <row.col @span=6 @offset=6><div class="grid-content bg-purple"></div></row.col>
        </ElRow>
        <ElRow @gutter=20 as |row|>
            <row.col @span=12 @offset=6><div class="grid-content bg-purple"></div></row.col>
        </ElRow>
    </demo.example>
    <div class="description">
        You can specify the number of column offset by setting the value of `offset` attribute of Col.
    </div>
    <demo.snippet @name="layout-column-offset-demo.hbs" />
</DocsDemo>

## Alignment

Use the flex layout to make flexible alignment of columns.

<DocsDemo @class="demo-block" as |demo|>
    <demo.example @name="layout-alignment-demo.hbs">
        <ElRow @type="flex" class="row-bg">
            <ElCol @span=6><div class="grid-content bg-purple"></div></ElCol>
            <ElCol @span=6><div class="grid-content bg-purple-light"></div></ElCol>
            <ElCol @span=6><div class="grid-content bg-purple"></div></ElCol>
        </ElRow>
        <ElRow @type="flex" class="row-bg" @justify="center">
            <ElCol @span=6><div class="grid-content bg-purple"></div></ElCol>
            <ElCol @span=6><div class="grid-content bg-purple-light"></div></ElCol>
            <ElCol @span=6><div class="grid-content bg-purple"></div></ElCol>
        </ElRow>
        <ElRow @type="flex" class="row-bg" @justify="end">
            <ElCol @span=6><div class="grid-content bg-purple"></div></ElCol>
            <ElCol @span=6><div class="grid-content bg-purple-light"></div></ElCol>
            <ElCol @span=6><div class="grid-content bg-purple"></div></ElCol>
        </ElRow>
        <ElRow @type="flex" class="row-bg" @justify="space-between">
            <ElCol @span=6><div class="grid-content bg-purple"></div></ElCol>
            <ElCol @span=6><div class="grid-content bg-purple-light"></div></ElCol>
            <ElCol @span=6><div class="grid-content bg-purple"></div></ElCol>
        </ElRow>
        <ElRow @type="flex" class="row-bg" @justify="space-around">
            <ElCol @span=6><div class="grid-content bg-purple"></div></ElCol>
            <ElCol @span=6><div class="grid-content bg-purple-light"></div></ElCol>
            <ElCol @span=6><div class="grid-content bg-purple"></div></ElCol>
        </ElRow>
    </demo.example>
    <div class="description">
        You can enable flex layout by setting `type` attribute to 'flex', and define the layout of child elements by setting `justify` attribute with start, center, end, space-between or space-around.
    </div>
    <demo.snippet @name="layout-alignment-demo.hbs" />
</DocsDemo>

## Responsive Layout

Taking example by Bootstrap's responsive design, five breakpoints are preset: xs, sm, md, lg and xl.

<DocsDemo @class="demo-block" as |demo|>
    <demo.example @name="layout-responsive-layout-demo.hbs">
        <ElRow @gutter=10 as |row|>
            <row.col @xs=8 @sm=6 @md=4 @lg=3 @@xl=1><div class="grid-content bg-purple"></div></row.col>
            <row.col @xs=4 @sm=6 @md=8 @lg=9 @@xl=11><div class="grid-content bg-purple-light"></div></row.col>
            <row.col @xs=4 @sm=6 @md=8 @lg=9 @@xl=11><div class="grid-content bg-purple"></div></row.col>
            <row.col @xs=8 @sm=6 @md=4 @lg=3 @@xl=1><div class="grid-content bg-purple-light"></div></row.col>
        </ElRow>
    </demo.example>
    <demo.snippet @name="layout-responsive-layout-demo.hbs" />
</DocsDemo>

## Utility classes for hiding elements

Additionally, Element provides a series of classes for hiding elements under certain conditions. These classes can be added to any DOM elements or custom components. You need to import the following CSS file to use these classes:

    ```css
    @import 'element-ui/lib/theme-chalk/display.css';
    ```

The classes are:

* `hidden-xs-only` - hide when on extra small viewports only
* `hidden-sm-only` - hide when on small viewports and down
* `hidden-sm-and-down` - hide when on small viewports and down
* `hidden-sm-and-up` - hide when on small viewports and up
* `hidden-md-only` - hide when on medium viewports only
* `hidden-md-and-down` - hide when on medium viewports and down
* `hidden-md-and-up` - hide when on medium viewports and up
* `hidden-lg-only` - hide when on large viewports only
* `hidden-lg-and-down` - hide when on large viewports and down
* `hidden-lg-and-up` - hide when on large viewports and up
* `hidden-xl-only` - hide when on extra large viewports only

## Row Arguments

| Argument  | Description                                             | Type   | Accepted Values                             | Default |
| --------- | ------------------------------------------------------- | ------ | ------------------------------------------- | ------- |
| gutter    | grid spacing                                            | number | —                                           | 0       |
| type      | layout mode, you can use flex, works in modern browsers | string | —                                           | —       |
| justify   | horizontal alignment of flex layout                     | string | start/end/center/space-around/space-between | start   |
| align     | vertical alignment of flex layout                       | string | top/middle/bottom                           | top     |
| tag       | custom element tag                                      | string | \*                                          | div     |

## Col Arguments

| Argument  | Description                                       | Type                                      | Accepted Values | Default |
| --------- | ------------------------------------------------- | ----------------------------------------- | --------------- | ------- |
| span      | number of column the grid spans                   | number                                    | —               | 24      |
| offset    | number of spacing on the left side of the grid    | number                                    | —               | 0       |
| push      | number of columns that grid moves to the right    | number                                    | —               | 0       |
| pull      | number of columns that grid moves to the left     | number                                    | —               | 0       |
| xs        | \<768px Responsive columns or column props object | number/object (e.g. {span: 4, offset: 4}) | —               | —       |
| sm        | ≥768px Responsive columns or column props object  | number/object (e.g. {span: 4, offset: 4}) | —               | —       |
| md        | ≥992px Responsive columns or column props object  | number/object (e.g. {span: 4, offset: 4}) | —               | —       |
| lg        | ≥1200px Responsive columns or column props object | number/object (e.g. {span: 4, offset: 4}) | —               | —       |
| xl        | ≥1920px Responsive columns or column props object | number/object (e.g. {span: 4, offset: 4}) | —               | —       |
| tag       | custom element tag                                | string                                    | \*              | div     |
