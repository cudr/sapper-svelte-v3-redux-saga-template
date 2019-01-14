import { END } from 'redux-saga'
import { bindActionCreators } from 'redux'
import initRedux from '@redux'

let reduxStore = initRedux()

let store = {
  subscribe: fn => {
    fn(reduxStore.getState())
    return reduxStore.subscribe(() => fn(reduxStore.getState()))
  }
}

const bindAction = action => bindActionCreators(action, reduxStore.dispatch)

const createClientStore = initialState => {
  reduxStore.runSagaTask()

  reduxStore.dispatch({
    type: 'REPLACE_STATE',
    payload: initialState
  })

  return initialState
}

const createServerStore = req => {
  reduxStore = initRedux()

  reduxStore.runSagaTask()

  store.completeSaga = async () => {
    reduxStore.dispatch(END)
    await reduxStore.sagaTask.toPromise()
  }

  store.get = reduxStore.getState

  store.isServer = true

  return store
}

export { createClientStore, createServerStore, bindAction, store }
