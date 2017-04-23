/**
 * Created by Patryk on 2017-04-09.
 */

import { createStore, applyMiddleware, combineReducers, getInitialState } from 'redux'

import inputData from './inputData'
import checkboxData from './checkboxData'
import ReduxPromise from 'redux-promise'
const reducer = combineReducers({
  inputData,
  checkboxData
});

// const store = createStore(reducer, {}, applyMiddleware(thunkMiddleware));

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
export default createStoreWithMiddleware(reducer);
// export default store;