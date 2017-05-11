/**
 * Created by Patryk on 2017-05-07.
 */

export const required = (val) => val && val.length;
export const isNumber = (val) => !isNaN(Number(val));
export const isString = (val) => /^[a-zA-Z ó]+$/.test(val);
export const isCracow = (val) => val === "Kraków";
export const isRoomCorrect = (val) => /^[1-9]$/.test(val) || val === "";
export const isFloorCorrect = (val) => /^(1[0-9]|[1-9])$/.test(val) || val === "";