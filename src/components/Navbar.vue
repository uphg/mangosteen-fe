<template>
  <div class="flex justify-center items-center relative h-12.5 px-6">
    <h2 class="font-size-4 c-cool-gray-400">
      <slot></slot>
    </h2>
    <div class="absolute top-0 left-6 bottom-0 flex items-center">
      <slot name="icon"></slot>
    </div>
  </div>
</template>