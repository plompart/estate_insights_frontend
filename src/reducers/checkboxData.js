/**
 * Created by Patryk on 2017-04-09.
 */

const checkboxData = (state = {}, action) => {
  switch (action.type) {
    case 'CHANGE_CHECKBOX_DATA':
      return { ...state, [action.prop]: action.value };
    default:
      return state
  }
};

export default checkboxData;
