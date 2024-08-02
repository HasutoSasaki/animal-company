

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import '@/assets/styles/main.scss'

//components
import CommonTitle from '@/components/common/CommonTitle.vue'
import CommonLogo from '@/components/common/CommonLogo.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('CommonTitle', CommonTitle)

app.component('CommonLogo', CommonLogo)

app.mount('#app')
