<!-- markdownlint-disable MD033 -->

# InfiniteScroll

Load more data while reach bottom of the page

## TODO

* [ ] provide support to use `distance`

## Basic usage

Add `infinite-scroll` to the list to automatically execute loading method when scrolling to the bottom.

<DocsDemo @class="demo-block demo-infinite-scroll" as |demo|>
    <demo.example @name="infinite-scroll-basic-usage-demo.hbs">
      <ul class="infinite-list" {{infinite-scroll this.increaseBasicUsageCount}} style="overflow:auto">
        {{#each (range 1 this.basicUsageCount true) as |i|}}
          <li class="infinite-list-item">{{i}}</li>
        {{/each}}
      </ul>
    </demo.example>
    <demo.snippet @name="infinite-scroll-basic-usage-demo.hbs" />
    <demo.snippet @name="infinite-scroll-basic-usage-demo.js" />
</DocsDemo>

## Disable Loading

<DocsDemo @class="demo-block demo-infinite-scroll" as |demo|>
    <demo.example @name="infinite-scroll-disable-loading-demo.hbs">
      <div class="infinite-list-wrapper">
        <ul
          class="infinite-list"
          {{infinite-scroll this.increaseDisableLoadingCount disabled=this.disableLoadingDisabled}}
          style="overflow:auto"
        >
          {{#each (range 1 this.disableLoadingCount true) as |i|}}
            <li class="list-item">{{i}}</li>
          {{/each}}
        </ul>
        {{#if this.disableLoadingLoading}}
          <p>Loading...</p>
        {{/if}}
        {{#if this.disableLoadingNoMore}}
          <p>No more</p>
        {{/if}}
      </div>
    </demo.example>
    <demo.snippet @name="infinite-scroll-disable-loading-demo.hbs" />
    <demo.snippet @name="infinite-scroll-disable-loading-demo.js" />
</DocsDemo>



## Arguments

| Argument  | Description                                                                                                      | Type    | Accepted values | Default |
| --------- | ---------------------------------------------------------------------------------------------------------------- | ------- | --------------- | ------- |
| disabled  | is disabled                                                                                                      | boolean | -               | false   |
| delay     | throttle delay (ms)                                                                                              | number  | -               | 200     |
| distance  | trigger distance (px)                                                                                            | number  | -               | 0       |
| immediate | Whether to execute the loading method immediately, in case the content cannot be filled up in the initial state. | boolean | -               | true    |
