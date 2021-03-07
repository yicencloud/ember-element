<!-- markdownlint-disable MD033 -->

# Avatar

Avatars can be used to represent people or objects. It supports images, Icons, or characters.

## TODO

* [ ] add `srcSet` support

## Basic usage

use `shape` and `size` prop to set avatar's shape and size

<DocsDemo @class="demo-block demo-avatar" as |demo|>
    <demo.example @name="avatar-basic-usage-demo.hbs">
      <ElRow class="demo-avatar demo-basic">
        <ElCol @span={{12}}>
          <div class="sub-title">circle</div>
          <div class="demo-basic--circle">
            <div class="block">
              <ElAvatar @size={{50}} @src={{this.basicUsageCircleUrl}} />
            </div>
            {{#each this.basicUsageSizeList as |size|}}
              <div class="block">
                <ElAvatar @size={{size}} @src={{this.basicUsageCircleUrl}} />
              </div>
            {{/each}}
          </div>
        </ElCol>  
        <ElCol @span={{12}}>
          <div class="sub-title">square</div>
          <div class="demo-basic--circle">
            <div class="block">
              <ElAvatar @shape="square" @size={{50}} @src={{this.basicUsageSquareUrl}} />
            </div>
            {{#each this.basicUsageSizeList as |size|}}
              <div class="block">
                <ElAvatar @shape="square" @size={{size}} @src={{this.basicUsageSquareUrl}} />
              </div>
            {{/each}}
          </div>
        </ElCol>
      </ElRow>
    </demo.example>
    <demo.snippet @name="avatar-basic-usage-demo.hbs" />
    <demo.snippet @name="avatar-basic-usage-demo.js" />
</DocsDemo>

## Types

It supports images, Icons, or characters

<DocsDemo @class="demo-block demo-avatar" as |demo|>
    <demo.example @name="avatar-type-demo.hbs">
      <div class="demo-type">
        <div>
          <ElAvatar @icon="user-solid" />
        </div>
        <div>
          <ElAvatar @src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
        </div>
        <div>
          <ElAvatar> user </ElAvatar>
        </div>
      </div>
    </demo.example>
    <demo.snippet @name="avatar-type-demo.hbs" />
</DocsDemo>

## Fallback when image load error

fallback when image load error

<DocsDemo @class="demo-block demo-avatar" as |demo|>
    <demo.example @name="avatar-fallback-demo.hbs">
      <div class="demo-type">
        <ElAvatar @size={{60}} @src="https://empty" @error={{this.fallbackErrorHandler}}>
          <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
        </ElAvatar>
      </div>
    </demo.example>
    <demo.snippet @name="avatar-fallback-demo.hbs" />
    <demo.snippet @name="avatar-fallback-demo.js" />

</DocsDemo>

## How the image fit its container

Set how the image fit its container for an image avatar, same as [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit).

<DocsDemo @class="demo-block demo-avatar" as |demo|>
    <demo.example @name="avatar-fit-demo.hbs">
      <div class="demo-fit">
        {{#each this.fitFits as |fit|}}
          <div class="block">
            <span class="title">{{fit}}</span>
            <ElAvatar @shape="square" @size={{100}} @fit={{fit}} @src={{this.fitUrl}} />
          </div>
        {{/each}}
      </div>
    </demo.example>
    <demo.snippet @name="avatar-fit-demo.hbs" />
    <demo.snippet @name="avatar-fit-demo.js" />
</DocsDemo>

## Arguments

| Argument | Description                                                                                                            | Type          | Accepted Values                            | Default |
| -------- | ---------------------------------------------------------------------------------------------------------------------- | ------------- | ------------------------------------------ | ------- |
| icon     | set representation type to Icon, more info on Icon Component                                                           | string        |                                            |
| size     | set avatar size                                                                                                        | number/string | number / large / medium / small            | large   |
| shape    | set avatar shape                                                                                                       | string        | circle / square                            | circle  |
| src      | the address of the image for an image avatar                                                                           | string        |                                            |
| srcSet   | A list of one or more strings separated by commas indicating a set of possible image sources for the user agent to use | string        |                                            |
| alt      | This argument defines an alternative text description of the image                                                     | string        |                                            |
| fit      | set how the image fit its container for an image avatar                                                                | string        | fill / contain / cover / none / scale-down | cover   |

## Events

| Event Name | Description                                                                    | Parameters |
| ---------- | ------------------------------------------------------------------------------ | ---------- |
| error      | handler when img load error, return false to prevent default fallback behavior | (e: Event) |
