import Button from "./Button.vue"
import Input from "./Input.vue"

const FormItem = defineComponent({
  inheritAttrs: false,
  props: {
    label: String as PropType<string>,
    value: [String, Number] as PropType<string | number>,
    placeholder: [String, Number] as PropType<string | number>,
    type: String as PropType<'text' | 'textarea' | 'button'>,
    error: String as PropType<string>,
    round: Boolean as PropType<boolean>,
    size: {
      type: String as PropType<'medium' | 'small'>,
      default: 'medium'
    }
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
        case 'button':
          return (
            <Button size={props.size}>{context.slots.default?.()}</Button>
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
            {h(Content.value!, context.attrs)}
            {props.error && <div class={['absolute font-size-3 c-red-500 pt-0.5', props.round && 'px-5']}>{props.error}</div>}
          </div>
        </label>
      </div>
    )
  }
})

export default FormItem
