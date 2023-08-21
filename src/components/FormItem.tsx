import Button from "./Button.vue"
import Input from "./Input.vue"

const FormItem = defineComponent({
  props: {
    label: String as PropType<string>,
    value: [String, Number] as PropType<string | number>,
    placeholder: [String, Number] as PropType<string | number>,
    type: String as PropType<'text' | 'textarea' | 'button'>,
    error: String as PropType<string>,
    round: Boolean as PropType<boolean>
  },
  setup(props, context) {

    const Content = computed(() => {
      switch (props.type) {
        case 'text':
          return (
            <Input
              value={props.value}
              placeholder={props.placeholder}
              onInput={onInput}
              round={props.round}
            >{{ suffix: context.slots.suffix }}</Input>
          )
      }
    })

    function onInput(e: Event) {
      context.emit('update:value', (e.target as HTMLInputElement).value)
    }

    return () => (
      <div>
        <label>
          {props.label && <div class={['pb-2 font-size-3', props.round && 'px-5']}>{props.label}</div>}
          <div class="relative">
            {Content.value}
            {props.error && <div class={['absolute font-size-3 c-red-500 pt-0.5', props.round && 'px-5']}>{props.error}</div>}
          </div>
        </label>
      </div>
    )
  }
})

export default FormItem
