import '@babel/polyfill'

import * as sapper from '../__sapper__/client.js'
import { createClientStore } from './store.js'

sapper.start({
  target: document.querySelector('#sapper'),
  store: createClientStore
})
