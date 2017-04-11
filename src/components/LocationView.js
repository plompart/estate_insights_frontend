/**
 * Created by Patryk on 2017-04-01.
 */

import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from "react-bootstrap";

class LocationView extends Component {
  render() {
    return (
        <ListGroup>
          <ListGroupItem active>Lokalizacja:</ListGroupItem>
          <ListGroupItem>Miasto: {this.props.city}</ListGroupItem>
          <ListGroupItem>Ulica: {this.props.road} {this.props.houseNumber}</ListGroupItem>
        </ListGroup>
    )
  }
}
;

export default LocationView;