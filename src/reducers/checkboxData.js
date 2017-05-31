/**
 * Created by Patryk on 2017-04-09.
 */

const checkboxData = (state = {equipmentNames: [], checked: {}}, action) => {
  switch (action.type) {
    case 'GET_EQUIPMENT_NAMES':
      return {
        ...state,
        equipmentNames: action.payload.data,
      };
    case 'CHANGE_CHECKBOX_DATA':
      return {
        ...state,
        checked: {
          [action.prop]: action.value
        }
      };
    default:
      return state
  }
};

export default checkboxData;
