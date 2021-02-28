<!-- markdownlint-disable MD033 -->

# Rate

Used for rating.

## TODO

* [ ] implements `allowHalf`.

## Basic usage

<DocsDemo @class="demo-block demo-rate" as |demo|>
    <demo.example @name="rate-basic-usage-demo.hbs">
        <div class="block">
            <span class="demonstration">Default</span>
            <ElRate @value={{this.basicUsageValue1}} />
        </div>
        <div class="block">
            <span class="demonstration">Color for different levels</span>
            <ElRate @value={{this.basicUsageValue2}} @colors={{this.basicUsageColors}} />
        </div>
    </demo.example>
    <div class="description">
        Rate divides rating scores into several levels and these levels can be distinguished by using different background colors. By default background colors are the same, but you can assign them an array with three element to reflect three levels using the `colors` attribute, and their two thresholds can be defined by `lowThreshold` and `highThreshold`, or you can assign them with a object which key is the threshold between two levels and value is the corresponding color.
    </div>
    <demo.snippet @name="rate-basic-usage-demo.hbs" />
    <demo.snippet @name="rate-basic-usage-demo.js" />
</DocsDemo>

## With text

Using text to indicate rating score

<DocsDemo @class="demo-block demo-rate" as |demo|>
    <demo.example @name="rate-with-text-demo.hbs">
        <ElRate @value={{this.withTextValue}} @texts={{this.withTextTexts}} @showText={{true}} />
    </demo.example>
    <div class="description">
        Add attribute `showText` to display text at the right of Rate. You can assign `texts` for different scores using `texts`. `texts` is an array whose length should be equal to the max score `max`.
    </div>
    <demo.snippet @name="rate-with-text-demo.hbs" />
    <demo.snippet @name="rate-with-text-demo.js" />
</DocsDemo>

## More icons

You can use different icons to distinguish different rate components.

<DocsDemo @class="demo-block demo-rate" as |demo|>
    <demo.example @name="rate-more-icons-demo.hbs">
        <ElRate @value={{this.moreIconsValue}} @iconClasses={{this.moreIconsIconClasses}} @voidIconClass={{this.moreIconsVoidIconClass}} @colors={{this.moreIconsColors}} />
    </demo.example>
    <div class="description">
        You can customize icons by passing `iconClasses` an array with three elements or a object which key is the threshold between two levels and value is the corresponding icon class. In this example, we also use `voidIconClass` to set the icon if it is unselected.
    </div>
    <demo.snippet @name="rate-more-icons-demo.hbs" />
    <demo.snippet @name="rate-more-icons-demo.js" />
</DocsDemo>

## Read-only

Read-only Rate is for displaying rating score. Half star is supported.

<DocsDemo @class="demo-block demo-rate" as |demo|>
    <demo.example @name="rate-read-only-demo.hbs">
        <ElRate @value={{this.readOnlyValue}} @disabled={{true}} @showScore={{true}} @textColor="#ff9900" @scoreTemplate="{value} points" />
    </demo.example>
    <div class="description">
        Use attribute `disabled` to make the component read-only. Add `showScore` to display the rating score at the right side. Additionally, you can use attribute `scoreTemplate` to provide a score template. It must contain `{value}`, and `{value}` will be replaced with the rating score.
    </div>
    <demo.snippet @name="rate-read-only-demo.hbs" />
    <demo.snippet @name="rate-read-only-demo.js" />
</DocsDemo>

## Arguments

| Argument              | Description                                                                                                                                                                                                                     | Type         | Accepted Values | Default                                                  |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | --------------- | -------------------------------------------------------- |
| value                 | binding value                                                                                                                                                                                                                   | number       | —               | 0                                                        |
| max                   | max rating score                                                                                                                                                                                                                | number       | —               | 5                                                        |
| disabled              | whether Rate is read-only                                                                                                                                                                                                       | boolean      | —               | false                                                    |
| allowHalf             | whether picking half start is allowed                                                                                                                                                                                           | boolean      | —               | false                                                    |
| lowThreshold          | threshold value between low and medium level. The value itself will be included in low level                                                                                                                                    | number       | —               | 2                                                        |
| highThreshold         | threshold value between medium and high level. The value itself will be included in high level                                                                                                                                  | number       | —               | 4                                                        |
| colors                | colors for icons. If array, it should have 3 elements, each of which corresponds with a score level, else if object, the key should be threshold value between two levels, and the value should be corresponding color          | array/object | —               | ['#F7BA2A', '#F7BA2A', '#F7BA2A']                        |
| voidColor             | color of unselected icons                                                                                                                                                                                                       | string       | —               | #C6D1DE                                                  |
| disabledVoidColor     | color of unselected read-only icons                                                                                                                                                                                             | string       | —               | #EFF2F7                                                  |
| iconClasses           | class names of icons. If array, ot should have 3 elements, each of which corresponds with a score level, else if object, the key should be threshold value between two levels, and the value should be corresponding icon class | array/object | —               | ['el-icon-star-on', 'el-icon-star-on','el-icon-star-on'] |
| voidIconClass         | class name of unselected icons                                                                                                                                                                                                  | string       | —               | el-icon-star-off                                         |
| disabledVoidIconClass | class name of unselected read-only icons                                                                                                                                                                                        | string       | —               | el-icon-star-on                                          |
| showText              | whether to display texts                                                                                                                                                                                                        | boolean      | —               | false                                                    |
| showScore             | whether to display current score. showScore and showText cannot be true at the same time                                                                                                                                        | boolean      | —               | false                                                    |
| textColor             | color of texts                                                                                                                                                                                                                  | string       | —               | #1F2D3D                                                  |
| texts                 | text array                                                                                                                                                                                                                      | array        | —               | ['极差', '失望', '一般', '满意', '惊喜']                 |
| scoreTemplate         | score template                                                                                                                                                                                                                  | string       | —               | {value}                                                  |

## Events

| Event Name | Description                         | Parameters           |
| ---------- | ----------------------------------- | -------------------- |
| change     | Triggers when rate value is changed | value after changing |
