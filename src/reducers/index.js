/**
 * Created by Patryk on 2017-04-09.
 */

import {createStore, applyMiddleware, combineReducers} from 'redux'

import valuation from './valuation'
import serverData from './serverData'
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
  number_of_floors: '',
  buildingType: '',
  development_state: '',
  heating: '',
  market: '',
  material: '',
  windows_material: '',
  build_year: '',
};

const bubbleGraph = {
  x: 'area',
  y: 'price',
};

const reducer = combineReducers({
  coordinates,
  valuation,
  serverData,
  form: combineForms({
    inputForm,
    bubbleGraph,
  },'form'),
});

// const store = createStore(reducer, {}, applyMiddleware(thunkMiddleware));

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
export default createStoreWithMiddleware(reducer);