/**
 * Created by Patryk on 2017-04-09.
 */

const valuation = (state = {}, action) => {
  switch (action.type) {
    case 'SUBMIT_DATA':
      return {
        ...state,
        price: action.payload.data.price,
        price_per_sqm: action.payload.data.price_per_sqm,
        mean_price_per_sqm: action.payload.data.mean_price_per_sqm
      };
    case 'hist_area':
      return {
        ...state,
        hist_area: action.payload.data
      };
    case 'hist_price_per_sqm':
      return {
        ...state,
        hist_price_per_sqm: action.payload.data
      };
    default:
      return state
  }
};

export default valuation;
