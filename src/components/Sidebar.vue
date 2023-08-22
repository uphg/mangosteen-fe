<script lang="ts" setup>
defineProps({
  visible: {
    type: Boolean as PropType<boolean>,
    default: false,
  }
})

const emit = defineEmits(['update:visible'])

function onUpdateShow(value: boolean) {
  emit('update:visible', value)
}
</script>

<template>
  <van-popup
    :show="visible"
    @update:show="onUpdateShow"
    position="left"
    :style="{ width: '75%', height: '100%' }"
  >
    我是侧栏菜单
  </van-popup>
</template>