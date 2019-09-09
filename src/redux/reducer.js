import { combineReducers } from 'redux'

import counterReducer, { MODULE_NAME as counterModule } from '../ducks/counter'

export default combineReducers({
  [counterModule]: counterReducer
})
