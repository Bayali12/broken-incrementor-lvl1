import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';
import store from './ducks/store';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
}
