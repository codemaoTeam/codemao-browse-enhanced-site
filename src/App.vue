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
        <el-row :gutter="20">
          <el-col
            v-for="links in footerLinks"
            :key="links.name"
            :span="24 / footerLinks.length"
          >
            <p>{{ links.name }}</p>
            <List :data="links.content" />
          </el-col>
        </el-row>
        <p>
          网页源代码已在
          <el-link
            :underline="false"
            href="https://github.com/dagoyounger/codemao-browse-enhanced-site"
          >
            Github
          </el-link>
          上开源
        </p>
        <p>© 2021 Dago</p>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import List from '@/components/List.vue';
export default {
  components: {
    List,
  },
  data() {
    return {
      version: 'v0.3.1',
      footerLinks: [
        {
          name: '友情链接',
          content: [
            { name: '编程猫社区', link: 'https://shequ.codemao.cn' },
            { name: '布丁工具箱', link: 'https://box.svipking.top' },
          ],
        },
        {
          name: '特别鸣谢',
          content: [
            { name: '土拨鼠', link: 'https://shequ.codemao.cn/user/2695330' },
          ],
        },
        {
          name: '开发者',
          content: [
            {
              name: '简单得不简单(Dago)',
              link: 'https://github.com/dagoyounger',
            },
          ],
        },
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
