import './assets/main.css'
import 'virtual:uno.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { Toast } from 'vant'
import { useUserStore } from './stores/user'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Toast)
app.mount('#app')

const user = useUserStore()

router.beforeEach((to, from) => {
  if (to.path === '/' || to.path.startsWith('/signin')) {
    return true
  }
  return user.refresh().then(
    () => true,
    () => '/signin?return_to=' + to.path
  )
})
