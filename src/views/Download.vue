<template>
  <div>
    <div>
      <div class="title">
        <h1>立刻开始使用</h1>
        <p class="descripition">
          Codemao Browse Enhanced 正在公测中，欢迎你立即使用。
        </p>
      </div>

      <el-row>
        <el-col v-for="download in downloads" :key="download.name">
          <el-card>
            <el-link :underline="false" :href="download.link" target="_blank">
              <h2>{{ download.name }}</h2>
            </el-link>
            <div>
              <span>{{ download.descripition }}</span>
            </div>
          </el-card>
        </el-col>
      </el-row>
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
export default {
  data() {
    return {
      downloads: [
        {
          name: 'Chrome 网上应用商店',
          descripition: '安全可靠，放心下载',
          link:
            'https://chrome.google.com/webstore/detail/codemao-browse-enhanced/hnhapipopaiiojbpekfljalfbnflohfa',
        },
        {
          name: '扩展迷（镜像站）',
          descripition: '不及时同步 Chrome 网上应用商店',
          link:
            'https://www.extfans.com/productivity/hnhapipopaiiojbpekfljalfbnflohfa',
        },

        {
          name: 'Github',
          descripition: '最新版本，实时获取',
          link:
            'https://github.com/codemaoTeam/codemao-browse-enhanced/releases',
        },
        {
          name: '阿里云盘',
          descripition: '实时更新，方便下载',
          link: 'https://www.aliyundrive.com/s/SKLRJZjuTw6',
        },
      ],
    };
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

.el-card {
  margin-bottom: 10px;
}
</style>
