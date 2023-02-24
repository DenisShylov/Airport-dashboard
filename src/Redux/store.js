import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import FlightReducer from './FlightReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  FlightReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
