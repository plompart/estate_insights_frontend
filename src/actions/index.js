/**
 * Created by Patryk on 2017-04-09.
 */

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
