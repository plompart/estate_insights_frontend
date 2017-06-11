/**
 * Created by Patryk on 2017-04-09.
 */
import axios from 'axios';
import store from '../reducers/index';

export const submitData = () => {
  // let request = axios.get(`http://localhost:5000/predict?` +
  //   `area=${store.getState().form.inputForm.area}&` +
  //   `floor=${store.getState().form.inputForm.floor}&` +
  //   `rooms=${store.getState().form.inputForm.roomNumber}&` +
  //   `latitude=${store.getState().coordinates.lat}&` +
  //   `longitude=${store.getState().coordinates.lng}`
  // );
//http://rossum.knbit.edu.pl:32005
  let request = axios.post('http://rossum.knbit.edu.pl:32005/predict?',{
    acreage: Number(store.getState().form.inputForm.area),
    all_floors: Number(store.getState().form.inputForm.number_of_floors),
    // build_year: store.getState().form.inputForm.build_year,
    development_state: store.getState().form.inputForm.development_state,
    floor: Number(store.getState().form.inputForm.floor),
    heating: store.getState().form.inputForm.heating,
    market: store.getState().form.inputForm.market,
    material: store.getState().form.inputForm.material,
    rooms: Number(store.getState().form.inputForm.roomNumber),
    windows_material: store.getState().form.inputForm.windows_material,
    type: store.getState().form.inputForm.buildingType,
    latitude: store.getState().coordinates.lat,
    longitude: store.getState().coordinates.lng,
    additional_features: store.getState().valuation.checked,
  });
  return {
    type: 'SUBMIT_DATA',
    payload: request
  }
};

export const getEquipmentNames = () => {
  let request = axios.get(`http://rossum.knbit.edu.pl:32005/additional_features`);
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
  let request = axios.get(`http://rossum.knbit.edu.pl:32005/${type}?nb_bins=6`);

  return {
    type: type,
    payload: request
  }
};

export const getAdditionalFeatures = () => {
  let request = axios.get(`http://rossum.knbit.edu.pl:32005/pickable_features`);

  return {
    type: 'ADDITIONAL_INFO',
    payload: request
  }
};

export const getBubbleGraphData = () => {
  let request = axios.get(`http://rossum.knbit.edu.pl:32005/scatter?` +
  `x=${store.getState().form.bubbleGraph.x}&y=${store.getState().form.bubbleGraph.y}&r=1&n=1000`);

  return {
    type: 'BUBBLE_GRAPH_DATA',
    payload: request
  }
};

export const getAllOffers = () => {
  let request = axios.get(`http://rossum.knbit.edu.pl:32005/all_offers`);

  return {
    type: 'ALL_OFFERS',
    payload: request
  }
};