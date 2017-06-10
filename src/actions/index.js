/**
 * Created by Patryk on 2017-04-09.
 */
import axios from 'axios';
import store from '../reducers/index'

export const submitData = () => {
  let request = axios.get(`http://localhost:5000/predict?` +
    `area=${store.getState().form.inputForm.area}&` +
    `floor=${store.getState().form.inputForm.floor}&` +
    `rooms=${store.getState().form.inputForm.roomNumber}&` +
    `latitude=${store.getState().coordinates.lat}&` +
    `longitude=${store.getState().coordinates.lng}`
  );
  return {
    type: 'SUBMIT_DATA',
    payload: request
  }
};

export const getEquipmentNames = () => {
  let request = axios.get(`http://localhost:5000/additional_features?`);
  return {
    type: 'GET_EQUIPMENT_NAMES',
    payload: request
  }
};

export const changeCheckboxData = (prop, value) => {
  return {
    type: 'CHANGE_CHECKBOX_DATA',
    prop: prop,
    value: value
  }
};

export const submitCoordinates = () => {
  let request = axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=` +
    `${store.getState().form.inputForm.city}, ${store.getState().form.inputForm.road} ${store.getState().form.inputForm.houseNumber}` +
    `&key=AIzaSyBAy-YhQIBsMI3tz7GhjjuAEYf2PCVCRF0`
  );
  return {
    type: 'SUBMIT_COORDINATES',
    payload: request
  }
};

export const submitHistData = (type) => {
  let request = axios.get(`http://localhost:5000/${type}?nb_bins=6`);

  return {
    type: type,
    payload: request
  }
};

export const getAdditionalFeatures = () => {
  let request = axios.get(`http://localhost:5000/pickable_features`);

  let mock = {
    data: {
      "development_state": ["do remontu", "do wyko\u0144czenia", "do zamieszkania"],
      "heating": ["elektryczne", "gazowe", "kot\u0142ownia", "miejskie", "piece kaflowe"],
      "market": ["pierwotny", "wt\u00f3rny"],
      "material": ["beton", "beton kom\u00f3rkowy", "ceg\u0142a", "drewno", "keramzyt", "pustak", "silikat", "wielka p\u0142yta", "\u017celbet"],
      "type": ["apartamentowiec", "blok", "dom wolnostoj\u0105cy", "kamienica", "loft", "plomba", "szeregowiec"],
      "windows_material": ["aluminiowe", "drewniane", "plastikowe"]
    }
  };

  return {
    type: 'ADDITIONAL_INFO',
    payload: mock
  }
};