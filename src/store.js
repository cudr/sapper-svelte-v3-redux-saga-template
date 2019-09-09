import { END } from 'redux-saga'
import { bindActionCreators } from 'redux'
import initRedux from './redux'

let reduxStore

let store = {
  subscribe: fn => {
    fn(reduxStore.getState())
    return reduxStore.subscribe(() => fn(reduxStore.getState()))
  },
  completeSaga: async () => {
    reduxStore.dispatch(END)
    await reduxStore.sagaTask.toPromise()
  }
}

const bindAction = action => bindActionCreators(action, reduxStore.dispatch)

const createStore = () => {
  reduxStore.runSagaTask()

  store.getState = reduxStore.getState
}

const createServerStore = req => {
  reduxStore = initRedux()

  createStore()
}

const createClientStore = initialState => {
  reduxStore = initRedux(initialState)

  createStore()
}

export { createClientStore, createServerStore, bindAction, store }
