/**
 * Created by Patryk on 2017-06-11.
 */

import React, {Component} from 'react';
import {connect} from "react-redux";
import {ListGroup, ListGroupItem} from "react-bootstrap";

class AdditionalInfoView extends Component {
  constructor(props){
    super(props);
    this.state = {
      default: true,
      data: [null],
    };
  }

  setGroupItems(props){
    let data = Object.keys(props).map((key) => {
      let name = "";

      if(key === "development_state") name = "Stan: ";
      if(key === "heating")name = "Ogrzewanie: ";
      if(key === "market")name = "Rynek: ";
      if(key === "material")name = "Materiał: ";
      if(key === "buildingType")name = "Typ: ";
      if(key === "windows_material")name = "Materiał okien: ";

      if(props[key] !== "" && key !== "dispatch"){
        return(
          <ListGroupItem key={key}>{name}{props[key]}</ListGroupItem>
        )
      }else{
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
          <ListGroupItem active>Informacje dodatkowe:</ListGroupItem>
          {this.state.data}
        </ListGroup>
      )
    }
    return null;
  }
}

const mapStateToProps = (state) => {
  return {
    development_state: state.form.inputForm.development_state,
    heating: state.form.inputForm.heating,
    market: state.form.inputForm.market,
    material: state.form.inputForm.material,
    buildingType: state.form.inputForm.buildingType,
    windows_material: state.form.inputForm.windows_material,
  }
};

export default connect(mapStateToProps, null)(AdditionalInfoView);
