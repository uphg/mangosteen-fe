<script lang="ts" setup>
import FluentTextAlignJustify  from '../icons/FluentTextAlignJustify24Filled.vue'
import { useSidebarStore } from '@/stores/sidebar';

const sidebar = useSidebarStore()

function toggleSidebar() {
  sidebar.setVisible(!sidebar.visible)
}
</script>

<template>
  <div class="font-size-5 flex items-center px-2 ml--2">
    <FluentTextAlignJustify @click="toggleSidebar"/>
  </div>
</template>