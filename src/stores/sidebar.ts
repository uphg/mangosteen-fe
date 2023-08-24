import { defineStore } from 'pinia'

type State = {
  visible: boolean
}

type Actions = {
  setVisible(value: boolean): void
}

export const useSidebarStore = defineStore<string, State, {}, Actions>('sidebar', {
  state: () => ({
    visible: false,
  }),
  actions: {
    setVisible(value: boolean) {
      this.visible = value
    }
  }
})
