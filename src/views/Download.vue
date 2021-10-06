<template>
  <div>
    <div>
      <div class="title">
        <h1>立刻开始使用</h1>
        <p class="descripition">
          Codemao Browse Enhanced 正在公测中，欢迎你立即使用。
        </p>
      </div>

      <DownloadCards />
    </div>

    <div>
      <div class="title">
        <h1>我们可能提供</h1>
        <p class="descripition">如果以下服务呼声很高，我们会考虑开发。</p>
      </div>

      <el-card>Firefox 版本浏览器扩展</el-card>
    </div>
  </div>
</template>

<script>
import DownloadCards from '@/components/DownloadCards.vue';

export default {
  components: {
    DownloadCards,
  },
};
</script>

<style scoped>
.title {
  text-align: center;
}

h1 {
  font-size: 66px;
  line-height: 72px;
  color: #0b0e51;
  margin-bottom: 20px;
}

.descripition {
  font-size: 20px;
  line-height: 28px;
  color: #4154b5;
  margin: 0 auto 120px auto;
}
</style>
