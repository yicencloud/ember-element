<!-- markdownlint-disable MD033 -->
# Timeline

Visually display timeline.

## TODO

* [ ] implements named block

## Basic usage

Timeline can be split into multiple activities in ascending or descending. Timestamps are important features that distinguish them from other components. Note the difference with Steps.

<DocsDemo @class="demo-block demo-timeline" as |demo|>
    <demo.example @name="timeline-basic-usage-demo.hbs">
      <div class="block">
        <div class="radio">
          Order:
          <ElRadioGroup @value={{this.basicUsageReverse}} @change={{this.handleBasicUsageReverseChange}} as |Group|>
            <Group.Radio @label={{true}}>descending</Group.Radio>
            <Group.Radio @label={{false}}>ascending</Group.Radio>
          </ElRadioGroup>
        </div>
        <ElTimeline @reverse={{this.basicUsageReverse}}>
          {{#each this.basicUsageActivities as |a|}}
          <ElTimelineItem @timestamp={{a.timestamp}}>
            {{a.content}}
          </ElTimelineItem>
          {{/each}}
        </ElTimeline>
      </div>
    </demo.example>
    <demo.snippet @name="timeline-basic-usage-demo.hbs" />
    <demo.snippet @name="timeline-basic-usage-demo.js" />
</DocsDemo>

## Custom node

Size, color, and icons can be customized in node.

<DocsDemo @class="demo-block demo-timeline" as |demo|>
    <demo.example @name="timeline-custom-node-demo.hbs">
      <div class="block">
        <ElTimeline>
          {{#each this.customNodeActivities as |a|}}
          <ElTimelineItem @timestamp={{a.timestamp}} @icon={{a.icon}} @type={{a.type}} @color={{a.color}} @size={{a.size}}>
            {{a.content}}
          </ElTimelineItem>
          {{/each}}
        </ElTimeline>
      </div>
    </demo.example>
    <demo.snippet @name="timeline-custom-node-demo.hbs" />
    <demo.snippet @name="timeline-custom-node-demo.js" />
</DocsDemo>

## Custom timestamp

Timestamp can be placed on top of content when content is too high.

<DocsDemo @class="demo-block demo-timeline" as |demo|>
    <demo.example @name="timeline-custom-timestamp-demo.hbs">
      <div class="block">
        <ElTimeline>
          <ElTimelineItem @timestamp="2018/4/12" @placement="top">
            <ElCard>
              <h4>Update Github template</h4>
              <p>Tom committed 2018/4/12 20:46</p>
            </ElCard>
          </ElTimelineItem>
          <ElTimelineItem @timestamp="2018/4/3" @placement="top">
            <ElCard>
              <h4>Update Github template</h4>
              <p>Tom committed 2018/4/3 20:46</p>
            </ElCard>
          </ElTimelineItem>
          <ElTimelineItem @timestamp="2018/4/2" @placement="top">
            <ElCard>
              <h4>Update Github template</h4>
              <p>Tom committed 2018/4/2 20:46</p>
            </ElCard>
          </ElTimelineItem>
        </ElTimeline>
      </div>
    </demo.example>
    <demo.snippet @name="timeline-custom-timestamp-demo.hbs" />
</DocsDemo>

## Timeline Arguments

| Argument | Description                                                       | Type    | Accepted Values | Default |
| -------- | ----------------------------------------------------------------- | ------- | --------------- | ------- |
| reverse  | whether the node is ascending or descending, default is ascending | boolean | —               | false   |

## Timeline-item Arguments

| Argument      | Description               | Type    | Accepted Values                             | Default |
| ------------- | ------------------------- | ------- | ------------------------------------------- | ------- |
| timestamp     | timestamp content         | string  | -                                           | —       |
| hideTimestamp | whether to show timestamp | boolean | —                                           | false   |
| placement     | position of timestamp     | string  | top / bottom                                | bottom  |
| type          | node type                 | string  | primary / success / warning / danger / info | -       |
| color         | background color of node  | string  | hsl / hsv / hex / rgb                       | -       |
| size          | node size                 | string  | normal / large                              | normal  |
| icon          | icon class name           | string  | —                                           | -       |

## Timeline-item Named Blocks

| name | Description                      |
| ---- | -------------------------------- |
| —    | Custom content for timeline item |
| dot  | Custom defined node              |
