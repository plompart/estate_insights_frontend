/**
 * Created by Patryk on 2017-04-01.
 */

import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from "react-bootstrap";
import {connect} from "react-redux";

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

const mapStateToProps = (state) => {
  return {
    city: state.form.inputForm.city,
    road: state.form.inputForm.road,
    houseNumber: state.form.inputForm.houseNumber
  }
};

export default connect(mapStateToProps, null)(LocationView);