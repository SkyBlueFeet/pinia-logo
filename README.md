# Pinia Dynamic Logo

![effect.gif](https://github.com/SkyBlueFeet/pinia-logo/blob/main/dist/effect.gif '效果图')

灵感来自于[piniajs/example-vue-3-vite](https://stackblitz.com/github/piniajs/example-vue-3-vite)

## Description

你可以非常简单的将这个可爱的宠物放在页面右下角,建议开发时使用

## Usage

用法很简单,你只需要引入组件后,使用Vue.use即可

```js
import PiniaLogo from 'pinia-logo'

const app = createApp(App)

// 第二个参数为注入,第三个参数为注入的组件props
app.use(PiniaLogo, true, {
  ...props
})

app.mount('#app')
```

默认情况下,组件会自动注入到视图,不再需要写组件标签,你也可以传入参数禁止自动注入,此时组件将会全局安装,你可以自行使用组件

```js
// main.ts
app.use(PiniaLogo,false)

// 你可以这样使用
// App.vue
<pinia-logo width="204" custom-class="custom-logo"></pinia-logo>
```

同样,你也可以单独引入组件

```js
import { PiniaLogo } from 'pinia-logo'
app.component('pinia-logo', PiniaLogo)
```

组件Props类型
```ts
type PiniaPropType = {
    /**
     * SVG宽
     */
  width: number | string

  /**
   * SVG高
   */
  height: number | string

  /**
   * 
   * 动画是否自动触发,如果是,每隔8s将会自动触发一次
   * @default true
   */
  auto: boolean

  /**
   * 手动触发动画的方式
   * @member LeftClick 左键点击时发生
   * @member Hover 鼠标移入时发生
   * @member None 任何情况下都不发生
   * @default 'none'
   */
  play: 'LeftClick' | 'Hover' | 'None'

  /**
   * 是否鼠标穿透,但是会导致鼠标事件无法发生
   * @default false
   */
  penetrate: boolean

  /**
   * 新增自定义类名
   */
  customClass: string

  /**
   * 是否自动定位到页面右下角,当组件自动注入到页面时,将会默认为true
   */
  autoFixed:boolean
}
```

## Refence

https://stackblitz.com/github/piniajs/example-vue-3-vite