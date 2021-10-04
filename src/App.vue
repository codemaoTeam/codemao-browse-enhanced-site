<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-menu :default-active="$route.path" mode="horizontal" router>
          <el-menu-item index="/">
            CBE
            <i style="font-size: 0.8em">{{ version }}</i>
          </el-menu-item>
          <el-menu-item index="/doc">帮助文档</el-menu-item>
          <el-menu-item index="/download" style="float: right">
            下载
          </el-menu-item>
        </el-menu>
      </el-header>

      <el-main>
        <router-view />
      </el-main>

      <el-footer height="200px">
        <el-divider />
        <div>
          <p>
            <span>友情链接：</span>
            <span v-for="(link, index) in friendshipLinks" :key="link.name">
              <el-link
                :underline="false"
                :href="link.link"
                target="_blank"
                style="font-size: 16px"
              >
                {{ link.name }}
              </el-link>
              <span v-if="index != friendshipLinks.length - 1">|</span>
            </span>
          </p>
          <p>开发者：简单得不简单(Dago)</p>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      version: 'v0.3.1',
      friendshipLinks: [
        { name: '编程猫社区', link: 'https://shequ.codemao.cn' },
      ],
    };
  },
};
</script>

<style scoped>
.el-footer {
  text-align: center;
}
</style>
