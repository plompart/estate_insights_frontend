/**
 * Created by Patryk on 2017-04-09.
 */

const inputData = (state = {}, action) => {
  switch (action.type) {
    case 'CHANGE_INPUT_DATA':
      return {
        ...state,
        [action.prop]: action.value
      };
    case 'SUBMIT_DATA':

      return {
        ...state,
        wycena: action.payload.data
      };

    default:
      return state
  }
};

export default inputData;
