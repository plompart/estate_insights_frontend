/**
 * Created by Patryk on 2017-04-09.
 */

import { createStore, applyMiddleware, combineReducers, getInitialState } from 'redux'

import inputData from './inputData'
import checkboxData from './checkboxData'
import ReduxPromise from 'redux-promise'
import {combineForms} from "react-redux-form";

const location = {
  city: '',
  road: '',
  houseNumber: ''
};

const mainInfo = {
  area: '',
  roomNumber: '',
  floor: '',
  buildingType: ''
};

const inputForm = {
  city: '',
  road: '',
  houseNumber: '',
  area: '',
  roomNumber: '',
  floor: '',
  buildingType: 'blok',
};

const reducer = combineReducers({
  inputData,
  checkboxData,
  form: combineForms({
      inputForm
  },'form'),
});

// const store = createStore(reducer, {}, applyMiddleware(thunkMiddleware));

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
export default createStoreWithMiddleware(reducer);