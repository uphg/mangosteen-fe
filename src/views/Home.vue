<script setup lang="ts">
import { ref } from 'vue'

const list = ref([
  { text: '住房', value: -1000 },
  { text: '三餐', value: -100 },
])
</script>

<template>
  <main class="">
    <div>
      <div class="h-20 bg-cyan-500"></div>
      <div class="h-20" style="background: linear-gradient(#06b6d4, rgba(0, 0, 0, 0));"></div>
    </div>
    <div class="flex flex-col p-4 gap-4 m-t--40">
      <h2 class="font-size-5 c-white">日常账本</h2>
      <section class="h-40 border-rd-3 bg-white p-4">
        我是7日统计
      </section>
      <section class="h-20 border-rd-3 bg-white p-4 flex">
        <div class="w1/3">
          <div class="font-size-3.5 c-neutral-300 text-center">支出</div>
          <div class="font-size-4 c-red text-center">500</div>
        </div>
        <div class="w1/3">
          <div class="font-size-3.5 c-neutral-300 text-center">收入</div>
          <div class="font-size-4 c-green text-center">500</div>
        </div>
        <div class="w1/3">
          <div class="font-size-3.5 c-neutral-300 text-center">结余</div>
          <div class="font-size-4 text-center">500</div>
        </div>
      </section>
      <section class="border-rd-3 bg-white p-4">
        <h2 class="font-size-4 font-700 p-b-2">08.17 今天</h2>
        <div class="flex flex-col gap-2">
          <div v-for="item, index in list" :key="index" class="flex flex-items-center ">
            <span class="h-1.5 w-1.5 border-rd-0.75 bg-light-blue-200"></span>
            <span class="m-l-2">{{ item.text }}</span>
            <span class="m-l-auto">{{ item.value }}</span>
          </div>
        </div>
      </section>
      <div class="w-4 h-4 border-rd-2 bg-">

      </div>
    </div>
  </main>
</template>
