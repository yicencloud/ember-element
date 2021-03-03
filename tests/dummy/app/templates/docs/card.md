<!-- markdownlint-disable MD033 -->
# Card

Integrate information in a card container.

## Basic usage

Card includes title, content and operations.

<DocsDemo @class="demo-block" as |demo|>
    <demo.example @name="card-basic-usage-demo.hbs">
      <ElCard class="box-card">
        <:header>
          <div class="clearfix">
            <span>Card name</span>
            <ElButton style="float: right; padding: 3px 0" @type="text">Operation button</ElButton>
          </div>
        </:header>
        <:default>
          {{#each (range 1 4 true) as |i|}}
            <div class="text item">List item {{i}}</div>
          {{/each}}
        </:default>
      </ElCard>
    </demo.example>
    <div class="description">
      Card is made up of `header` and `body`. `header` is optional, and its content distribution depends on a named slot.
    </div>
    <demo.snippet @name="card-basic-usage-demo.hbs" />
</DocsDemo>

## Simple card

The header part can be omitted.

<DocsDemo @class="demo-block" as |demo|>
    <demo.example @name="card-simple-card-demo.hbs">
      <ElCard class="box-card">
        {{#each (range 1 4 true) as |i|}}
          <div class="text item">List item {{i}}</div>
        {{/each}}
      </ElCard>
    </demo.example>
    <demo.snippet @name="card-simple-card-demo.hbs" />
</DocsDemo>

## With images

Display richer content by adding some configs.

<DocsDemo @class="demo-block" as |demo|>
    <demo.example @name="card-with-images-demo.hbs">
      <ElRow>
        {{#each (range 1 2 true) as |i index|}}
        <ElCol @span={{8}} @offset={{if (gt index 0) 2 0}}>
          <ElCard @bodyStyle={{this.withImagesBodyStyle}}>
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
            <div style="padding: 14px;">
              <span>Yummy hamburger</span>
              <div class="bottom clearfix">
                <time class="time">{{this.withImagesCurrentDate}}</time>
                <ElButton @type="text" class="button">Operating</ElButton>
              </div>
            </div>
          </ElCard>
        </ElCol>
        {{/each}}
      </ElRow>
    </demo.example>
    <div class="description">
      The `bodyStyle` attribute defines CSS style of custom `body`. This example also uses `<Row.Col>` for layout.
    </div>
    <demo.snippet @name="card-with-images-demo.hbs" />
    <demo.snippet @name="card-with-images-demo.js" />
</DocsDemo>

## Shadow

You can define when to show the card shadows

<DocsDemo @class="demo-block" as |demo|>
    <demo.example @name="card-shadow-demo.hbs">
      <ElRow @gutter=12 as |Row|>
        <Row.Col @span=8>
          <ElCard @shadow="always">
            Always
          </ElCard>
        </Row.Col>
        <Row.Col @span=8>
          <ElCard @shadow="hover">
            Hover
          </ElCard>
        </Row.Col>
        <Row.Col @span=8>
          <ElCard @shadow="never">
            Never
          </ElCard>
        </Row.Col>
      </ElRow>
    </demo.example>
    <div class="description">
      The `shadow` attribute determines when the card shadows are displayed. It can be `always`, `hover` or `never`.
    </div>
    <demo.snippet @name="card-shadow-demo.hbs" />
</DocsDemo>

## Arguments

| Argument   | Description                                                 | Type   | Accepted Values        | Default             |
| ---------- | ----------------------------------------------------------- | ------ | ---------------------- | ------------------- |
| header     | title of the card. also accepts a DOM passed by slot#header | string | —                      | —                   |
| bodyStyle | CSS style of body                                           | object | —                      | { padding: '20px' } |
| shadow     | when to show card shadows                                   | string | always / hover / never | always              |
