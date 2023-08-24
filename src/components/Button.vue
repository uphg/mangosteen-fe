<script lang="ts" setup>
import type { PropType } from 'vue';


defineProps({
  size: {
    type: String as PropType<'medium' | 'small'>,
    default: 'medium'
  },
  round: Boolean as PropType<boolean>,
  hue: {
    type: String as PropType<'default' | 'primary'>,
    default: 'default'
  }
})
</script>

<template>
  <button
    :class="[
      'p-0 m-0 border-none transition-bg-color-250',
      {
        'h-12': size === 'medium',
        'h-8': size === 'small',
      },
      hue === 'primary' ? 'c-white bg-blue active-bg-blue-500' : 'bg-gray-100 active-bg-gray-200',
      round ? (size === 'medium' ? 'px-4 border-rd-6' : 'px-3 border-rd-4') : 'px-2 border-rd-2'
    ]"
  >
    <slot></slot>
  </button>
</template>