
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import userReducer from './users-reducer';
import carsReducer from './car-reducer';
import reservationsReducer from './reservations-reducer';

const reducer = combineReducers({
  userReducer,
  carsReducer,
  reservationsReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));
export default store;
