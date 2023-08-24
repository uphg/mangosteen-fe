<script lang="ts" setup>
import Income from '@/icons/Income.vue'
</script>


<template>
  <div
    class="w-100% h-20 border-rd-2 px-5 py-4 flex items-center"
    bg-gradient="to-r from-emerald-400 to-emerald-500"
    text="white"
  >
    <div class="flex font-size-7.5 opacity-85">
      <Income/>
    </div>
    <div class="ml-3 w-[calc(100%-42px)]">
      <div>3025.20</div>
      <div text="opacity-70 white size-3">月收入</div>
    </div>
  </div>
</template>