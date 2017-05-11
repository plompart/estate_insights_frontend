/**
 * Created by Patryk on 2017-04-09.
 */
import axios from 'axios';
import store from '../reducers/index'

export const submitData = () => {
  let request = axios.get(`http://localhost:5000/predict?` +
    `area=${store.getState().form.inputForm.area}&` +
    `floor=${store.getState().form.inputForm.floor}&` +
    `rooms=${store.getState().form.inputForm.roomNumber}`
  );
  return {
    type: 'SUBMIT_DATA',
    payload: request
  }
};

export const changeCheckboxData = (prop, value) => {
  return {
    type: 'CHANGE_CHECKBOX_DATA',
    prop: prop,
    value: value
  }
};
