<template>
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
</template>

<script>
export default {
  data() {
    return {
      version: 'v0.3.1',
    };
  },
};
</script>
