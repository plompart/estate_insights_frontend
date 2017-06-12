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
  `x=${store.getState().form.bubbleGraph.x}&y=${store.getState().form.bubbleGraph.y}&r=1&n=500`);

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

export const getDistrictData = () => {
  let request = axios.get(`http://rossum.knbit.edu.pl:32005/districts_means`);

  let mock = [{"name": "Stare Miasto", "latitude": 50.061506, "longitude": 19.937884, "radius": 1000, "price": 871867.033018868}, {"name": "Grzeg\u00f3rzki", "latitude": 50.062081, "longitude": 19.968075, "radius": 1200, "price": 523153.11753731343}, {"name": "Pradnik Czerwony", "latitude": 50.086976, "longitude": 19.968243, "radius": 1200, "price": 368001.7525252525}, {"name": "Pradnik Bia\u0142y", "latitude": 50.106925, "longitude": 19.917033, "radius": 2000, "price": 295063.0425531915}, {"name": "Bronowice", "latitude": 50.082669, "longitude": 19.86292, "radius": 1800, "price": 463184.26086956525}, {"name": "D\u0119bniki", "latitude": 50.015957, "longitude": 19.874714, "radius": 3000, "price": 361717.68884540116}, {"name": "Zwierzyniec", "latitude": 50.056583, "longitude": 19.854543, "radius": 2200, "price": 693378.2173913043}, {"name": "\u0141agiewniki - Borek Fa\u0142\u0119cki", "latitude": 50.017779, "longitude": 19.929685, "radius": 1600, "price": 443500.62542955327}, {"name": "Swoszowice", "latitude": 49.9884, "longitude": 19.953777, "radius": 1700, "price": 358450.0}, {"name": "Podg\u00f3rze Duchackie", "latitude": 50.013819, "longitude": 19.964842, "radius": 1700, "price": 325416.9552941176}, {"name": "Bie\u017can\u00f3w - Prokocim", "latitude": 50.018092, "longitude": 20.027471, "radius": 2300, "price": 277941.05161290325}, {"name": "Podg\u00f3rze", "latitude": 50.039351, "longitude": 19.978552, "radius": 1700, "price": 351431.47524752474}, {"name": "Czy\u017cyny", "latitude": 50.067815, "longitude": 20.010506, "radius": 1900, "price": 294743.88501026697}, {"name": "Mistrzejowice", "latitude": 50.099978, "longitude": 20.00773, "radius": 1700, "price": 280323.52545454545}, {"name": "Bie\u0144czyce", "latitude": 50.086961, "longitude": 20.023791, "radius": 800, "price": 603598.3913043478}, {"name": "Wzg\u00f3rza Krzes\u0142awickie", "latitude": 50.100015, "longitude": 20.07453, "radius": 2300, "price": 247705.08695652173}, {"name": "Nowa Huta", "latitude": 50.065119, "longitude": 20.128466, "radius": 3400, "price": 308440.0}, {"name": "Krowodrza", "latitude": 50.071567, "longitude": 19.916865, "radius": 1200, "price": 517326.850678733}];

  return {
    type: 'DISTRICT_DATA',
    payload: request,
  }
};