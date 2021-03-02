<!-- markdownlint-disable MD033 -->

# Carousel

Loop a series of images or texts in a limited space

## Basic usage

<DocsDemo @class="demo-block demo-carousel" as |demo|>
    <demo.example @name="carousel-basic-usage-demo.hbs">
      <div class="block">
        <span class="demonstration">Switch when indicator is hovered (default)</span>
        <ElCarousel @height="150px" as |Carsousel|>
          {{#each (range 1 4 true) as |i|}}
            <Carsousel.Item>
              <h3 class="small">{{i}}</h3>
            </Carsousel.Item>
          {{/each}}
        </ElCarousel>
      </div>
      <div class="block">
        <span class="demonstration">Switch when indicator is clicked</span>
        <ElCarousel @trigger="click" @height="150px" as |Carsousel|>
          {{#each (range 1 4 true) as |i|}}
            <Carsousel.Item>
              <h3 class="small">{{i}}</h3>
            </Carsousel.Item>
          {{/each}}
        </ElCarousel>
      </div>
    </demo.example>
    <div class="description">
      Combine `ElCarousel` with `ElCarouselItem`, and you'll get a carousel. Content of each slide is completely customizable, and you just need to place it inside `ElCarouselItem` tag. By default the carousel switches when mouse hovers over an indicator. Set `trigger` to `click`, and the carousel switches only when an indicator is clicked.
    </div>
    <demo.snippet @name="carousel-basic-usage-demo.hbs" />
</DocsDemo>

## Indicators

Indicators can be displayed outside the carousel

<DocsDemo @class="demo-block demo-carousel carousel-indicators-demo" as |demo|>
    <demo.example @name="carousel-indicators-demo.hbs">
      <ElCarousel @indicatorPosition="outside" as |Carsousel|>
        {{#each (range 1 4 true) as |i|}}
          <Carsousel.Item>
            <h3>{{i}}</h3>
          </Carsousel.Item>
        {{/each}}
      </ElCarousel>
    </demo.example>
    <div class="description">
      The `indicatorPosition` attribute determines where the indicators are located. By default they are inside the carousel, and setting `indicatorPosition` to `outside` moves them outside; setting `indicatorPosition` to `none` hides the indicators.
    </div>
    <demo.snippet @name="carousel-indicators-demo.hbs" />
</DocsDemo>

## Arrows

You can define when arrows are displayed

<DocsDemo @class="demo-block demo-carousel carousel-arrows-demo" as |demo|>
    <demo.example @name="carousel-arrows-demo.hbs">
      <ElCarousel @interval={{5000}} @arrow="always" as |Carsousel|>
        {{#each (range 1 4 true) as |i|}}
          <Carsousel.Item>
            <h3>{{i}}</h3>
          </Carsousel.Item>
        {{/each}}
      </ElCarousel>
    </demo.example>
    <div class="description">
      The `arrow` attribute determines when arrows are displayed. By default they appear when mouse hovers over the carousel. Setting `arrow` to `always` or `never` shows/hides the arrows permanently.
    </div>
    <demo.snippet @name="carousel-arrows-demo.hbs" />
</DocsDemo>

## Card mode

When a page is wide enough but has limited height, you can activate card mode for carousels

<DocsDemo @class="demo-block demo-carousel carousel-card-mode-demo" as |demo|>
    <demo.example @name="carousel-card-mode-demo.hbs">
      <ElCarousel @interval={{4000}} @type="card" @height="200px" as |Carsousel|>
        {{#each (range 1 6 true) as |i|}}
          <Carsousel.Item>
            <h3>{{i}}</h3>
          </Carsousel.Item>
        {{/each}}
      </ElCarousel>
    </demo.example>
    <div class="description">
      Setting `type` to `card` activates the card mode. Apart from the appearance, the biggest difference between card mode and common mode is that clicking the slides at both sides directly switches the carousel in card mode.
    </div>
    <demo.snippet @name="carousel-card-mode-demo.hbs" />
</DocsDemo>

## Directions

By default, `direction` is `horizontal`. Let carousel be displayed in the vertical direction by setting `direction` to `vertical`.

<DocsDemo @class="demo-block demo-carousel carousel-directions-demo" as |demo|>
    <demo.example @name="carousel-directions-demo.hbs">
      <ElCarousel @height="200px" @direction="vertical" @autoplay={{false}} as |Carsousel|>
        {{#each (range 1 4 true) as |i|}}
          <Carsousel.Item>
            <h3>{{i}}</h3>
          </Carsousel.Item>
        {{/each}}
      </ElCarousel>
    </demo.example>
    <demo.snippet @name="carousel-directions-demo.hbs" />
</DocsDemo>

## Carousel Arguments

| Argument          | Description                                           | Type    | Accepted Values     | Default    |
| ----------------- | ----------------------------------------------------- | ------- | ------------------- | ---------- |
| height            | height of the carousel                                | string  | —                   | —          |
| initialIndex      | index of the initially active slide (starting from 0) | number  | —                   | 0          |
| trigger           | how indicators are triggered                          | string  | hover/click         | hover      |
| autoplay          | whether automatically loop the slides                 | boolean | —                   | true       |
| interval          | interval of the auto loop, in milliseconds            | number  | —                   | 3000       |
| indicatorPosition | position of the indicators                            | string  | outside/none        | —          |
| arrow             | when arrows are shown                                 | string  | always/hover/never  | hover      |
| type              | type of the Carousel                                  | string  | card                | —          |
| loop              | display the items in loop                             | boolean | -                   | true       |
| direction         | display direction                                     | string  | horizontal/vertical | horizontal |

## Carousel Events

| Event Name | Description                             | Parameters                                                   |
| ---------- | --------------------------------------- | ------------------------------------------------------------ |
| change     | triggers when the active slide switches | index of the new active slide, index of the old active slide |

## Carousel Methods

| Method        | Description                  | Parameters                                            |
| ------------- | ---------------------------- | ----------------------------------------------------- |
| setActiveItem | manually switch slide        | index of the slide to be switched to, starting from 0 |
| prev          | switch to the previous slide | —                                                     |
| next          | switch to the next slide     | —                                                     |

## Carousel-Item Arguments

| Argument | Description                                      | Type   | Accepted Values | Default |
| -------- | ------------------------------------------------ | ------ | --------------- | ------- |
| name     | name of the item, can be used in `setActiveItem` | string | —               | —       |
| label    | text content for the corresponding indicator     | string | —               | —       |
