import { PayloadAction, createAction, createSlice } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
  isLoading: boolean;
  input: number;
}

const initialState: CounterState = {
  value: 0,
  isLoading: false,
  input: 0,
};

export const incrementAsync = createAction('counter/increment');
export const decrementAsync = createAction('counter/decrement');
export const incrementByValueAsync = createAction<number>('counter/incrementByValue');
export const decrementByValueAsync = createAction<number>('counter/decrementByValue');

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    operationLoading: (state) => {
      state.isLoading = true;
    },
    operationSuccess: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
      state.isLoading = false;
    },
    setInput: (state, action) => {
      state.input = action.payload;
    },
  },
});

export const { operationLoading, operationSuccess, setInput } =
  counterSlice.actions;

export default counterSlice.reducer;
