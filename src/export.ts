import { App, createApp } from 'vue'
import PiniaLogo from './components/PiniaLogo.vue'
import { inject } from './inject'

export { PiniaLogo }

export default {
  install (vue: App, reject = true, props: any) {
    if (reject) {
      inject(vue, PiniaLogo, {
        autoFixed: true,
        ...props
      })
    } else {
      vue.component('pinia-logo', PiniaLogo)
    }
  }
}
