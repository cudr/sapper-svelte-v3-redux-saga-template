import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer'
import rootSaga from './saga'

const composeEnhancers = composeWithDevTools({})

const initRedux = state => {
  const sagaMiddleware = createSagaMiddleware()

  const enhancer =
    process.env.NODE_ENV === 'production'
      ? applyMiddleware(sagaMiddleware)
      : composeEnhancers(applyMiddleware(sagaMiddleware, logger))

  const store = createStore(reducer, state, enhancer)

  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(rootSaga)
  }

  return store
}

export default initRedux
