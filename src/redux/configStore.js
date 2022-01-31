import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

const reducer = combineReducers({
  
});

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware),
);

export default store;
