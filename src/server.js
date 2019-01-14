import '@babel/polyfill'

import 'dotenv/config'
import sirv from 'sirv'
import polka from 'polka'
import compression from 'compression'
import * as sapper from '../__sapper__/server.js'
import { createServerStore } from './store.js'

const { PORT, NODE_ENV } = process.env
const dev = NODE_ENV === 'development'

polka()
  .use(
    compression({ threshold: 0 }),
    sirv('static', { dev }),
    sapper.middleware({
      store: createServerStore
    })
  )
  .listen(PORT, err => {
    if (err) console.log('error', err)
  })
