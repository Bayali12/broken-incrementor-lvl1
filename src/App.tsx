import { useDispatch, useSelector } from 'react-redux';

import { Value } from './components/Value';
import { Button } from './components/Button';
import {
  incrementAsync,
  decrementAsync,
  incrementByValueAsync,
  decrementByValueAsync,
  setInput,
} from './ducks/slices/counterSlice';
import { RootState } from './ducks/store';

import './styles.css';

export default function App() {
  const isLoading = useSelector((state: RootState) => state.isLoading);
  const inputValue = useSelector((state: RootState) => state.input);

  const dispatch = useDispatch();
  const increment = () => dispatch(incrementAsync());
  const decrement = () => dispatch(decrementAsync());
  const incrementByValue = () => dispatch(incrementByValueAsync(inputValue));
  const decrementByValue = () => dispatch(decrementByValueAsync(inputValue));
  const setInputValue = (value: number) => dispatch(setInput(value));

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <div className="counterWrapper">
        <Button
          className="btn rounded"
          text="+"
          onClick={increment}
          disabled={isLoading}
        />
        {isLoading ? <div className="lds-dual-ring"></div> : <Value />}
        <Button
          className="btn rounded"
          text="-"
          onClick={decrement}
          disabled={isLoading}
        />
      </div>
      <div className="valueWrapper">
        <input
          className="input"
          type="number"
          placeholder="изменить на значение"
          onChange={({ target }) => {
            setInputValue(Number(target.value));
          }}
        />
        <div>
          <Button
            text="Увеличить на значение"
            className="btn"
            onClick={() => {
              incrementByValue();
            }}
            disabled={isLoading}
          />
          <Button
            className="btn"
            text="Уменьшить на значение"
            onClick={() => {
              decrementByValue();
            }}
            disabled={isLoading}
          />
        </div>
      </div>
    </div>
  );
}
