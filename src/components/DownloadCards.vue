<template>
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
.el-card {
  margin-bottom: 10px;
}
</style>
