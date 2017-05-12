/**
 * Created by Patryk on 2017-05-12.
 */

const coordinates = (state = {lat: 50.0645219, lng: 19.9619114}, action) => {
  switch (action.type) {
    case 'SUBMIT_COORDINATES':
      return {
        ...state,
        lat: action.payload.data.results[0].geometry.location.lat,
        lng: action.payload.data.results[0].geometry.location.lng,

      };
    default:
      return state
  }
};

export default coordinates;
