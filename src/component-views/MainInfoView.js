/**
 * Created by Patryk on 2017-04-09.
 */

import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from "react-bootstrap";
import {connect} from "react-redux";

class MainInfoView extends Component {
  constructor(props){
    super(props);
    this.state = {
      default: true,
      data: [null],
    }
  }

  setGroupItems(props) {
    let data = Object.keys(props).map((key) => {
      let name = "";
      let last = "";
      if (key === "area") {
        name = "Powierzchnia: ";
        last = " m2";
      }
      if (key === "floor") name = "Piętro: ";
      if (key === "number_of_floors") name = "Najwyższe piętro: ";
      if (key === "roomNumber") name = "Liczba pokoi: ";
      if (key === "build_year") name = "Rok budowy: ";

      if (props[key] !== "" && key !== "dispatch") {
        return (
          <ListGroupItem key={key}>{name}{props[key]}{last}</ListGroupItem>
        )
      } else {
        return null;
      }
    });

    for(let val of data){
      if(val !== null){
        this.setState({default: false, data: data});
        return;
      }
    }
    this.setState({default: true, data: []});
  }

  componentWillMount(){
    this.setGroupItems(this.props);
  }

  componentWillReceiveProps(newProps){
    this.setGroupItems(newProps);
  }

  render() {
    if(!this.state.default){
      return(
        <ListGroup>
          <ListGroupItem active>Informacje główne:</ListGroupItem>
          {this.state.data}
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