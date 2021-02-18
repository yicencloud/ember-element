<!-- markdownlint-disable MD033 -->

# Radio

Single selection among multiple options.

## Basic usage

Radio should not have too many options. Otherwise, use the Select component instead.

<DocsDemo @class="demo-block" as |demo|>
    <demo.example @name="radio-basic-usage-demo.hbs">
        <ElRadio @value={{this.radio}} @label="1" @onClick={{this.changeRadio}}>Option A</ElRadio>
        <ElRadio @value={{this.radio}} @label="2" @onClick={{this.changeRadio}}>Option B</ElRadio>
   </demo.example>
    <div class="description">
        Creating a radio component is easy, you just need to bind a variable to Radio's `value`. It equals to the value of `label` of the chosen radio. The type of `label` is `String`, `Number` or `Boolean`.
        Radio will trigger an `onClick` event and pass `label` as the parameter for updating `value`.
    </div>
    <demo.snippet @name="radio-basic-usage-demo.hbs" />
    <demo.snippet @name="radio-basic-usage-demo.js" />
</DocsDemo>

## Disabled

disabled attribute is used to disable the radio.

<DocsDemo @class="demo-block" as |demo|>
    <demo.example @name="radio-disabled-demo.hbs">
        <ElRadio @disabled={{true}} @value={{this.disabledRadio}} @label="disabled">Option A</ElRadio>
        <ElRadio @disabled={{true}} @value={{this.disabledRadio}} @label="selected and disabled">Option B</ElRadio>
   </demo.example>
    <div class="description">
        You just need to add the disabled attribute.
    </div>
    <demo.snippet @name="radio-disabled-demo.hbs" />
    <demo.snippet @name="radio-disabled-demo.js" />
</DocsDemo>

## Radio button group

Suitable for choosing from some mutually exclusive options.

<DocsDemo @class="demo-block" as |demo|>
    <demo.example @name="radio-button-group-demo.hbs">
        <ElRadioGroup @value={{this.groupRadio}} @onChange={{this.changeGroupRadio}} as |group|>
            <group.radio @label="3">Option A</group.radio>
            <group.radio @label="6">Option B</group.radio>
            <group.radio @label="9">Option C</group.radio>
        </ElRadioGroup>
   </demo.example>
    <div class="description">
        Combine `<ElRadioGroup>` with `ElRadio` to display a radio group. Bind a variable with `value` of `ElRadioGroup` element and set `label` value in `ElRadio`. It also provides change event with the current value as its parameter.
    </div>
    <demo.snippet @name="radio-button-group-demo.hbs" />
    <demo.snippet @name="radio-button-group-demo.js" />
</DocsDemo>

## Button style

Radio with button styles.

<DocsDemo @class="demo-block" as |demo|>
    <demo.example @name="radio-button-styles-demo.hbs">
        <ElRadioGroup @value={{this.buttonStylesRadio1}} @onChange={{this.changeButtonStylesRadio1}} @textColor="#F56C6C" @fill="#fbc4c4" as |group|>
            <group.radioButton @label="New York">New York</group.radioButton>
            <group.radioButton @label="Washington">Washington</group.radioButton>
            <group.radioButton @label="Los Angeles">Los Angeles</group.radioButton>
            <group.radioButton @label="Chicago">Chicago</group.radioButton>
        </ElRadioGroup>
        <div style="margin-top: 20px">
            <ElRadioGroup @size="medium" @value={{this.buttonStylesRadio2}} @onChange={{this.changeButtonStylesRadio2}} as |group|>
                <group.radioButton @label="New York">New York</group.radioButton>
                <group.radioButton @label="Washington">Washington</group.radioButton>
                <group.radioButton @label="Los Angeles">Los Angeles</group.radioButton>
                <group.radioButton @label="Chicago">Chicago</group.radioButton>
            </ElRadioGroup>
        </div>
        <div style="margin-top: 20px">
            <ElRadioGroup @size="small" @value={{this.buttonStylesRadio3}} @onChange={{this.changeButtonStylesRadio3}} as |group|>
                <group.radioButton @label="New York">New York</group.radioButton>
                <group.radioButton @label="Washington">Washington</group.radioButton>
                <group.radioButton @label="Los Angeles">Los Angeles</group.radioButton>
                <group.radioButton @label="Chicago">Chicago</group.radioButton>
            </ElRadioGroup>
        </div>
        <div style="margin-top: 20px">
            <ElRadioGroup @disabled={{true}} @size="mini" @value={{this.buttonStylesRadio4}} as |group|>
                <group.radioButton @label="New York">New York</group.radioButton>
                <group.radioButton @label="Washington">Washington</group.radioButton>
                <group.radioButton @label="Los Angeles">Los Angeles</group.radioButton>
                <group.radioButton @label="Chicago">Chicago</group.radioButton>
            </ElRadioGroup>
        </div>
   </demo.example>
    <div class="description">
        You just need to change `ElRadio` element into `ElRadioButton` element. We also provide `size` attribute.
    </div>
    <demo.snippet @name="radio-button-styles-demo.hbs" />
    <demo.snippet @name="radio-button-styles-demo.js" />
</DocsDemo>

## With borders

<DocsDemo @class="demo-block" as |demo|>
    <demo.example @name="radio-with-borders-demo.hbs">
        <div>
            <ElRadio @value={{this.withBordersRadio1}} @label="1" @border={{true}} @onClick={{this.changeWithBordersRadio1}}>Option A</ElRadio>
            <ElRadio @value={{this.withBordersRadio1}} @label="2" @border={{true}} @onClick={{this.changeWithBordersRadio1}}>Option B</ElRadio>
        </div>
        <div style="margin-top: 20px">
            <ElRadio @value={{this.withBordersRadio2}} @label="1" @border={{true}} @size="medium" @onClick={{this.changeWithBordersRadio2}}>Option A</ElRadio>
            <ElRadio @value={{this.withBordersRadio2}} @label="2" @border={{true}} @size="medium" @onClick={{this.changeWithBordersRadio2}}>Option B</ElRadio>
        </div>
        <div style="margin-top: 20px">
            <ElRadioGroup @size="small" @value={{this.withBordersRadio3}} as |group|>
                <group.radio @label="1" @border={{true}}>Option A</group.radio>
                <group.radio @label="2" @border={{true}} @disabled={{true}}>Option B</group.radio>
            </ElRadioGroup>
        </div>
        <div style="margin-top: 20px">
            <ElRadioGroup @disabled={{true}} @size="mini" @value={{this.withBordersRadio4}} as |group|>
                <group.radio @label="1" @border={{true}}>Option A</group.radio>
                <group.radio @label="2" @border={{true}}>Option B</group.radio>
            </ElRadioGroup>
        </div>
   </demo.example>
    <div class="description">
        The `border` attribute adds a border to Radios.
    </div>
    <demo.snippet @name="radio-with-borders-demo.hbs" />
    <demo.snippet @name="radio-with-borders-demo.js" />
</DocsDemo>

## Radio Attributes

| Argument | Description                                       | Type                      | Accepted Values       | Default |
| -------- | ------------------------------------------------- | ------------------------- | --------------------- | ------- |
| value    | binding value                                     | string / number / boolean | —                     | —       |
| label    | the value of Radio                                | string / number / boolean | —                     | —       |
| disabled | whether Radio is disabled                         | boolean                   | —                     | false   |
| border   | whether to add a border around Radio              | boolean                   | —                     | false   |
| size     | size of the Radio, only works when border is true | string                    | medium / small / mini | —       |
| name     | native 'name' attribute                           | string                    | —                     | —       |

## Radio Events

| Event Name | Description                           | Parameters                          |
| ---------- | ------------------------------------- | ----------------------------------- |
| onClick    | triggers when the bound value changes | the label value of the chosen radio |

## Radio-group Attributes

| Argument   | Description                                       | Type                      | Accepted Values       | Default |
| ---------- | ------------------------------------------------- | ------------------------- | --------------------- | ------- |
| value      | binding value                                     | string / number / boolean | —                     | —       |
| size       | the size of radio buttons or bordered radios      | string                    | medium / small / mini | —       |
| disabled   | whether the nesting radios are disabled           | boolean                   | —                     | false   |
| text-color | font color when button is active                  | string                    | —                     | #ffffff |
| fill       | border and background color when button is active | string                    | —                     | #409EFF |

## Radio-group Events

| Event Name | Description                           | Parameters                          |
| ---------- | ------------------------------------- | ----------------------------------- |
| onChange   | triggers when the bound value changes | the label value of the chosen radio |

## Radio-button Attributes

| Argument | Description               | Type            | Accepted Values | Default |
| -------- | ------------------------- | --------------- | --------------- | ------- |
| label    | the value of radio        | string / number | —               | —       |
| disabled | whether radio is disabled | boolean         | —               | false   |
| name     | native 'name' attribute   | string          | —               | —       |
