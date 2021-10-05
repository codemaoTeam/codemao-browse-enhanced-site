<template>
  <el-container>
    <el-aside>
      <el-tree
        :data="questionTree"
        @node-click="handleNodeClick"
        :expand-on-click-node="false"
        default-expand-all
      ></el-tree>
    </el-aside>
    <el-container>
      <el-main>
        <div v-for="questionType in questionTree" :key="questionType.id">
          <el-link
            :href="`#${questionType.id}`"
            :id="questionType.id"
            style="font-size: 20px"
          >
            <h1>{{ questionType.label }}</h1>
          </el-link>
          <el-card v-for="question in questionType.children" :key="question.id">
            <div slot="header" class="clearfix">
              <span>
                <el-link
                  :href="`#${question.id}`"
                  :id="question.id"
                  style="font-size: 16px"
                >
                  {{ question.label }}
                </el-link>
                <i title="最早出现在扩展中的版本号">{{ question.version }}</i>
              </span>
            </div>
            <div v-html="question.content"></div>
          </el-card>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      questionTree: [
        {
          label: '常见问题',
          id: 'common-question',
          children: [
            {
              label: '如何安装？',
              id: 'how-to-install',
              content:
                '在<a href="/download">下载页面</a>下载crx文件，打开chrome://extensions/页面，将下载的crx文件拖到这个页面即可',
            },
            {
              label: '安装报错？',
              id: 'error-on-installing',
              content: `如果出现类似这样的提示：
              <br><pre>程序包无效。详细信息: "Invalid value for 'web. acessible resources[0]."</pre>
              说明chrome版本较旧（低于88），安装最新版本谷歌浏览器即可
              <hr>谷歌在chrome88中推出了新的浏览器扩展版本（manifest version 3），它与之前的浏览器（支持的的扩展）不兼容`,
            },
            {
              label: '只有谷歌浏览器可以使用此扩展吗？',
              id: 'is-it-only-google-chrome',
              content: `目前是的
              <br>当然，通常基于Chrome内核的浏览器也是可以使用的（例如微软的Edge）
              <hr>暂时没有对火狐等浏览器的安排`,
            },
          ],
        },
        {
          label: '功能列表',
          id: 'feature-list',
          children: [
            {
              label: '反屏蔽链接',
              id: 'feature-display-link',
              version: '>= v1.1.0 maybe',
              content: '目前社区会把链接屏蔽成“喵喵喵”，此功能让链接正常显示',
            },
            {
              label: '学术模式',
              id: 'feature-academic-mode',
              version: '>= v1.1.0 maybe',
              content: '隐藏一些与学编程无关的内容',
            },
            {
              label: '自定义主题',
              id: 'feature-persional-theme',
              version: '>= v1.1.0 maybe',
              content: '自定义社区某些地方的CSS样式',
            },
            {
              label: '暗黑模式',
              id: 'feature-dark-mode',
              version: '>= v1.1.0',
              content: '开启后社区所有网页主题色彩偏暗',
            },
            {
              label: '编程猫图床',
              id: 'feature-codemao-image-bed',
              version: 'v1.0.0',
              content: `点击浏览器地址栏右侧的编程猫图标（前提是把扩展固定到地址栏右侧）有图床入口，点击进入页面后按照页面提示上传即可`,
            },
            {
              label: '防屏蔽词',
              id: 'feature-display-blocking-word',
              version: 'v1.0.0',
              content: `在社区页面选中文本，鼠标右键单击，点击“处理屏蔽词『选中内容』”
              <br>处理后的内容会添加到剪贴板，在发帖/评论等页面粘贴即可
              <hr>受防屏蔽原理限制，请勿处理链接，否则会出现无法访问的情况`,
            },
            {
              label: '修改页面标题',
              id: 'feature-change-page-title',
              version: 'v0.2.0',
              content: `社区自带页面标题过于冗余，此功能将标题全部改为“<页面名称> | 编程猫社区”形式
              <hr>例如：论坛页面将会被改为：“论坛 | 编程猫社区”`,
            },
            {
              label: '其它语法发布帖子',
              id: 'feature-post-forum-with-other-language',
              version: 'v0.1.0',
              content: `访问社区帖子发布页，发布帖子的弹出框会多一个语法选择器，选择相应语法即可（编程猫富文本指的是社区原本的帖子编辑器）
              <hr>如果没有语法选择器出现，尝试刷新网页后再次查看
              <hr><h1>Markdown: </h1>
              可以在Markdown中输入html内容，但会受到社区后台的限制`,
            },
            {
              label: '其它语法浏览帖子',
              id: 'feature-view-forum-with-other-language',
              version: 'v0.1.0',
              content: `扩展会自动检测是否为相应语法发布，通过检测后会根据相应语法重新渲染并展示在页面上
              <hr>对于用编程猫富文本编辑器发布的贴子，扩展不做任何处理
              <br>如果未安装扩展或扩展未启用，用户可以预览帖子内容`,
            },
          ],
        },
      ],
    };
  },
  methods: {
    handleNodeClick(data) {
      location.hash = data.id;
    },
  },
};
</script>

<style scoped>
.el-aside {
  padding-top: 20px;
  padding-left: 20px;
}

.el-card {
  margin-bottom: 10px;
}
</style>
