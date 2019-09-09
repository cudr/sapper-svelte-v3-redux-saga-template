import '@babel/polyfill'
import * as sapper from '@sapper/app'

import { createClientStore } from './store'

createClientStore(__SAPPER__.preloaded[0].state)

sapper.start({
  target: document.querySelector('#sapper')
})
