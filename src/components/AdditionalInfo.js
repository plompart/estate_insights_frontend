/**
 * Created by Patryk on 2017-06-10.
 */

import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from "react-bootstrap";
import {Field} from "react-redux-form";
import {connect} from "react-redux";

class AdditionalInfo extends Component {
  renderOptions(type){
    let options = this.props[type] || [];

    return options.map((option) =>{
      return (
        <option value={option} key={option}>{option}</option>
      )
    })
  }

  render() {
    return (
      <ListGroup>
        <ListGroupItem active>Informacje dodatkowe</ListGroupItem>
        <ListGroupItem>
          <Field model="form.inputForm.buildingType">
            <select >
              <option value="">typ budynku</option>
              {this.renderOptions('type')}
            </select>
          </Field>
          <Field model="form.inputForm.development_state">
            <select >
              <option value="">stan</option>
              {this.renderOptions('development_state')}
            </select>
          </Field>
          <Field model="form.inputForm.heating">
            <select >
              <option value="">ogrzewanie</option>
              {this.renderOptions('heating')}
            </select>
          </Field>
          <Field model="form.inputForm.market">
            <select >
              <option value="">rynek</option>
              {this.renderOptions('market')}
            </select>
          </Field>
          <Field model="form.inputForm.material">
            <select >
              <option value="">materiał</option>
              {this.renderOptions('material')}
            </select>
          </Field>
          <Field model="form.inputForm.windows_material">
            <select >
              <option value="">materiał okien</option>
              {this.renderOptions('windows_material')}
            </select>
          </Field>
        </ListGroupItem>
      </ListGroup>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    development_state: state.serverData.development_state,
    heating: state.serverData.heating,
    market: state.serverData.market,
    material: state.serverData.material,
    type: state.serverData.type,
    windows_material: state.serverData.windows_material,
  }
};

export default connect(mapStateToProps, null)(AdditionalInfo);

