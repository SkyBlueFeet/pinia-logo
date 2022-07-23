import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// import PiniaLogo from './export'
// @ts-ignore
import PiniaLogo  from '../dist/pinia-logo.es.js'


createApp(App)
  .use(PiniaLogo, true, {
    play: 'LeftClick',
    customClass:'test'
  })
  .mount('#app')
