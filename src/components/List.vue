<template>
  <div>
    <p v-for="item in data" :key="item.name" class="link">
      <el-link
        :underline="false"
        :href="item.link"
        target="_blank"
        style="font-size: 16px"
      >
        {{ item.name }}
      </el-link>
    </p>
  </div>
</template>

<script>
export default {
  props: ['data'],
};
</script>

<style scoped>
.link {
  margin: 5px 0;
}
</style>
