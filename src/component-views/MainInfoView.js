/**
 * Created by Patryk on 2017-04-09.
 */

import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from "react-bootstrap";
import {connect} from "react-redux";

class MainInfoView extends Component {
  isDefaultProps(){
    for(let val of this.data){
      if(val !== null){
        return true;
      }
    }
    return false;
  }


  data = Object.keys(this.props).map((key) => {
    let name = "";
    let last = "";
    if(key === "area"){
      name = "Powierzchnia: ";
      last = " m2";
    }
    if(key === "floor")name = "Piętro: ";
    if(key === "number_of_floors")name = "Najwyższe piętro: ";
    if(key === "roomNumber")name = "Liczba pokoi: ";
    if(key === "build_year")name = "Rok budowy: ";

    if(this.props[key] !== "" && key !== "dispatch"){
      return(
        <ListGroupItem key={key}>{name}{this.props[key]}{last}</ListGroupItem>
      )
    }else{
      return null;
    }
  });

  render() {
    if(this.isDefaultProps()){
      return(
        <ListGroup>
          <ListGroupItem active>Informacje główne:</ListGroupItem>
          {this.data}
        </ListGroup>
      )
    }
    return null;
  }
}

const mapStateToProps = (state) => {
  return {
    area: state.form.inputForm.area,
    roomNumber: state.form.inputForm.roomNumber,
    floor: state.form.inputForm.floor,
    number_of_floors: state.form.inputForm.number_of_floors,
    build_year: state.form.inputForm.build_year,
  }
}

export default connect(mapStateToProps, null)(MainInfoView);