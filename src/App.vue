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

      <el-footer height="250px">
        <el-divider />
        <p>友情链接</p>
        <SepList :data="friendshipLinks" />
        <p>特别鸣谢</p>
        <SepList :data="thankLinks" />
        <p>开发者</p>
        <SepList :data="developers" />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import SepList from '@/components/SepList.vue';
export default {
  components: {
    SepList,
  },
  data() {
    return {
      version: 'v0.3.1',
      friendshipLinks: [
        { name: '编程猫社区', link: 'https://shequ.codemao.cn' },
        { name: '布丁工具箱', link: 'https://box.svipking.top' },
      ],
      thankLinks: [
        { name: '土拨鼠', link: 'https://shequ.codemao.cn/user/2695330' },
      ],
      developers: [
        { name: '简单得不简单(Dago)', link: 'https://github.com/dagoyounger' },
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
