import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'normalize.css';
import store from './Redux/store';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="page-container">
        <App />
      </div>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
