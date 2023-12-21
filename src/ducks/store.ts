import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import counterReducer from './slices/counterSlice';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: counterReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export default store;
