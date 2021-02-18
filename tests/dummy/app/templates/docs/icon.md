<!-- markdownlint-disable MD033 -->

# Icon

Element provides a set of common icons.

## Basic usage

Just assign the `icon` attribute without `el-icon-` prefix.

<DocsDemo @class="demo-block" as |demo|>
    <demo.example @name="icon-basic-usage-demo.hbs" @class="demo-icon">
        <ElIcon @icon="edit" />
        <ElIcon @icon="share" />
        <ElIcon @icon="delete" />
        <ElButton @type="primary" @icon="search">Search</ElButton>
    </demo.example>
    <demo.snippet @name="icon-basic-usage-demo.hbs" />
</DocsDemo>

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
