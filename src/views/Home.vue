<template>
  <div>
    <div>
      <h1 class="title">全面强化体验</h1>
      <p class="descripition">
        Codemao Browse Enhanced（CBE）是一个 Chrome
        扩展，可以让你以更便捷的方式访问编程猫社区官网。
      </p>
    </div>

    <div>
      <h1>更新时间线</h1>
      <el-timeline>
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reverse: true,
      activities: [
        {
          content: '添加暗黑模式',
          timestamp: '2021-11',
          version: 'v1.1.0',
        },
        {
          content: '正式版本发布',
          timestamp: '2021-10',
          version: 'v1.0.0',
        },
        {
          content: '缩短图床上传后 URL 的长度',
          timestamp: '2021-09-21',
          version: 'v1.0.0-beta.1',
          type: 'warning',
        },
        {
          content: '缩短图床上传后 URL 的长度',
          timestamp: '2021-09-21',
          version: 'v1.0.0-nightly.20210921',
          type: 'success',
        },
        {
          content: '添加编程猫图床功能',
          timestamp: '2021-09-12',
          version: 'v1.0.0-nightly.20210912',
          type: 'success',
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
          content: '添加反屏蔽词功能',
          timestamp: '2021-09-05',
          version: 'v1.0.0-nightly.20210905',
          type: 'success',
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
};
</script>

<style scoped>
.title {
  font-size: 4.5em;
}

.descripition {
  font-size: 1.4em;
  line-height: 1.9em;
  color: #9292a6;
}
</style>
