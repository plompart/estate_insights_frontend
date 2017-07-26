/**
 * Created by Patryk on 2017-05-07.
 */

import store from '../reducers/index';

export const required = (val) => val && val.length;
export const isNumber = (val) => !isNaN(Number(val));
export const isString = (val) => /^[a-zA-Z ąężźćśĄĘŻŹĆŚóÓ]+$/.test(val);
export const isCracow = (val) => val === "Kraków";
export const isRoomCorrect = (val) => /^[1-9]$/.test(val) || val === "";
export const isFloorCorrect = (val) => /^(1[0-9]|[1-9])$/.test(val) || val === "";
export const isFloorLowerThanMax = (val) => {
  if(val !== ""){
    if("" === store.getState().form.inputForm.number_of_floors){
      return true;
    }else if(val <= store.getState().form.inputForm.number_of_floors){
      return true;
    }
    return false;
  }
  return true;
};
export const isMaxFloorCorrect = (val) => store.getState().form.inputForm.floor <= val || val === "";
export const isYearCorrect = (val) => (val > 1900 && val <= 2017) || val ==="";