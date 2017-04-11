/**
 * Created by Patryk on 2017-04-09.
 */

const inputData = (state = {}, action) => {
  switch (action.type) {
    case 'CHANGE_INPUT_DATA':
      return { ...state, [action.prop]: action.value };
    default:
      return state
  }
};

export default inputData;
