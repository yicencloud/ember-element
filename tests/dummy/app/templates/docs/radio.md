<!-- markdownlint-disable MD033 -->

# Radio

Single selection among multiple options.

## Basic usage

Radio should not have too many options. Otherwise, use the Select component instead.

<DocsDemo @class="demo-block" as |demo|>
    <demo.example @name="radio-basic-usage-demo.hbs">
        <ElRadio @value={{this.radio}} @label="1" @change={{this.changeRadio}}>Option A</ElRadio>
        <ElRadio @value={{this.radio}} @label="2" @change={{this.changeRadio}}>Option B</ElRadio>
   </demo.example>
    <div class="description">
        Creating a radio component is easy, you just need to bind a variable to Radio's `value`. It equals to the value of `label` of the chosen radio. The type of `label` is `String`, `Number` or `Boolean`.
        Radio will trigger an `change` event and pass `label` as the parameter for updating `value`.
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
        <ElRadioGroup @value={{this.groupRadio}} @change={{this.changeGroupRadio}} as |Group|>
            <Group.Radio @label="3">Option A</Group.Radio>
            <Group.Radio @label="6">Option B</Group.Radio>
            <Group.Radio @label="9">Option C</Group.Radio>
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
        <ElRadioGroup @value={{this.buttonStylesRadio1}} @change={{this.changeButtonStylesRadio1}} @textColor="#F56C6C" @fill="#fbc4c4" as |Group|>
            <Group.RadioButton @label="New York">New York</Group.RadioButton>
            <Group.RadioButton @label="Washington">Washington</Group.RadioButton>
            <Group.RadioButton @label="Los Angeles">Los Angeles</Group.RadioButton>
            <Group.RadioButton @label="Chicago">Chicago</Group.RadioButton>
        </ElRadioGroup>
        <div style="margin-top: 20px">
            <ElRadioGroup @size="medium" @value={{this.buttonStylesRadio2}} @change={{this.changeButtonStylesRadio2}} as |Group|>
                <Group.RadioButton @label="New York">New York</Group.RadioButton>
                <Group.RadioButton @label="Washington">Washington</Group.RadioButton>
                <Group.RadioButton @label="Los Angeles">Los Angeles</Group.RadioButton>
                <Group.RadioButton @label="Chicago">Chicago</Group.RadioButton>
            </ElRadioGroup>
        </div>
        <div style="margin-top: 20px">
            <ElRadioGroup @size="small" @value={{this.buttonStylesRadio3}} @change={{this.changeButtonStylesRadio3}} as |Group|>
                <Group.RadioButton @label="New York">New York</Group.RadioButton>
                <Group.RadioButton @label="Washington">Washington</Group.RadioButton>
                <Group.RadioButton @label="Los Angeles">Los Angeles</Group.RadioButton>
                <Group.RadioButton @label="Chicago">Chicago</Group.RadioButton>
            </ElRadioGroup>
        </div>
        <div style="margin-top: 20px">
            <ElRadioGroup @disabled={{true}} @size="mini" @value={{this.buttonStylesRadio4}} as |Group|>
                <Group.RadioButton @label="New York">New York</Group.RadioButton>
                <Group.RadioButton @label="Washington">Washington</Group.RadioButton>
                <Group.RadioButton @label="Los Angeles">Los Angeles</Group.RadioButton>
                <Group.RadioButton @label="Chicago">Chicago</Group.RadioButton>
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
            <ElRadio @value={{this.withBordersRadio1}} @label="1" @border={{true}} @change={{this.changeWithBordersRadio1}}>Option A</ElRadio>
            <ElRadio @value={{this.withBordersRadio1}} @label="2" @border={{true}} @change={{this.changeWithBordersRadio1}}>Option B</ElRadio>
        </div>
        <div style="margin-top: 20px">
            <ElRadio @value={{this.withBordersRadio2}} @label="1" @border={{true}} @size="medium" @change={{this.changeWithBordersRadio2}}>Option A</ElRadio>
            <ElRadio @value={{this.withBordersRadio2}} @label="2" @border={{true}} @size="medium" @change={{this.changeWithBordersRadio2}}>Option B</ElRadio>
        </div>
        <div style="margin-top: 20px">
            <ElRadioGroup @size="small" @value={{this.withBordersRadio3}} as |Group|>
                <Group.Radio @label="1" @border={{true}}>Option A</Group.Radio>
                <Group.Radio @label="2" @border={{true}} @disabled={{true}}>Option B</Group.Radio>
            </ElRadioGroup>
        </div>
        <div style="margin-top: 20px">
            <ElRadioGroup @disabled={{true}} @size="mini" @value={{this.withBordersRadio4}} as |Group|>
                <Group.Radio @label="1" @border={{true}}>Option A</Group.Radio>
                <Group.Radio @label="2" @border={{true}}>Option B</Group.Radio>
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
| change     | triggers when the bound value changes | the label value of the chosen radio |

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
| change     | triggers when the bound value changes | the label value of the chosen radio |

## Radio-button Attributes

| Argument | Description               | Type            | Accepted Values | Default |
| -------- | ------------------------- | --------------- | --------------- | ------- |
| label    | the value of radio        | string / number | —               | —       |
| disabled | whether radio is disabled | boolean         | —               | false   |
| name     | native 'name' attribute   | string          | —               | —       |
