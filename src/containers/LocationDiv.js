/**
 * Created by Patryk on 2017-04-09.
 */

import { connect } from 'react-redux';
import Location from '../components/Location';
import {changeInputData} from "../actions/index";

const mapDispatchToProps = (dispatch) => {
  return {
    onBlur: (prop, value) => {
      dispatch(changeInputData(prop, value));
    }
  }
}

const LocationDiv = connect(null, mapDispatchToProps)(Location);

export default LocationDiv;