<template>
  <div id="app">
    <el-container>
      <el-header>
        <PageHeader />
      </el-header>

      <el-main>
        <router-view />
        <el-backtop />
      </el-main>

      <el-footer>
        <el-divider />
        <PageFooter />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue';
import PageFooter from '@/components/PageFooter.vue';

export default {
  components: {
    PageHeader,
    PageFooter,
  },
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}

.el-footer {
  text-align: center;
}
</style>
