/**
 * Created by Patryk on 2017-04-10.
 */

import { connect } from 'react-redux';
import MainInfoView from '../components/MainInfoView';

const mapStateToProps = (state) => {
  return {
    area: state.form.inputForm.area,
    roomNumber: state.form.inputForm.roomNumber,
    floor: state.form.inputForm.floor,
    buildingType: state.form.inputForm.buildingType
  }
}

const MainInfoViewDiv = connect(mapStateToProps, null)(MainInfoView);

export default MainInfoViewDiv;
