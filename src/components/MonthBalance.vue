<script lang="ts" setup>
import KeyboardArrowDown from '@/icons/KeyboardArrowDown.vue'
</script>

<template>
  <div
    class="w-100% h-40 border-rd-2 px-5 pt-4 c-white"
    bg-gradient="to-r from-blue-600 to-blue-500">
    <div class="flex">
      <span>2023-09</span>
      <KeyboardArrowDown class="font-size-6" />
    </div>
    <div class="font-size-13 font-500">4200.9</div>
    <div text="opacity-70 white size-3">月结余</div>
  </div>
</template>