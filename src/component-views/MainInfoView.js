/**
 * Created by Patryk on 2017-04-09.
 */

import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from "react-bootstrap";
import {connect} from "react-redux";

class MainInfoView extends Component {
  render() {
    let obj = this.props;

    let data = Object.keys(obj).map((key) => {
      let name = "Rodzaj zabudowy: ";
      let last = "";
      if(key === "area"){
        name = "Powierzchnia: ";
        last = " m2";
      }
      if(key === "floor")name = "Piętro: ";
      if(key === "roomNumber")name = "Liczba pokoi: ";

      if(obj[key] !== "" && key !== "dispatch"){
        return(
          <ListGroupItem>{name}{obj[key]}{last}</ListGroupItem>
        )
      }else{
        return null;
      }
    });

    return (
      <ListGroup>
        <ListGroupItem active>Informacje główne:</ListGroupItem>
        {data}
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