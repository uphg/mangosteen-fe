<script setup lang="ts">
import { ref } from 'vue'
import PhPlusBold from '../icons/PhPlusBold.vue'
import Sidebar from '@/components/Sidebar.vue';
import SidebarSwitch from '@/components/SidebarSwitch.vue';
import Layout from '@/layouts/default.vue'
import MonthBalance from '@/components/MonthBalance.vue';
import MonthExpenditure from '@/components/MonthExpenditure.vue';
import MonthIncome from '@/components/MonthIncome.vue';

const router = useRouter()

const list = ref([
  { text: '住房', value: -1000 },
  { text: '三餐', value: -100 },
  { text: '三餐', value: -100 },
  { text: '三餐', value: -100 },
  { text: '三餐', value: -100 },
  { text: '三餐', value: -100 },
  { text: '三餐', value: -100 },
  { text: '三餐', value: -100 },
  { text: '三餐', value: -100 },
  { text: '三餐', value: -100 },
  { text: '三餐', value: -100 },
  { text: '三餐', value: -100 },
  { text: '三餐', value: -100 },
  { text: '三餐', value: -100 },
  { text: '三餐', value: -100 },
  { text: '三餐', value: -100 },
  { text: '三餐', value: -100 },
  { text: '三餐', value: -100 },
  { text: '三餐', value: -100 },
  { text: '三餐', value: -100 },
  { text: '三餐', value: -100 },
  { text: '三餐', value: -100 },
])

function onClickCreate() {
  router.push('/create')
}
</script>

<template>
  <Layout title="记账喵">
    <template #icon>
      <SidebarSwitch/>
    </template>
    <div class="flex flex-col gap-6 px-6 pb-6">
      <section>
        <MonthBalance class="mt-1"/>
        <div class="mt-3 flex gap-4">
          <MonthExpenditure/>
          <MonthIncome/>
        </div>
      </section>
      <section class="h-40 border-rd-2 bg-white p-4 shadow-card">
        我是7日统计
      </section>
      <section>
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
  </Layout>
  <div class="w-12 h-12 border-rd-6 bg-blue fixed bottom-6 translate-x-[calc(50vw-24px)] flex justify-center items-center c-white font-size-5" @click="onClickCreate">
    <PhPlusBold />
  </div>
  <Sidebar/>
</template>
