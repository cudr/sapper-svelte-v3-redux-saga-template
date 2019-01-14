import { all } from 'redux-saga/effects'
import { saga as counterSaga } from '@ducks/counter'

export default function*() {
  yield all([counterSaga()])
}
