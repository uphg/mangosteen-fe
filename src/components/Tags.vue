<script lang="ts" setup>
import type { Tag } from '@/types';
import IconPhPlusBold from '@/icons/PhPlusBold.vue'

const props = defineProps({
  items: Array as PropType<Array<Tag>>,
  selected: Number as PropType<number>
})

const emit = defineEmits(['update:selected'])

const onSelect = (tag: Tag) => {
  console.log('被点了')
  emit('update:selected', tag.id);
  console.log('props.selected')
  console.log(props.selected)
};
</script>


<template>
  <div class="flex flex-wrap">
    <div class="w-20% flex flex-col items-center justify-center mb-5">
      <div class="w-12.5 h-12.5 flex items-center justify-center bg-gray-100 border-rd-6.25">
        <IconPhPlusBold font="size-5" />
      </div>
      <div class="text-center" font="size-3">新增</div>
    </div>
    <div
      v-for="item, index in items" :key="index"
      class="w-20% flex flex-col items-center justify-center mb-5"
      @click="onSelect(item)"
    >
      <div
        class="w-12.5 h-12.5 flex items-center justify-center bg-gray-100 border-rd-6.25"
        :border="`1px solid ${selected === item.id ? 'blue' : 'transparent'}`"
      >{{ item.sign }}</div>
      <div class="text-center" font="size-3">{{ item.name }}</div>
    </div>
  </div>
</template>