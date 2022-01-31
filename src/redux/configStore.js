import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


const reducer = combineReducers({
  
});

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware),
);

export default store;
