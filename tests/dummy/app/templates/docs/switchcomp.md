<!-- markdownlint-disable MD033 -->
# Switch

Switch is used for switching between two opposing states.

## TODO

* [ ] wrapper extended value types demo with `<ElTooltip>`;
* [ ] add `validateEvent` support;
* [ ] implement `focus` method.

## Basic usage

<DocsDemo @class="demo-block" as |demo|>
    <demo.example @name="switch-basic-usage-demo.hbs">
        <ElSwitch @value={{this.basicUsageValue1}} @change={{this.toggleBasicUsageValue1}} />
        <ElSwitch @value={{this.basicUsageValue2}} @activeColor="#13ce66" @inactiveColor="#ff4949" @change={{this.toggleBasicUsageValue2}} />
    </demo.example>
    <div class="description">
        Bind `value` to a Boolean typed variable. The `activeColor` and `inactiveColor` attribute decides the background color in two states.
    </div>
    <demo.snippet @name="switch-basic-usage-demo.hbs" />
    <demo.snippet @name="switch-basic-usage-demo.js" />
</DocsDemo>

## Text description

<DocsDemo @class="demo-block" as |demo|>
    <demo.example @name="switch-text-description-demo.hbs">
        <ElSwitch @value={{this.textDescriptionValue1}} @activeText="Pay by month" @inactiveText="Pay by year" @change={{this.toggleTextDescriptionValue1}} />
        <ElSwitch style="display: block" @value={{this.textDescriptionValue2}} @activeText="Pay by month" @inactiveText="Pay by year" @activeColor="#13ce66" @inactiveColor="#ff4949" @change={{this.toggleTextDescriptionValue2}} />
    </demo.example>
    <div class="description">
        You can add `activeText` and `inactiveText` attribute to show texts.
    </div>
    <demo.snippet @name="switch-text-description-demo.hbs" />
    <demo.snippet @name="switch-text-description-demo.js" />
</DocsDemo>

## Extended value types

<DocsDemo @class="demo-block" as |demo|>
    <demo.example @name="switch-extended-value-types-demo.hbs">
        <ElSwitch @value={{this.extendedValueTypesValue}} @activeValue={{100}} @inactiveValue={{0}} @activeColor="#13ce66" @inactiveColor="#ff4949" @change={{this.handleExtendedValueTypesValueChange}} />
    </demo.example>
    <div class="description">
        You can set `activeValue` and `inactiveValue` attributes. They both receive a `Boolean`, `String` or `Number` typed value.
    </div>
    <demo.snippet @name="switch-extended-value-types-demo.hbs" />
    <demo.snippet @name="switch-extended-value-types-demo.js" />
</DocsDemo>

## Disabled

<DocsDemo @class="demo-block" as |demo|>
    <demo.example @name="switch-disabled-demo.hbs">
        <ElSwitch @value={{this.disabledValue1}} @disabled={{true}}/>
        <ElSwitch @value={{this.disabledValue2}} @disabled={{true}}/>
    </demo.example>
    <div class="description">
        Adding the `disabled` attribute disables Switch.
    </div>
    <demo.snippet @name="switch-disabled-demo.hbs" />
    <demo.snippet @name="switch-disabled-demo.js" />
</DocsDemo>

## Arguments

| Argument          | Description                                                                 | Type                      | Accepted Values | Default |
| ----------------- | --------------------------------------------------------------------------- | ------------------------- | --------------- | ------- |
| value             | binding value                                                               | boolean / string / number | —               | —       |
| disabled          | whether Switch is disabled                                                  | boolean                   | —               | false   |
| width             | width of Switch                                                             | number                    | —               | 40      |
| activeIconClass   | class name of the icon displayed when in on state, overrides active-text    | string                    | —               | —       |
| inactiveIconClass | class name of the icon displayed when in off state, overrides inactive-text | string                    | —               | —       |
| activeText        | text displayed when in on state                                             | string                    | —               | —       |
| inactiveText      | text displayed when in off state                                            | string                    | —               | —       |
| activeValue       | switch value when in on state                                               | boolean / string / number | —               | true    |
| inactiveValue     | switch value when in off state                                              | boolean / string / number | —               | false   |
| activeColor       | background color when in on state                                           | string                    | —               | #409EFF |
| inactiveColor     | background color when in off state                                          | string                    | —               | #C0CCDA |
| name              | input name of Switch                                                        | string                    | —               | —       |
| validateEvent     | whether to trigger form validation                                          | boolean                   | -               | true    |

## Events

| Event Name | Description                 | Parameters           |
| ---------- | --------------------------- | -------------------- |
| change     | triggers when value changes | value after changing |

## Methods

| Method | Description                | Parameters |
| ------ | -------------------------- | ---------- |
| focus  | focus the Switch component | —          |
