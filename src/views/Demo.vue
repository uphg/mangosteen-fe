<script lang="ts" setup>
const active = ref(0);
</script>

<template>
  <h2 class="p-4">tabs 切换demo</h2>
  <van-tabs v-model:active="active" swipeable>
    <van-tab v-for="index in 4" :title="'选项 ' + index" :key="index">
      内容 {{ index }}
    </van-tab>
  </van-tabs>
</template>