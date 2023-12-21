import { RootState } from './store';

export const selectCurrenValue = (state: RootState): number => state.value;
