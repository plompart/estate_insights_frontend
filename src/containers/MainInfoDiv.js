/**
 * Created by Patryk on 2017-04-09.
 */

import { connect } from 'react-redux';
import MainInfo from '../components/MainInfo';
import {changeInputData} from "../actions/index";

const mapDispatchToProps = (dispatch) => {
  return {
    onBlur: (prop, value) => {
      dispatch(changeInputData(prop, value));
    }
  }
};

const MainInfoDiv = connect(null, mapDispatchToProps)(MainInfo);

export default MainInfoDiv;
