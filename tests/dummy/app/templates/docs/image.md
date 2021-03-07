<!-- markdownlint-disable MD033 -->

# Image

Besides the native features of img, support lazy load, custom placeholder and load failure, etc.

## TODO

* [ ] implements named block `placeholder`
* [ ] provide support to use `scrollContainer`

## Basic Usage

<DocsDemo @class="demo-block demo-image" as |demo|>
    <demo.example @name="image-basic-usage-demo.hbs">
      {{#each this.basicUsageFits as |fit|}}
        <div class="block">
          <span class="demonstration">{{fit}}</span>
          <ElImage
            style="width: 100px; height: 100px"
            @src={{this.basicUsageUrl}}
            @fit={{fit}} />
        </div>
      {{/each}}
    </demo.example>
    <div class="description">
      Indicate how the image should be resized to fit its container by `fit`, same as native [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
    </div>
    <demo.snippet @name="image-basic-usage-demo.hbs" />
    <demo.snippet @name="image-basic-usage-demo.js" />
</DocsDemo>

## Placeholder

<DocsDemo @class="demo-block demo-image" as |demo|>
    <demo.example @name="image-placeholder-demo.hbs">
      <div class="demo-image__placeholder">
        <div class="block">
          <span class="demonstration">Default</span>
          <ElImage @src={{this.placeholderUrl}} />
        </div>
        <div class="block">
          <span class="demonstration">Custom</span>
          <ElImage @src={{this.placeholderUrl}}>
            <div class="image-slot">
              Loading<span class="dot">...</span>
            </div>
          </ElImage>
        </div>
      </div>
    </demo.example>
    <div class="description">
      Custom placeholder content when image hasn't loaded yet by `placeholder` block.
    </div>
    <demo.snippet @name="image-placeholder-demo.hbs" />
    <demo.snippet @name="image-placeholder-demo.js" />
</DocsDemo>

## Load Failed

<DocsDemo @class="demo-block demo-image" as |demo|>
    <demo.example @name="image-load-failed-demo.hbs">
      <div class="demo-image__error">
        <div class="block">
          <span class="demonstration">Default</span>
          <ElImage />
        </div>
        <div class="block">
          <span class="demonstration">Custom</span>
          <ElImage>
            <:error>
              <div class="image-slot">
                <ElIcon @icon="picture-outline" />
              </div>
            </:error>
          </ElImage>
        </div>
      </div>
    </demo.example>
    <div class="description">
      Custom failed content when error occurs to image load by `error` block
    </div>
    <demo.snippet @name="image-load-failed-demo.hbs" />
</DocsDemo>

## Lazy Load

<DocsDemo @class="demo-block demo-image" as |demo|>
    <demo.example @name="image-lazy-load-demo.hbs">
      <div class="demo-image__lazy">
        {{#each this.lazyLoadUrls as |url|}}
          <ElImage @src={{url}} @lazy={{true}} />
        {{/each}}
      </div>
    </demo.example>
    <div class="description">
      Use lazy load by `lazy = true`. Image will load until scroll into view when set. You can indicate scroll container that adds scroll listener to by `scrollContainer`. If undefined, will be the nearest parent container whose overflow property is auto or scroll.
    </div>
    <demo.snippet @name="image-lazy-load-demo.hbs" />
    <demo.snippet @name="image-lazy-load-demo.js" />
</DocsDemo>

## Image Preview

<DocsDemo @class="demo-block demo-image" as |demo|>
    <demo.example @name="image-preview-demo.hbs">
      <div class="demo-image__preview">
        <ElImage
          style="width: 100px; height: 100px"
          @src={{this.previewUrl}}
          @previewSrcList={{this.previewSrcList}}>
        </ElImage>
      </div>
    </demo.example>
    <div class="description">
      allow big image preview by setting `previewSrcList` prop.
    </div>
    <demo.snippet @name="image-preview-demo.hbs" />
    <demo.snippet @name="image-preview-demo.js" />
</DocsDemo>

## Arguments

| Argument        | Description                                                                       | Type                 | Accepted values                            | Default                                                                |
| --------------- | --------------------------------------------------------------------------------- | -------------------- | ------------------------------------------ | ---------------------------------------------------------------------- |
| src             | Image source, same as native                                                      | string               | —                                          | -                                                                      |
| fit             | Indicate how the image should be resized to fit its container, same as object-fit | string               | fill / contain / cover / none / scale-down | -                                                                      |
| alt             | Native alt                                                                        | string               | -                                          | -                                                                      |
| referrerPolicy  | Native referrerPolicy                                                             | string               | -                                          | -                                                                      |
| lazy            | Whether to use lazy load                                                          | boolean              | —                                          | false                                                                  |
| scrollContainer | The container to add scroll listener when using lazy load                         | string / HTMLElement | —                                          | The nearest parent container whose overflow property is auto or scroll |
| previewSrcList  | allow big image preview                                                           | Array                | —                                          | -                                                                      |
| zIndex          | set image preview z-index                                                         | Number               | —                                          | 2000                                                                   |

## Events

| Event Name | Description          | Parameters |
| ---------- | -------------------- | ---------- |
| load       | Same as native load  | (e: Event) |
| error      | Same as native error | (e: Error) |

## Named blocks

| Block Name  | Description                     |
| ----------- | ------------------------------- |
| placeholder | Triggers when image load        |
| error       | Triggers when image load failed |
