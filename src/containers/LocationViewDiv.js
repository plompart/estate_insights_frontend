/**
 * Created by Patryk on 2017-04-09.
 */

import { connect } from 'react-redux';
import LocationView from '../components/LocationView';

const mapStateToProps = (state) => {
  return {
    city: state.inputData.city,
    road: state.inputData.road,
    houseNumber: state.inputData.houseNumber
  }
}

const LocationViewDiv = connect(mapStateToProps, null)(LocationView);

export default LocationViewDiv;
