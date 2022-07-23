import { Component, App } from 'vue'

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

export declare const PiniaLogo: Component


/**
 * Vue 安装函数
 */
interface installFunc  {

  /**
   * 
   * @param {App}} vue实例
   * @param {boolean} reject 是否自动注入,而不是使用组件引入
   * @param {PiniaPropType} props 如果自动注入,设定的props
   */
  install: (vue: App, reject?: boolean, props?: PiniaPropType) => void
}

declare const PiniaLogoPlugin:installFunc

export default PiniaLogoPlugin
