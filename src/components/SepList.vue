<template>
  <p>
    <span v-for="(item, index) in data" :key="item.name">
      <el-link
        :underline="false"
        :href="item.link"
        target="_blank"
        style="font-size: 16px"
      >
        {{ item.name }}
      </el-link>
      <span v-if="index != data.length - 1">
        &nbsp;|&nbsp;
      </span>
    </span>
  </p>
</template>

<script>
export default {
  props: ['data'],
};
</script>
