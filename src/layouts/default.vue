<script lang="ts" setup>
import Navbar from '@/components/Navbar.vue';

defineProps({
  title: String
})

const content = ref<HTMLElement | null>(null)
const borderVisible = ref(false)

function onScroll() {
  borderVisible.value = content.value!.scrollTop > 0
}
</script>

<template>
  <div class="flex flex-col">
    <Navbar :class="['b-b b-b-solid b-transparent', { 'border-cool-gray-200': borderVisible }]">
      <template #default>
        <slot v-if="$slots.title" name="title"></slot>
        <span v-else-if="title">{{ title }}</span>
      </template>
      <template #icon>
        <slot name="icon"></slot>
      </template>
    </Navbar>
    <div
      ref="content" class="min-h-[calc(100vh-50px)] h-[calc(100vh-50px)] overflow-auto"

      @scroll="onScroll">
      <slot></slot>
    </div>
  </div>
</template>