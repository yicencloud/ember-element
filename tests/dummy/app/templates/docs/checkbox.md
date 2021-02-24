<!-- markdownlint-disable MD033 -->

# Checkbox

A group of options for multiple choices.

## Basic usage

Checkbox can be used alone to switch between two states.

<DocsDemo @class="demo-block" as |demo|>
    <demo.example @name="checkbox-basic-usage-demo.hbs">
        <ElCheckbox @value={{this.checkboxValue}} @change={{this.toggleCheckboxValue}}>Option</ElCheckbox>
    </demo.example>
    <div class="description">
        Define `value` in `<ElCheckbox>`. The default value is a `Boolean` for single `checkbox`, and it becomes `true` when selected. Content inside the `<ElCheckbox>` tag will become the description following the button of the checkbox.
    </div>
    <demo.snippet @name="checkbox-basic-usage-demo.hbs" />
    <demo.snippet @name="checkbox-basic-usage-demo.js" />
</DocsDemo>

## Disabled State

Disabled state for checkbox.

<DocsDemo @class="demo-block" as |demo|>
    <demo.example @name="checkbox-disabled-state-demo.hbs">
        <ElCheckbox @value={{this.checkboxValue1}} @disabled={{true}}>Option</ElCheckbox>
        <ElCheckbox @value={{this.checkboxValue2}} @disabled={{true}}>Option</ElCheckbox>
    </demo.example>
    <div class="description">
        Set the `disabled` attribute.
    </div>
    <demo.snippet @name="checkbox-disabled-state-demo.hbs" />
    <demo.snippet @name="checkbox-disabled-state-demo.js" />
</DocsDemo>

## Checkbox group

It is used for multiple checkboxes which are bound in one group, and indicates whether one option is selected by checking if it is checked.

<DocsDemo @class="demo-block" as |demo|>
    <demo.example @name="checkbox-group-demo.hbs">
        <ElCheckboxGroup @value={{this.checkboxGroupValue}} @change={{this.updateCheckboxGroupValue}} as |Group|>
            <Group.Checkbox @label="Option A" />
            <Group.Checkbox @label="Option B" />
            <Group.Checkbox @label="Option C" />
            <Group.Checkbox @label="disabled" @disabled={{true}} />
            <Group.Checkbox @label="selected and disabled" @disabled={{true}} />
        </ElCheckboxGroup>
    </demo.example>
    <div class="description">
        `<ElCheckboxGroup>` element can manage multiple checkboxes in one group by using `value` which is bound as an Array. Inside the `<ElCheckbox>` element, `label` is the value of the checkbox. If no content is nested in that tag, `label` will be rendered as the description following the button of the checkbox. `label` also corresponds with the element values in the array. It is selected if the specified value exists in the array, and vice versa.
    </div>
    <demo.snippet @name="checkbox-group-demo.hbs" />
    <demo.snippet @name="checkbox-group-demo.js" />
</DocsDemo>

## Indeterminate

The indeterminate property can help you to achieve a 'check all' effect.

<DocsDemo @class="demo-block" as |demo|>
    <demo.example @name="checkbox-indeterminate-demo.hbs">
        <ElCheckbox @indeterminate={{this.isIndeterminate}} @value={{this.checkAll}} @change={{this.handleCheckAllChange}}>Check all</ElCheckbox>
        <div style="margin: 15px 0;"></div>
        <ElCheckboxGroup @value={{this.checkedCities}} @change={{this.handleCheckedCitiesChange}} as |Group|>
            {{#each this.cities as |city|}}
                <Group.Checkbox @label={{city}} @key={{city}}>{{city}}</Group.Checkbox>
            {{/each}}
        </ElCheckboxGroup>
    </demo.example>
    <demo.snippet @name="checkbox-indeterminate-demo.hbs" />
    <demo.snippet @name="checkbox-indeterminate-demo.js" />
</DocsDemo>

## Minimum / Maximum items checked

The min and max properties can help you to limit the number of checked items.

<DocsDemo @class="demo-block" as |demo|>
    <demo.example @name="checkbox-min-max-items-demo.hbs">
        <ElCheckboxGroup @value={{this.minMaxItemsCheckedCities}} @min=1 @max=2 @change={{this.handleMinMaxItemsChange}} as |Group|>
            {{#each this.minMaxItemsCities as |city|}}
                <Group.Checkbox @label={{city}} @key={{city}}>{{city}}</Group.Checkbox>
            {{/each}}
        </ElCheckboxGroup>
    </demo.example>
    <demo.snippet @name="checkbox-min-max-items-demo.hbs" />
    <demo.snippet @name="checkbox-min-max-items-demo.js" />
</DocsDemo>

## Button style

Checkbox with button styles.

<DocsDemo @class="demo-block" as |demo|>
    <demo.example @name="checkbox-button-style-demo.hbs">
        <div>
            <ElCheckboxGroup @value={{this.buttonStyleCheckedCities1}} @change={{this.handleButtonStyleChange1}} as |Group|>
                {{#each this.buttonStyleCities as |city|}}
                    <Group.CheckboxButton @label={{city}} @key={{city}}>{{city}}</Group.CheckboxButton>
                {{/each}}
            </ElCheckboxGroup>
        </div>
        <div style="margin-top: 20px">
            <ElCheckboxGroup @value={{this.buttonStyleCheckedCities2}} @size="medium" @change={{this.handleButtonStyleChange2}} as |Group|>
                {{#each this.buttonStyleCities as |city|}}
                    <Group.CheckboxButton @label={{city}} @key={{city}}>{{city}}</Group.CheckboxButton>
                {{/each}}
            </ElCheckboxGroup>
        </div>
        <div style="margin-top: 20px">
            <ElCheckboxGroup @value={{this.buttonStyleCheckedCities3}} @size="small" @change={{this.handleButtonStyleChange3}} as |Group|>
                {{#each this.buttonStyleCities as |city|}}
                    <Group.CheckboxButton @label={{city}} @disabled={{eq city "Beijing"}} @key={{city}}>{{city}}</Group.CheckboxButton>
                {{/each}}
            </ElCheckboxGroup>
        </div>
        <div style="margin-top: 20px">
            <ElCheckboxGroup @value={{this.buttonStyleCheckedCities4}} @size="mini" @disabled={{true}} @change={{this.handleButtonStyleChange4}} as |Group|>
                {{#each this.buttonStyleCities as |city|}}
                    <Group.CheckboxButton @label={{city}} @key={{city}}>{{city}}</Group.CheckboxButton>
                {{/each}}
            </ElCheckboxGroup>
        </div>
    </demo.example>
    <div class="description">
        You just need to change `<ElCheckbox>` into `<ElCheckboxButton>`. We also provide `size` attribute.
    </div>
    <demo.snippet @name="checkbox-button-style-demo.hbs" />
    <demo.snippet @name="checkbox-button-style-demo.js" />
</DocsDemo>

## With borders


<DocsDemo @class="demo-block" as |demo|>
    <demo.example @name="checkbox-with-borders-demo.hbs">
        <div>
            <ElCheckbox @value={{this.withBordersValue1}} @label="Option1" @border={{true}} @change={{this.toggleWithBordersValue1}} />
            <ElCheckbox @value={{this.withBordersValue2}} @label="Option2" @border={{true}} @change={{this.toggleWithBordersValue2}} />
        </div>
        <div style="margin-top: 20px">
            <ElCheckbox @value={{this.withBordersValue3}} @label="Option1" @border={{true}} @size="medium" @change={{this.toggleWithBordersValue3}} />
            <ElCheckbox @value={{this.withBordersValue4}} @label="Option2" @border={{true}} @size="medium" @change={{this.toggleWithBordersValue4}} />
        </div>
        <div style="margin-top: 20px">
            <ElCheckboxGroup @value={{this.withBordersGroupValue1}} @size="small" @change={{this.handleWithBordersGroupValueChange1}} as |Group|>
                <Group.Checkbox @label="Option1" @border={{true}} />
                <Group.Checkbox @label="Option2" @border={{true}} @disabled={{true}} />
            </ElCheckboxGroup>
        </div>
        <div style="margin-top: 20px">
            <ElCheckboxGroup @value={{this.withBordersGroupValue2}} @size="mini" @disabled={{true}} @change={{this.handleWithBordersGroupValueChange2}} as |Group|>
                <Group.Checkbox @label="Option1" @border={{true}} />
                <Group.Checkbox @label="Option2" @border={{true}} />
            </ElCheckboxGroup>
        </div>
    </demo.example>
    <div class="description">
        The `border` attribute adds a border to Checkboxes.
    </div>
    <demo.snippet @name="checkbox-with-borders-demo.hbs" />
    <demo.snippet @name="checkbox-with-borders-demo.js" />
</DocsDemo>

## Checkbox Attributes

| Argument      | Description                                             | Type                      | Options               | Default |
| ------------- | ------------------------------------------------------- | ------------------------- | --------------------- | ------- |
| value         | binding value                                           | string / number / boolean | —                     | —       |
| label         | value of the Checkbox when used inside a checkbox-group | string / number / boolean | —                     | —       |
| trueLabel     | value of the Checkbox if it's checked                   | string / number           | —                     | —       |
| falseLabel    | value of the Checkbox if it's not checked               | string / number           | —                     | —       |
| disabled      | whether the Checkbox is disabled                        | boolean                   | —                     | false   |
| border        | whether to add a border around Checkbox                 | boolean                   | —                     | false   |
| size          | size of the Checkbox, only works when border is true    | string                    | medium / small / mini | —       |
| name          | native 'name' attribute                                 | string                    | —                     | —       |
| checked       | if the Checkbox is checked                              | boolean                   | —                     | false   |
| indeterminate | same as indeterminate in native checkbox                | boolean                   | —                     | false   |

## Checkbox Events

| Event Name | Description                             | Parameters        |
| ---------- | --------------------------------------- | ----------------- |
| change     | triggers when the binding value changes | the updated value |

## Checkbox-group Attributes

| Argument  | Description                                       | Type    | Options               | Default |
| --------- | ------------------------------------------------- | ------- | --------------------- | ------- |
| value     | binding value                                     | array   | —                     | —       |
| size      | size of checkbox buttons or bordered checkboxes   | string  | medium / small / mini | —       |
| disabled  | whether the nesting checkboxes are disabled       | boolean | —                     | false   |
| min       | minimum number of checkbox checked                | number  | —                     | —       |
| max       | maximum number of checkbox checked                | number  | —                     | —       |
| textColor | font color when button is active                  | string  | —                     | #ffffff |
| fill      | border and background color when button is active | string  | —                     | #409EFF |

## Checkbox-group Events

| Event Name | Description                             | Parameters        |
| ---------- | --------------------------------------- | ----------------- |
| change     | triggers when the binding value changes | the updated value |

## Checkbox-button Attributes

| Argument   | Description                                             | Type                      | Options | Default |
| ---------- | ------------------------------------------------------- | ------------------------- | ------- | ------- |
| label      | value of the checkbox when used inside a checkbox-group | string / number / boolean | —       | —       |
| trueLabel  | value of the checkbox if it's checked                   | string / number           | —       | —       |
| falseLabel | value of the checkbox if it's not checked               | string / number           | —       | —       |
| disabled   | whether the checkbox is disabled                        | boolean                   | —       | false   |
| name       | native 'name' attribute                                 | string                    | —       | —       |
| checked    | if the checkbox is checked                              | boolean                   | —       | false   |
