/* eslint-disable vue/multi-word-component-names */
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import Loading from './components/common/Loading.vue';

const app = createApp(App)

app.use(createPinia())
// 路由注册
app.use(router)
// 全局组件注册
app.component('Loading', Loading);

app.mount('#app')
