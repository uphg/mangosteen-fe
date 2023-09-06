<script lang="ts" setup>
import Button from '@/components/Button.vue';
import Form from '@/components/Form.vue';
import FormItem from '@/components/FormItem';
import { useBool } from '@/hooks/useBool';
import { useCountdown } from '@/hooks/useCountdown'
import { http } from '@/shared/http';
import { validate, type Rules, type ValidateErrors, hasError } from '@/shared/validate'
import 'vant/es/toast/style';

type FormData = typeof formData.value
type FormKeys = keyof (FormData)

const rules: Rules<FormData> = {
  email: [
    { type: 'required', message: '必填项' },
    { type: 'pattern', regex: /.+@.+/, message: '必须是邮箱地址' },
  ],
  code: [
    { type: 'required', message: '验证码为必填项' }
  ]
}

const formData = ref({
  email: '1834805770@qq.com',
  code: ''
})

const errors = ref<ValidateErrors<FormData>>({})

const router = useRouter()
const route = useRoute()

const { bool: validateCodeDisabled, on: disabled, off: enable } = useBool()
const { count, isCounting, startCount } = useCountdown({ from: 1 })

async function onClickSendValidationCode() {
  disabled()
  const response = await http.post('/validation_codes', { email: formData.value.email }).catch(onError).finally(enable)
  startCount()
}

function onError(error: any) {
  if (error.response.status === 422) {
    Object.assign(errors.value, error.response.data.errors)
  }
  throw error
}

async function onSubmit(e: Event) {
  console.log('onSubmit')
  updateValidate()
  if (hasError(errors.value)) return

  const response = await http.post<{ jwt: string }>('/session', { email: formData.value.email, code: formData.value.code }).catch(onError)
  localStorage.setItem('jwt', response!.data.jwt)
  
  const returnTo = route.query.return_to?.toString()
  router.push(returnTo ?? '/')
}

function updateValidate(key?: FormKeys) {
  Object.assign(errors.value, validate(formData.value, rules))
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
        :error="errors?.email?.[0]"
        round/>
      <FormItem type="text" v-model:value="formData.code" placeholder="验证码" :error="errors?.code?.[0]" round>
        <template #suffix>
          <Button
            class="w-30"
            size="small"
            hue="primary"
            round
            :disabled="validateCodeDisabled || isCounting"
            @click="onClickSendValidationCode"
          >{{ isCounting ? `重新发送(${count})` : '获取验证码' }}</Button>
        </template>
      </FormItem>
      <FormItem type="submit" hue="primary" class="w-100%" round>登录</FormItem>
    </Form>
  </div>
</template>