import { put, select, takeEvery } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

import { operationLoading, operationSuccess } from '../slices/counterSlice';
import { makeOperation } from '../../api';
import { selectCurrenValue } from '../selectors';

function* handleOperationSaga(payload: number) {
  try {
    yield put(operationLoading());
    const currentValue: number = yield select(selectCurrenValue);
    const res: number = yield makeOperation(currentValue, payload);
    yield put(operationSuccess(res));
  } catch (error) {
    console.error(error);
  }
}

function* incrementSaga() {
  yield handleOperationSaga(1);
}

function* decrementSaga() {
  yield handleOperationSaga(-1);
}

function* incrementByValueSaga({ payload }: PayloadAction<number>) {
  yield handleOperationSaga(payload);
}

function* decrementByValueSaga({ payload }: PayloadAction<number>) {
  yield handleOperationSaga(-payload);
}

export function* counterSaga() {
  yield takeEvery('counter/increment', incrementSaga);
  yield takeEvery('counter/decrement', decrementSaga);
  yield takeEvery('counter/incrementByValue', incrementByValueSaga);
  yield takeEvery('counter/decrementByValue', decrementByValueSaga);
}
