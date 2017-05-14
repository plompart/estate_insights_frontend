/**
 * Created by Patryk on 2017-04-10.
 */

import React, {Component} from "react";
import {Checkbox, FormGroup, ListGroup, ListGroupItem} from "react-bootstrap";
import {connect} from "react-redux";

let equipment = ['telewizja kablowa', 'internet', 'telefon', 'balkon ', 'winda',
  'garaż', 'pom. użytkowe', 'monitoring', 'meble ', 'teren zamknięty', 'lodówka ',
  'piekarnik', 'kuchenka', 'pralka', 'piwnica', 'drzwi / okna antywłamaniowe',
  'system alarmowy', 'prysznic', 'wanna', 'stół', 'krzesła'];

class EquipmentView extends Component {
  render() {
    let buttons = Object.values(equipment).map((menu) => {
      if (this.props.checked[menu]) {
        return (
          <Checkbox key={menu} inline checked readOnly>{menu}</Checkbox>
        );
      }
    });
    if (Object.keys(this.props.checked).length !== 0) {
      return (
        <ListGroup>
          <ListGroupItem active>Wyposażenie</ListGroupItem>
          <ListGroupItem>
            <FormGroup>
              {buttons}
            </FormGroup>
          </ListGroupItem>
        </ListGroup>
      )
    }
    return null;
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    checked: state.checkboxData
  }
};

export default connect(mapStateToProps, null)(EquipmentView);