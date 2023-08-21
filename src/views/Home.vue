<script setup lang="ts">
import { ref } from 'vue'
import FluentTextAlignJustify  from '../icons/FluentTextAlignJustify24Filled.vue'
import PhPlusBold from '../icons/PhPlusBold.vue'

const list = ref([
  { text: '住房', value: -1000 },
  { text: '三餐', value: -100 },
  { text: '三餐', value: -100 },
  { text: '三餐', value: -100 },
  { text: '三餐', value: -100 },
  { text: '三餐', value: -100 },
])
</script>

<template>
  <main>
    <div class="flex flex-col p-6 gap-4">
      <div class="flex justify-center relative">
        <h2 class="font-size-4 c-cool-gray-300">日常账本 | 7月</h2>
        <div class="font-size-5 absolute top-0 left-0 bottom-0 flex items-center px-2 ml--2"><FluentTextAlignJustify /></div>
      </div>
      <section>
        <div class="flex flex-col">
          <span class="font-size-3 c-cool-gray-300">月支出</span>
          <span class="font-size-10 font-500">{{ '1599.12' }}</span>
        </div>
        <div class="flex pt-2">
          <div class="w-50% flex flex-col">
            <span class="font-size-3 c-cool-gray-300">月收入</span>
            <span class="font-size-5">{{ 800 }}</span>
          </div>
          <div class="w-50% flex flex-col">
            <span class="font-size-3 c-cool-gray-300">月结余</span>
            <span class="font-size-5">{{ 200 }}</span>
          </div>
        </div>
      </section>
      <section class="h-40 border-rd-2 bg-white p-4 shadow-card">
        我是7日统计
      </section>
      <section>
        <!-- <h2 class="font-size-4 m-b-1">08.17 今天</h2> -->
        <div class="flex flex-col gap-4 border-rd-2 bg-white p-4 shadow-card">
          <div v-for="item, index in list" :key="index" class="flex items-center ">
            <div class="flex items-center justify-center w-10 h-10 border-rd-5 bg-cool-gray-100">
              <span>🎁</span>
            </div>
            <div class="m-l-3 w-[calc(100%-36px)]">
              <div class="flex justify-between">
                <span>Figma</span>
                <span>-$100.00</span>
              </div>
              <div>
                <span class="font-size-3 c-cool-gray-300">2023年6月1日</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
    <div class="w-12 h-12 border-rd-6 bg-blue fixed bottom-6 translate-x-[calc(50vw-24px)] flex justify-center items-center c-white font-size-5">
      <PhPlusBold />
    </div>
  </main>
</template>
