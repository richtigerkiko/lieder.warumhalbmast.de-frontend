import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Amplify } from 'aws-amplify'
import AmplifyVue from '@aws-amplify/ui-vue'
import awsExports from './aws-exports'

import 'quill/dist/quill.core.css'
import 'quill/dist/quill.bubble.css'
import 'quill/dist/quill.snow.css'

Amplify.configure(awsExports);

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-icons/font/bootstrap-icons.css"

import '@aws-amplify/ui-vue/styles.css';

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(AmplifyVue)
app.mount('#app')

import "bootstrap/dist/js/bootstrap.js"