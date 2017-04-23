/**
 * Created by Patryk on 2017-04-10.
 */

import { connect } from 'react-redux';
import Equipment from '../components/Equipment';
import {changeCheckboxData} from "../actions/index";

const mapDispatchToProps = (dispatch) => {
  // debugger;
  return {
    onChange: (prop, value) => {
      dispatch(changeCheckboxData(prop, value));
    }
  }
};

const mapStateToProps = (state) => {
  return {
    checked: state.checkboxData
  }
};

const EquipmentDiv = connect(mapStateToProps, mapDispatchToProps)(Equipment);

export default EquipmentDiv;
