<!-- markdownlint-disable MD033 -->
# Divider

The dividing line that separates the content.

## Basic usage

Divide the text of different paragraphs.

<DocsDemo @class="demo-block" as |demo|>
    <demo.example @name="divider-basic-usage-demo.hbs">
      <div>
        <span>I sit at my window this morning where the world like a passer-by stops for a moment, nods to me and goes.</span>
        <ElDivider />
        <span>There little thoughts are the rustle of leaves; they have their whisper of joy in my mind.</span>
      </div>
    </demo.example>
    <demo.snippet @name="divider-basic-usage-demo.hbs" />
</DocsDemo>

## Custom content

You can customize the content on the divider line.

<DocsDemo @class="demo-block" as |demo|>
    <demo.example @name="divider-custom-content-demo.hbs">
      <div>
        <span>What you are you do not see, what you see is your shadow. </span>
        <ElDivider @contentPosition="left">Rabindranath Tagore</ElDivider>
        <span>I cannot choose the best. The best chooses me.</span>
        <ElDivider><i class="el-icon-star-on"></i></ElDivider>
        <span>My wishes are fools, they shout across thy song, my Master. Let me but listen.</span>
        <ElDivider @contentPosition="right">Rabindranath Tagore</ElDivider>
      </div>
    </demo.example>
    <demo.snippet @name="divider-custom-content-demo.hbs" />
</DocsDemo>

## Vertical divider

<DocsDemo @class="demo-block" as |demo|>
    <demo.example @name="divider-vertical-divider-demo.hbs">
      <div>
        <span>Rain</span>
        <ElDivider @direction="vertical" />
        <span>Home</span>
        <ElDivider @direction="vertical" />
        <span>Grass</span>
      </div>
    </demo.example>
    <demo.snippet @name="divider-vertical-divider-demo.hbs" />
</DocsDemo>

## Arguments

| Argument        | Description                               | Type   | Accepted Values       | Default    |
| --------------- | ----------------------------------------- | ------ | --------------------- | ---------- |
| direction       | set divider's direction                   | string | horizontal / vertical | horizontal |
| contentPosition | customize the content on the divider line | string | left / right / center | center     |
