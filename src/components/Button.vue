<script lang="ts" setup>
import type { PropType } from 'vue';


defineProps({
  size: {
    type: String as PropType<'medium' | 'small'>,
    default: 'medium'
  },
  hue: {
    type: String as PropType<'default' | 'primary'>,
    default: 'default'
  },
  type: {
    type: String as PropType<'button' | 'submit'>,
    default: 'button'
  },
  round: Boolean as PropType<boolean>,
  disabled: Boolean as PropType<boolean>,
})
</script>

<template>
  <button
    :class="[
      'p-0 m-0 border-none transition-bg-color-250',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      {
        'h-12': size === 'medium',
        'h-8': size === 'small',
        [`bg-blue c-white${disabled ? '' : ' active-bg-blue-500'}`]: hue === 'primary',
        [`bg-gray-100${disabled ? '' : ' active-bg-gray-200'}`]: hue === 'default',
      },
      round ? (size === 'medium' ? 'px-4 border-rd-6' : 'px-3 border-rd-4') : 'px-2 border-rd-2'
    ]"
    :type="type"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>