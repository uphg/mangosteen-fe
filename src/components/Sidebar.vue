<script lang="ts" setup>
import { useSidebarStore } from '@/stores/sidebar';

defineProps({
visible: {
  type: Boolean as PropType<boolean>,
    default: false,
  }
})

const sidebar = useSidebarStore()
</script>

<template>
  <van-popup
    :show="sidebar.visible"
    position="left"
    :style="{ width: '256px', height: '100%' }"
    @update:show="sidebar.setVisible"
  >
    我是侧栏菜单
  </van-popup>
</template>