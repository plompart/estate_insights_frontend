/**
 * Created by Patryk on 2017-04-09.
 */

import { connect } from 'react-redux';
import LocationView from '../components/LocationView';

const mapStateToProps = (state) => {
  return {
    city: state.form.inputForm.city,
    road: state.form.inputForm.road,
    houseNumber: state.form.inputForm.houseNumber
  }
};

const LocationViewDiv = connect(mapStateToProps, null)(LocationView);

export default LocationViewDiv;
