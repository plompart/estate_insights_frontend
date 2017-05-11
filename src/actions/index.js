/**
 * Created by Patryk on 2017-04-09.
 */
import axios from 'axios';
import store from '../reducers/index'
export const submitData = () => {
  let request = axios.get(`http://localhost:5000/predict?` +
    `area=${store.getState().inputData.area}&` +
    `floor=${store.getState().inputData.floor}&` +
    `rooms=${store.getState().inputData.roomNumber}`
  );
  return {
    type: 'SUBMIT_DATA',
    payload: request
  }
};

export const changeInputData = (prop, value) => {

  return {
    type: 'CHANGE_INPUT_DATA',
    prop: prop,
    value: value
  }
};

export const changeCheckboxData = (prop, value) => {
  return {
    type: 'CHANGE_CHECKBOX_DATA',
    prop: prop,
    value: value
  }
};
