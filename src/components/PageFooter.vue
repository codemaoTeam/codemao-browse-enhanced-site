<template>
  <div>
    <el-row>
      <el-col
        v-for="links in footerLinks"
        :key="links.name"
        :span="24"
        :md="24 / footerLinks.length"
      >
        <p>{{ links.name }}</p>
        <List :data="links.content" />
        <div class="sep"></div>
      </el-col>
    </el-row>
    <p>
      网页源代码已在
      <el-link
        :underline="false"
        href="https://github.com/dagoyounger/codemao-browse-enhanced-site"
        target="_blank"
      >
        Github
      </el-link>
      上开源
    </p>
    <p>© 2021 Dago</p>
    <div class="placeholder"></div>
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
      footerLinks: [
        {
          name: '友情链接',
          content: [
            { name: '编程猫社区', link: 'https://shequ.codemao.cn' },
            { name: '布丁工具箱', link: 'https://box.svipking.top' },
            { name: 'Codemao API 文档', link: 'https://api.docs.codemao.work' },
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
        {
          name: '特别鸣谢',
          content: [
            { name: '土拨鼠', link: 'https://shequ.codemao.cn/user/2695330' },
          ],
        },
        {
          name: '更多',
          content: [
            {
              name: 'QQ 群',
              link: 'https://jq.qq.com/?_wv=1027&k=W15hPcPZ',
            },
            {
              name: '赞助',
              link: 'https://afdian.net/@DagoYoung',
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

.sep {
  display: none;
  height: 10px;
}

.placeholder {
  height: 20px;
}

@media (max-width: 992px) {
  .sep {
    display: block;
  }
}
</style>
