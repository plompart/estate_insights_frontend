/**
 * Created by Patryk on 2017-04-09.
 */

const valuation = (state = {}, action) => {
  switch (action.type) {
    case 'SUBMIT_DATA':
      return {
        ...state,
        valuation: action.payload.data
      };
    default:
      return state
  }
};

export default valuation;
