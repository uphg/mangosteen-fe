<script lang="ts" setup>
defineProps({
  size: {
    type: String as PropType<'medium' | 'small'>,
    default: 'medium'
  }
})
</script>

<template>
  <button
    :class="['p-0 m-0 border border-solid border-cool-gray-200 c-white bg-blue active-bg-blue-500 transition-bg-color-250', {
      'h-12 px-4 border-rd-6': size === 'medium',
      'h-8 px-3 border-rd-4': size === 'small',
    }]"
  >
    <slot></slot>
  </button>
</template>