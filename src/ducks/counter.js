import { createAction, handleActions } from 'redux-actions'
import { all, call, put, delay, select, takeEvery } from 'redux-saga/effects'
import { createSelector } from 'reselect'
import { APP_NAME } from '@config'

/**
 * Constants
 * */
export const MODULE_NAME = 'counter'
const prefix = `${APP_NAME}/${MODULE_NAME}`

export const COUNTER_INCR = `${prefix}/COUNTER_INCR`
export const COUNTER_DECR = `${prefix}/COUNTER_DECR`
export const CLICKS_INCR = `${prefix}/CLICKS_INCR`

/**
 * Action Creators
 * */
export const counterIncr = createAction(COUNTER_INCR)
export const counterDecr = createAction(COUNTER_DECR)
export const clicksIncr = createAction(CLICKS_INCR)

/**
 * Reducer
 * */

export default handleActions(
  {
    [counterIncr]: state => ({ ...state, counter: state.counter + 1 }),
    [counterDecr]: state => ({ ...state, counter: state.counter - 1 }),
    [clicksIncr]: state => ({ ...state, clicks: state.clicks + 1 })
  },
  {
    counter: 0,
    clicks: 0
  }
)

/**
 * Selectors
 * */

export const stateSelector = state => state && state[MODULE_NAME]

export const counterSelector = createSelector(
  stateSelector,
  state => state.counter
)

export const clicksSelector = createSelector(
  stateSelector,
  state => state.clicks
)

/**
 * Sagas
 * */
function* incrChange() {
  // emulate slow request
  yield delay(2000)
  yield put(clicksIncr())
}

export function* saga() {
  yield all([
    takeEvery(COUNTER_INCR, incrChange),
    takeEvery(COUNTER_DECR, incrChange)
  ])
}
