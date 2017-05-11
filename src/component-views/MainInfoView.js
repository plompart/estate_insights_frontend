/**
 * Created by Patryk on 2017-04-09.
 */

import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from "react-bootstrap";
import {connect} from "react-redux";

class MainInfoView extends Component {
  render() {
    return (
      <ListGroup>
        <ListGroupItem active>Informacje główne:</ListGroupItem>
        <ListGroupItem>Powierzchnia: {this.props.area} m2</ListGroupItem>
        <ListGroupItem>Pietro: {this.props.floor}</ListGroupItem>
        <ListGroupItem>Liczba pokoi: {this.props.roomNumber}</ListGroupItem>
        <ListGroupItem>rodzaj zabudowy: {this.props.buildingType}</ListGroupItem>
      </ListGroup>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    area: state.form.inputForm.area,
    roomNumber: state.form.inputForm.roomNumber,
    floor: state.form.inputForm.floor,
    buildingType: state.form.inputForm.buildingType
  }
}

export default connect(mapStateToProps, null)(MainInfoView);