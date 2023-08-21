<script lang="ts" setup>
import Input from '@/components/Input.vue'
import Button from '@/components/Button.vue'
import FormItem from '@/components/FormItem';

</script>

<template>
  <div class="bg-gray-100 min-h-100vh">
    <div class="flex flex-col items-center py-20">
      <div class="w-20 h-20 border-rd-10 bg-blue flex justify-center items-center">
        <span class="font-size-8">📚</span>
      </div>
      <div class="font-size-6 mt-2">账单猫</div>
    </div>
    <div class="px-6 flex flex-col gap-7">
      <FormItem type="text" placeholder="邮箱" round/>
      <FormItem type="text" placeholder="验证码" round error="我是一个 error">
        <template #suffix>
          <Button size="small">发送验证码</Button>
        </template>
      </FormItem>
      <div>
        <Button class="w-100%">登录</Button>
      </div>
    </div>
  </div>
</template>