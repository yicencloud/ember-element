<!-- markdownlint-disable MD033 -->

# Backtop

A button to back to top

## Basic usage

Scroll down to see the bottom-right button.

<DocsDemo @class="demo-block demo-backtop" as |demo|>
    <demo.example @name="backtop-basic-usage-demo.hbs">
      <ElBacktop />
    </demo.example>
    <div class="description">
      Scroll down to see the bottom-right button.
    </div>
    <demo.snippet @name="backtop-basic-usage-demo.hbs" />
</DocsDemo>

## Customizations

<DocsDemo @class="demo-block demo-backtop" as |demo|>
    <demo.example @name="backtop-customizations-demo.hbs">
      <ElBacktop @bottom={{100}}>
        <div
          style="{
            height: 100%;
            width: 100%;
            background-color: #f2f5f6;
            box-shadow: 0 0 6px rgba(0,0,0, .12);
            text-align: center;
            line-height: 40px;
            color: #1989fa;
          }"
        >
          UP
        </div>
      </ElBacktop>
    </demo.example>
    <div class="description">
      Scroll down to see the bottom-right button.
    </div>
    <demo.snippet @name="backtop-customizations-demo.hbs" />
</DocsDemo>

## Arguments

| Argument         | Description                                                         | Type   | Accepted Values | Default |
| ---------------- | ------------------------------------------------------------------- | ------ | --------------- | ------- |
| target           | the target to trigger scroll                                        | string |                 |
| visibilityHeight | the button will not show until the scroll height reaches this value | number |                 | 200     |
| right            | right distance                                                      | number |                 | 40      |
| bottom           | bottom distance                                                     | number |                 | 40      |

## Events

| Event Name | Description         | Parameters  |
| ---------- | ------------------- | ----------- |
| click      | triggers when click | click event |
