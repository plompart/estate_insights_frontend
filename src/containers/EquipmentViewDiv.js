/**
 * Created by Patryk on 2017-04-10.
 */

import { connect } from 'react-redux';
import EquipmentView from '../components/EquipmentView';

const mapStateToProps = (state) => {
  return {
    checked: state.checkboxData
  }
};

const EquipmentViewDiv = connect(mapStateToProps, null)(EquipmentView);

export default EquipmentViewDiv;
