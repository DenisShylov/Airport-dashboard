import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import reportWebVitals from './reportWebVitals';
import 'normalize.css';
import store from './Redux/store';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <div className="page-container">
          <Routes>
            <Route path="/departures" element={<App />} />
            <Route path="/arrivals" element={<App />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
