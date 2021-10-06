<template>
  <div>
    <div class="banner">
      <p class="descripition">
        Codemao Browse Enhanced 是一个 Chrome 扩展，
        可以让你以更便捷的方式访问编程猫社区官网。
      </p>
      <el-button @click="$router.push('/download')">
        立刻开始使用
      </el-button>
    </div>

    <div class="time-line"><UpdateTimeLine /></div>
  </div>
</template>

<script>
import UpdateTimeLine from '@/components/UpdateTimeLine.vue';

export default {
  components: {
    UpdateTimeLine,
  },
};
</script>

<style scoped>
.banner {
  text-align: center;
}

.descripition {
  font-size: 2em;
  line-height: 1.9em;
  color: #9292a6;
  max-width: 700px;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 50px;
  margin-top: 50px;
}

.el-button {
  font-size: 20px;
  padding: 1em 50px 1.1em;
  margin-bottom: 70px;
}

.time-line {
  width: 1200px;
  margin: 0 auto;
}

@media (max-width: 1400px) {
  .time-line {
    width: 650px;
  }
}

@media (max-width: 768px) {
  .time-line {
    width: 100%;
  }
}
</style>
