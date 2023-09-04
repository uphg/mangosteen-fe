<script lang="ts" setup>
import Button from '@/components/Button.vue'
import Form from '@/components/Form.vue';
import FormItem from '@/components/FormItem';
import { useCountdown } from '@/hooks/useCountdown'
import { validate, type Rules, type ValidateErrors, validateItem } from '@/shared/validate'
import axios from 'axios'

type FormData = typeof formData.value
type FormKeys = keyof (FormData)

const formData = ref({
  email: '1834805770@qq.com',
  code: ''
})

const errors = ref<ValidateErrors<FormData>>({})

const { count, isCounting, startCount } = useCountdown({ from: 1 })

async function onClickSendValidationCode() {
  const response = await axios.post('/api/v1/validation_codes', { email: formData.value.email }).catch((e) => {
    console.log('e')
    console.log(e)
  })
  startCount()
}

function onSubmit(e: Event) {
  e.preventDefault()
  console.log('onSubmit')
  updateValidate()
}

function onBlur(key: FormKeys) {
  updateValidate(key)
}

function updateValidate(key?: FormKeys) {
  const rules: Rules<FormData> = {
    email: [
      { type: 'required', message: '必填项' },
      { type: 'pattern', regex: /.+@.+/, message: '必须是邮箱地址' },
    ],
    code: [
      { type: 'required', message: '验证码为必填项' }
    ]
  }
  if (key) {
    errors.value![key] = validateItem(formData.value, rules, key)
  } else {
    errors.value = validate(formData.value, rules)
  }
}
</script>

<template>
  <div class="bg-gray-100 min-h-100vh">
    <div class="flex flex-col items-center py-20">
      <div class="w-20 h-20 border-rd-10 bg-blue flex justify-center items-center">
        <span class="font-size-8">📚</span>
      </div>
      <div class="font-size-6 mt-2">账单喵</div>
    </div>
    <Form class="px-6 flex flex-col gap-7" @submit.prevent="onSubmit">
      <FormItem
        type="text"
        v-model:value="formData.email"
        placeholder="邮箱"
        :error="errors?.email"
        round
        @blur="onBlur('email')"/>
      <FormItem type="text" v-model:value="formData.code" placeholder="验证码" :error="errors?.code" round @blur="onBlur('code')">
        <template #suffix>
          <Button
            class="w-30"
            size="small"
            hue="primary"
            round
            :disabled="isCounting"
            @click="onClickSendValidationCode"
          >{{ isCounting ? `重新发送(${count})` : '获取验证码' }}</Button>
        </template>
      </FormItem>
      <FormItem type="button" hue="primary" class="w-100%" round>登录</FormItem>
      <FormItem type="button" class="w-100%">登录</FormItem>
    </Form>
  </div>
</template>