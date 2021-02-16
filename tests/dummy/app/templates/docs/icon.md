# Icon

Element provides a set of common icons.

## TODO

* [ ] Add search button with an icon

## Basic usage

Just assign the class name to el-icon-iconName.


{{#docs-demo as |demo|}}
    {{#demo.example name="el-basic-usage-demo.hbs" class="demo-icon"}}
        <ElIcon @icon="edit" />
        <ElIcon @icon="share" />
        <ElIcon @icon="delete" />
    {{/demo.example}}

    {{demo.snippet "el-basic-usage-demo.hbs"}}

{{/docs-demo}}

## Icons

<ul class="icon-list">
    {{#each this.icons as |icon|}}
    <li>
        <span>
            <ElIcon @icon={{icon}} />
            <span class="icon-name">{{icon}}</span>
        </span>
    </li>
    {{/each}}
</ul>