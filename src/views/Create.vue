<script lang="ts" setup>
import IconPhXBold from '@/icons/PhXBold.vue'
import IconCalendarMonthRounded from '@/icons/CalendarMonthRounded.vue'
import { evaluate, number } from 'mathjs'

const router = useRouter();
const amount = ref<string>('0') 
const active = ref('')
const tabs = ['支出', '收入']

const quarter = 'w-[calc(25%-6px)]'

const buttons = [
  { text: 1, width: quarter, onClick() {
    console.log('被点了')
    appendText(1) 
  } },
  { text: 2, width: quarter, onClick() { appendText(2) } },
  { text: 3, width: quarter, onClick() { appendText(3) } },
  { text: '删除', width: quarter, onClick() { appendText('delete') } },
  
  { text: 4, width: quarter, onClick() { appendText(4) } },
  { text: 5, width: quarter, onClick() { appendText(5) } },
  { text: 6, width: quarter, onClick() { appendText(6) } },
  { text: '-', width: quarter, onClick() { appendText('-') } },

  { text: 7, width: quarter, onClick() { appendText(7) } },
  { text: 8, width: quarter, onClick() { appendText(8) } },
  { text: 9, width: quarter, onClick() { appendText(9) } },
  { text: '+', width: quarter, onClick() { appendText('+') } },

  { text: 0, width: 'w-[calc(50%-4px)]', onClick() { appendText(0) } },
  { text: '.', width: quarter, onClick() { appendText('.') } },
  { text: '保存', width: quarter, onClick() {
    const a = amount.value.replace(/[-+]$/, '')
    const result = evaluate(a)
    console.log('result')
    console.log(result)
  } },
]

function appendText(n: string | number) {
  if (amount.value === '0' && typeof n === 'number') {
    amount.value = `${n}`
    return
  }

  if(/\.[0-9]{2}$/.test(amount.value) && /[0-9]/.test(`${n}`)) return

  switch(n) {
    case 'delete':
      if (amount.value.length > 1) {
        amount.value = amount.value.slice(0, amount.value.length - 1)
      } else {
        amount.value = '0'
      }
      break
    case '0':
      if (/(0)$/.test(amount.value))
      break
    case '-':
    case '+':
      if (/[-+]$/.test(amount.value)) break
      amount.value = evaluate(amount.value) + n
      break
    case '.':
      if (/[0-9]*\.[0-9]*$/.test(amount.value))
      break
    default:
      amount.value += n
  }
}
</script>

<template>
  <van-tabs v-model:active="active" swipeable>
    <template #nav-left>
      <div class="flex ml-2 w-9.5 justify-center items-center" font="size-4.5">
        <IconPhXBold/>
      </div>
    </template>
    <template #nav-right>
      <div class="mr-2 w-9.5"></div>
    </template>
    <van-tab v-for="item, index in tabs" :title="item" :key="index" >
      <div class="h-[calc(100vh-300px-45px)] px-4 py-3 overflow-auto">
        <p v-for="n in 20" :key="`${index}-${n}`">{{ item }} {{ n }} 内容</p>
      </div>
    </van-tab>
  </van-tabs>
  <div class="h-75 px-2 pt-2" border-t="1 solid cool-gray-200">
    <div class="h-12.5 mb-2 flex items-center justify-between">
      <div class="flex items-center">
        <IconCalendarMonthRounded font="size-6"/>
        <span class="ml-1 mt-1">2023-01-02</span>
      </div>
      <div class="c-green" font="size-6">
        {{ amount }}
      </div>
    </div>
    <div class="h-58 flex flex-wrap justify-between">
      <Button v-for="item in buttons" :key="item.text" :class="[item.width]" @click="item.onClick">{{ item.text }}</Button>
    </div>
  </div>
  <!-- <button @click="onClick">点击返回</button> -->
</template>