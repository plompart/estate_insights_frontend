/**
 * Created by Patryk on 2017-04-10.
 */

import { connect } from 'react-redux';
import MainInfoView from '../components/MainInfoView';

const mapStateToProps = (state) => {
  return {
    area: state.inputData.area,
    roomNumber: state.inputData.roomNumber,
    floor: state.inputData.floor,
    buildingType: state.inputData.buildingType
  }
}

const MainInfoViewDiv = connect(mapStateToProps, null)(MainInfoView);

export default MainInfoViewDiv;
