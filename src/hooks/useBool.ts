export function useBool(initialValue: boolean = false) {
  const bool = ref(initialValue)

  return {
    bool,
    on: () => bool.value = true,
    off: () => bool.value = false,
    trigger: () => bool.value = !bool.value
  }
}