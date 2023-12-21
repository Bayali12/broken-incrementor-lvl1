import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../ducks/store';

export const Value: React.FC = () => {
  const value = useSelector((state: RootState) => state.value);
  return <div className="counter">{value}</div>;
};
