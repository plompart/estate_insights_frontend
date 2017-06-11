/**
 * Created by Patryk on 2017-04-09.
 */

let initialState = {
  equipmentNames: [],
  checked: {},
  development_state: [],
  heating: [],
  market: [],
  material: [],
  type: [],
  windows_material: [],
};

const serverData = (state = initialState, action) => {
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
          ...state.checked,
          [action.prop]: action.value
        }
      };
    case 'ADDITIONAL_INFO':
      return {
        ...state,
        development_state: action.payload.data.development_state,
        heating: action.payload.data.heating,
        market: action.payload.data.market,
        material: action.payload.data.material,
        type: action.payload.data.type,
        windows_material: action.payload.data.windows_material,
      };
    default:
      return state
  }
};

export default serverData;
