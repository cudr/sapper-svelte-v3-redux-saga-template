import { combineReducers } from 'redux'

import counterReducer, { MODULE_NAME as counterModule } from '@ducks/counter'

const appReducer = combineReducers({
  [counterModule]: counterReducer
})

const reducer = (state, action) => {
  if (action.type === 'REPLACE_STATE') {
    state = action.payload
  }

  return appReducer(state, action)
}

export default reducer
