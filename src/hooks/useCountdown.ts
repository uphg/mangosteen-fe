type CountdownOptions = { from?: number, to?: number }

export function useCountdown(options?: CountdownOptions) {
  const { from = 60, to = 0 } = options ?? {}
  const timer = ref<number | null>(null)
  const count = ref<number>(from)
  const isCounting = computed(() => !!timer.value)

  function startCount() {
    timer.value = setInterval(() => {
      count.value -= 1
      if (count.value === to) {
        clearInterval(timer.value!)
        timer.value = null
        count.value = from
      }
    }, 1000)
  }

  return {
    isCounting,
    startCount,
    count
  }
}