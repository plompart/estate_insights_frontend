/**
 * Created by Patryk on 2017-04-09.
 */

import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from "react-bootstrap";

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

export default MainInfoView;
