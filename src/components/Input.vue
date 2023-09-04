<script lang="ts" setup>
import type { PropType } from 'vue';

defineOptions({
  inheritAttrs: false
})

defineProps({
  value: [String, Number] as PropType<string | number>,
  placeholder: [String, Number] as PropType<string | number>,
  disabled: Boolean as PropType<boolean>,
  round: Boolean as PropType<boolean>
})

const emit = defineEmits(['update:value', 'input'])

function onInput(e: Event) {
  emit('input', e)
  emit('update:value', (e.target as HTMLInputElement).value)
}

</script>

<template>
  <div class="h-12 flex shadow bg-white items-center" :class="[round ? 'px-5 border-rd-6' : 'px-3 border-rd-2']">
    <input
      :disabled="disabled"
      :placeholder="placeholder?.toString()"
      class="hover-outline-none border-none p-0 font-size-4 placeholder-neutral-300"
      :class="{ 'w-100%': !$slots.suffix, 'flex-grow': $slots.suffix }"
      v-bind="$attrs"
      :value="value"
      @input="onInput"
    >
    <div v-if="$slots.suffix" class="pl-2 mr--2">
      <slot name="suffix"></slot>
    </div>
  </div>
</template>
