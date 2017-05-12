/**
 * Created by Patryk on 2017-04-09.
 */

import {createStore, applyMiddleware, combineReducers} from 'redux'

import valuation from './valuation'
import checkboxData from './checkboxData'
import ReduxPromise from 'redux-promise'
import {combineForms} from "react-redux-form";
import coordinates from "./coordinates";

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
  coordinates,
  valuation,
  checkboxData,
  form: combineForms({
      inputForm
  },'form'),
});

// const store = createStore(reducer, {}, applyMiddleware(thunkMiddleware));

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
export default createStoreWithMiddleware(reducer);