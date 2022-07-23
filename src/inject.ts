import { App, createApp, h } from 'vue'

/**
 * @link https://blog.csdn.net/qq_41985464/article/details/104793036
 * @returns
 */
function createNonceStr () {
  let chars = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ]
  let nums = ''
  for (let i = 0; i < 16; i++) {
    //这里是几位就要在这里不改变
    let id = parseInt((Math.random() * 61).toString())
    nums += chars[id]
  }
  return nums
}

export function inject (vue: App, component: any, props?: any) {
  const div = document.createElement('div', {})

  div.id = 'pinia-' + createNonceStr()
  document.body.appendChild(div)

  const RootComponent = {
    render () {
      return h(component, props)
    }
  }

  const logoApp = createApp(RootComponent)

  logoApp.mount(`#${div.id}`)
}
