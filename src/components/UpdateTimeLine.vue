<template>
  <el-card>
    <div slot="header" class="clearfix">
      <span>更新时间线</span>
      <el-link
        class="more"
        :underline="false"
        href="https://github.com/dagoyounger/codemao-browse-enhanced/releases"
        target="_blank"
      >
        查看详情
      </el-link>
    </div>
    <el-timeline class="infinite-list" v-infinite-scroll="load">
      <el-timeline-item
        v-for="(activity, index) in activities"
        :key="index"
        :icon="activity.icon"
        :type="activity.type"
        :color="activity.color"
        :size="activity.size"
        :timestamp="activity.timestamp"
      >
        <el-tag>{{ activity.version }}</el-tag>
        {{ activity.content }}
      </el-timeline-item>
    </el-timeline>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      count: 5,
      preActivities: [
        {
          content: '正式版本发布',
          timestamp: '2022-01-25',
          version: 'v1.0.0',
        },
        {
          content: '修复部分普通帖子渲染时内容被吞的 bug',
          timestamp: '2021-09-12',
          version: 'v0.3.1',
          type: 'primary',
          size: 'large',
        },
        {
          content: '添加 Markdown 语法解析中对 html 的支持',
          timestamp: '2021-09-05',
          version: 'v0.3.0',
          type: 'primary',
          size: 'large',
        },
        {
          content: '添加修改页面标题功能',
          timestamp: '2021-09-04',
          version: 'v0.2.0',
          type: 'primary',
          size: 'large',
        },
        {
          content: '测试版本发布',
          timestamp: '2021-08-31',
          version: 'v0.1.0',
          type: 'primary',
          size: 'large',
        },
      ],
    };
  },
  computed: {
    activities() {
      return this.preActivities.slice(0, this.count);
    },
  },
  methods: {
    load() {
      this.count += 2;
    },
  },
};
</script>

<style scoped>
.more {
  float: right;
  padding: 3px 0;
}

.infinite-list {
  overflow: auto;
  height: 380px;
}
</style>
