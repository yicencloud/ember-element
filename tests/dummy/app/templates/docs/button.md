# Button

Commonly used button.

## Basic usage

{{#docs-demo class="demo-block" as |demo|}}
    {{#demo.example name="button-basic-usage-demo.hbs"}}
        <ElRow>
            <ElButton>Default</ElButton>
            <ElButton @type="primary">Primary</ElButton>
            <ElButton @type="success">Success</ElButton>
            <ElButton @type="info">Info</ElButton>
            <ElButton @type="warning">Warning</ElButton>
            <ElButton @type="danger">Danger</ElButton>
        </ElRow>
        <ElRow>
            <ElButton @plain={{true}}>Default</ElButton>
            <ElButton @type="primary" @plain={{true}}>Primary</ElButton>
            <ElButton @type="success" @plain={{true}}>Success</ElButton>
            <ElButton @type="info" @plain={{true}}>Info</ElButton>
            <ElButton @type="warning" @plain={{true}}>Warning</ElButton>
            <ElButton @type="danger" @plain={{true}}>Danger</ElButton>
        </ElRow>
        <ElRow>
            <ElButton @round={{true}}>Default</ElButton>
            <ElButton @type="primary" @round={{true}}>Primary</ElButton>
            <ElButton @type="success" @round={{true}}>Success</ElButton>
            <ElButton @type="info" @round={{true}}>Info</ElButton>
            <ElButton @type="warning" @round={{true}}>Warning</ElButton>
            <ElButton @type="danger" @round={{true}}>Danger</ElButton>
        </ElRow>
        <ElRow>
            <ElButton @circle={{true}} @icon="search" />
            <ElButton @type="primary" @icon="edit" @circle={{true}} />
            <ElButton @type="success" @icon="check" @circle={{true}} />
            <ElButton @type="info" @icon="message" @circle={{true}} />
            <ElButton @type="warning" @icon="star-off" @circle={{true}} />
            <ElButton @type="danger" @icon="delete" @circle={{true}} />
        </ElRow>
    {{/demo.example}}

    <div class="description">
        Use `type`, `plain`, `round` and `circle` to define Button's style.
    </div>

    {{demo.snippet "button-basic-usage-demo.hbs"}}
{{/docs-demo}}

## Disabled Button

The `disabled` attribute determines if the button is disabled.

{{#docs-demo class="demo-block" as |demo|}}
    {{#demo.example name="disabled-button-demo.hbs"}}
        <ElRow>
            <ElButton @disabled={{true}}>Default</ElButton>
            <ElButton @type="primary" @disabled={{true}}>Primary</ElButton>
            <ElButton @type="success" @disabled={{true}}>Success</ElButton>
            <ElButton @type="info" @disabled={{true}}>Info</ElButton>
            <ElButton @type="warning" @disabled={{true}}>Warning</ElButton>
            <ElButton @type="danger" @disabled={{true}}>Danger</ElButton>
        </ElRow>
        <ElRow>
            <ElButton @plain={{true}} @disabled={{true}}>Default</ElButton>
            <ElButton @type="primary" @plain={{true}} @disabled={{true}}>Primary</ElButton>
            <ElButton @type="success" @plain={{true}} @disabled={{true}}>Success</ElButton>
            <ElButton @type="info" @plain={{true}} @disabled={{true}}>Info</ElButton>
            <ElButton @type="warning" @plain={{true}} @disabled={{true}}>Warning</ElButton>
            <ElButton @type="danger" @plain={{true}} @disabled={{true}}>Danger</ElButton>
        </ElRow>
    {{/demo.example}}

    <div class="description">
        Use `disabled` attribute to determine whether a button is disabled. It accepts a `Boolean` value.
    </div>

    {{demo.snippet "disabled-button-demo.hbs"}}
{{/docs-demo}}

## Text Button

Buttons without border and background.

{{#docs-demo as |demo|}}
    {{#demo.example name="text-button-demo.hbs"}}
        <ElButton @type="text">Text Button</ElButton>
        <ElButton @type="text" @disabled={{true}}>Text Button</ElButton>
    {{/demo.example}}

    {{demo.snippet "text-button-demo.hbs"}}
{{/docs-demo}}

## Icon Button

Use icons to add more meaning to Button. You can use icon alone to save some space, or use it with text.

{{#docs-demo class="demo-block" as |demo|}}
    {{#demo.example name="icon-button-demo.hbs"}}
        <ElButton @type="primary" @icon="edit" />
        <ElButton @type="primary" @icon="share" />
        <ElButton @type="primary" @icon="delete" />
        <ElButton @type="primary" @icon="search">Search</ElButton>
        <ElButton @type="primary">
            Upload <ElIcon @icon="upload" class="el-icon-right" />
        </ElButton>
    {{/demo.example}}

    <div class="description">
        Use the `icon` attribute to add icon. You can find the icon list in Element icon component. Adding icons to the right side of the text is achievable with an `<ElIcon>` tag. Custom icons can be used as well.
    </div>

    {{demo.snippet "icon-button-demo.hbs"}}
{{/docs-demo}}

## Button Group

Displayed as a button group, can be used to group a series of similar operations.

{{#docs-demo class="demo-block" as |demo|}}
    {{#demo.example name="button-group-demo.hbs"}}
        <ElButtonGroup>
            <ElButton @type="primary" @icon="arrow-left">Previous Page</ElButton>
            <ElButton @type="primary">
                Next Page <ElIcon @icon="arrow-right" class="el-icon-right" />
            </ElButton>
        </ElButtonGroup>
        <ElButtonGroup>
            <ElButton @type="primary" @icon="edit" />
            <ElButton @type="primary" @icon="share" />
            <ElButton @type="primary" @icon="delete" />
        </ElButtonGroup>
    {{/demo.example}}

    <div class="description">
        Use tag `<ElButtonGroup>` to group your buttons.
    </div>

    {{demo.snippet "button-group-demo.hbs"}}
{{/docs-demo}}

## Loading Button

Click the button to load data, then the button displays a loading state.

{{#docs-demo class="demo-block" as |demo|}}
    {{#demo.example name="loading-button-demo.hbs"}}
        <ElButton @type="primary" @loading={{true}}>Loading</ElButton>
    {{/demo.example}}

    <div class="description">
        Set `loading` attribute to `true` to display loading state.
    </div>

    {{demo.snippet "loading-button-demo.hbs"}}
{{/docs-demo}}

## Sizes

Besides default size, Button component provides three additional sizes for you to choose among different scenarios.

{{#docs-demo class="demo-block" as |demo|}}
    {{#demo.example name="size-demo.hbs"}}
        <ElRow>
            <ElButton>Default</ElButton>
            <ElButton @size="medium">Medium</ElButton>
            <ElButton @size="small">Small</ElButton>
            <ElButton @size="mini">Mini</ElButton>
        </ElRow>
        <ElRow>
            <ElButton @round={{true}}>Default</ElButton>
            <ElButton @size="medium" @round={{true}}>Medium</ElButton>
            <ElButton @size="small" @round={{true}}>Small</ElButton>
            <ElButton @size="mini" @round={{true}}>Mini</ElButton>
        </ElRow>
    {{/demo.example}}

    <div class="description">
        Use attribute `size` to set additional sizes with `medium`, `small` or `mini`.
    </div>

    {{demo.snippet "size-demo.hbs"}}
{{/docs-demo}}

## Arguments

| Argument    | Description                            | Type    | Accepted values                                    | Default |
| ----------- | -------------------------------------- | ------- | -------------------------------------------------- | ------- |
| size        | button size                            | string  | medium / small / mini                              | —       |
| type        | button type                            | string  | primary / success / warning / danger / info / text | —       |
| plain       | determine whether it's a plain button  | boolean | —                                                  | false   |
| round       | determine whether it's a round button  | boolean | —                                                  | false   |
| circle      | determine whether it's a circle button | boolean | —                                                  | false   |
| loading     | determine whether it's loading         | boolean | —                                                  | false   |
| disabled    | disable the button                     | boolean | —                                                  | false   |
| icon        | icon class name                        | string  | —                                                  | —       |
| autofocus   | same as native button's autofocus      | boolean | —                                                  | false   |
| native-type | same as native button's type           | string  | button / submit / reset                            | button  |
