import { all } from 'redux-saga/effects';

import { counterSaga } from './sagas/counterSage';

export default function* rootSaga() {
  yield all([counterSaga()]);
}
