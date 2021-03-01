<!-- markdownlint-disable MD033 -->
# Progress

Progress is used to show the progress of current operation, and inform the user the current status.

## Linear progress bar

<DocsDemo @class="demo-block demo-progress" as |demo|>
    <demo.example @name="progress-linear-progress-bar-demo.hbs">
      <ElProgress @percentage={{50}} />
      <ElProgress @percentage={{100}} @format={{this.formatLinearProgressBarText}}/>
      <ElProgress @percentage={{100}} @status="success" />
      <ElProgress @percentage={{100}} @status="warning" />
      <ElProgress @percentage={{50}} @status="exception" />
    </demo.example>
    <div class="description">
        Use `percentage` attribute to set the percentage. It's **required** and must be between `0-100`. You can custom text format by setting `format`.
    </div>
    <demo.snippet @name="progress-linear-progress-bar-demo.hbs" />
    <demo.snippet @name="progress-linear-progress-bar-demo.js" />
</DocsDemo>

## Internal percentage

In this case the percentage takes no additional space.

<DocsDemo @class="demo-block demo-progress" as |demo|>
    <demo.example @name="progress-internal-percentage-demo.hbs">
      <ElProgress @textInline={{true}} @strokeWidth={{26}} @percentage={{70}} />
      <ElProgress @textInline={{true}} @strokeWidth={{24}} @percentage={{100}} @status="success"/>
      <ElProgress @textInline={{true}} @strokeWidth={{22}} @percentage={{80}} @status="warning" />
      <ElProgress @textInline={{true}} @strokeWidth={{22}} @percentage={{50}} @status="exception" />
    </demo.example>
    <div class="description">
        `strokeWidth` attribute decides the `width` of progress bar, and use `textInside` attribute to put description inside the progress bar.
    </div>
    <demo.snippet @name="progress-internal-percentage-demo.hbs" />
</DocsDemo>

## Custom color

You can use `color` attr to set the progress bar color. it accepts color string, function, or array.

<DocsDemo @class="demo-block demo-progress" as |demo|>
    <demo.example @name="progress-custom-color-demo.hbs">
      <ElProgress @percentage={{this.customColorPercentage}} @color={{this.customColor}}/>
      <ElProgress @percentage={{this.customColorPercentage}} @color={{this.customColorMethod}} />
      <ElProgress @percentage={{this.customColorPercentage}} @color={{this.customColors}} />
      <div>
        <ElButtonGroup>
          <ElButton @icon="minus" @click={{this.customColorDecrease}} />
          <ElButton @icon="plus" @click={{this.customColorIncrease}} />
        </ElButtonGroup>
      </div>
    </demo.example>
    <demo.snippet @name="progress-custom-color-demo.hbs" />
</DocsDemo>

## Circular progress bar

<DocsDemo @class="demo-block demo-progress" as |demo|>
    <demo.example @name="progress-circular-progress-bar-demo.hbs">
      <ElProgress @type="circle" @percentage={{0}} />
      <ElProgress @type="circle" @percentage={{25}} />
      <ElProgress @type="circle" @percentage={{100}} @status="success" />
      <ElProgress @type="circle" @percentage={{70}} @status="warning" />
      <ElProgress @type="circle" @percentage={{50}} @status="exception" />
    </demo.example>
    <div class="description">
      You can specify `type` attribute to `circle` to use circular progress bar, and use `width` attribute to change the size of circle.
    </div>
    <demo.snippet @name="progress-circular-progress-bar-demo.hbs" />
</DocsDemo>

## Dashboard progress bar

You also can specify `type` attribute to dashboard to use dashboard progress bar.

<DocsDemo @class="demo-block demo-progress" as |demo|>
    <demo.example @name="progress-dashboard-progress-bar-demo.hbs">
      <ElProgress @type="dashboard" @percentage={{this.dashboardProgressBarPercentage}} @color={{this.dashboardProgressBarColors}} />
      <div>
        <ElButtonGroup>
          <ElButton @icon="minus" @click={{this.dashboardProgressBarDecrease}} />
          <ElButton @icon="plus" @click={{this.dashboardProgressBarIncrease}} />
        </ElButtonGroup>
      </div>
    </demo.example>
    <demo.snippet @name="progress-dashboard-progress-bar-demo.hbs" />
    <demo.snippet @name="progress-dashboard-progress-bar-demo.js" />
</DocsDemo>

## Arguments

| Argument      | Description                                                                         | Type                  | Accepted Values           | Default |
| ------------- | ----------------------------------------------------------------------------------- | --------------------- | ------------------------- | ------- |
| percentage    | percentage, required                                                                | number                | 0-100                     | 0       |
| type          | the type of progress bar                                                            | string                | line/circle/dashboard     | line    |
| strokeWidth   | the width of progress bar                                                           | number                | —                         | 6       |
| textInside    | whether to place the percentage inside progress bar, only works when type is 'line' | boolean               | —                         | false   |
| status        | the current status of progress bar                                                  | string                | success/exception/warning | —       |
| color         | background color of progress bar. Overrides status prop                             | string/function/array | —                         | ''      |
| width         | the canvas width of circle progress bar                                             | number                | —                         | 126     |
| showText      | whether to show percentage                                                          | boolean               | —                         | true    |
| strokeLinecap | circle/dashboard type shape at the end path                                         | string                | butt/round/square         | round   |
| format        | custom text format                                                                  | function(percentage)  | —                         |
