import { defineStore } from 'pinia'
import { http } from '@/shared/http'
import type { Resource, User } from '@/types'

type Actions = {
  setUser(value: User): void
  refresh(): Promise<User>
}

export const useUserStore = defineStore<string, User, {}, Actions>('user', {
  state: () => ({
    id: null,
    email: null
  }),
  actions: {
    setUser(user: User) {
      user.id && (this.id = user.id)
      user.email && (this.email = user.email)
    },
    async refresh() {
      console.log(1.1)
      const response = await http.get<Resource<User>>('/me')
      const { resource: user } = response.data
      this.setUser(user)
      return user
    }
  }
})
