/**
 * Created by Patryk on 2017-04-10.
 */

import React, {Component} from 'react';
import {Checkbox, FormGroup, ListGroup, ListGroupItem} from "react-bootstrap";

let equipment = ['telewizja kablowa', 'internet', 'telefon', 'balkon ', 'winda',
  'garaż', 'pom. użytkowe', 'monitoring', 'meble ', 'teren zamknięty', 'lodówka ',
  'piekarnik', 'kuchenka', 'pralka', 'piwnica', 'drzwi / okna antywłamaniowe',
  'system alarmowy', 'prysznic', 'wanna', 'stół', 'krzesła'];

class EquipmentView extends Component {
  buttons = Object.values(equipment).map((menu) => {
    if(this.props.checked[menu]){
      return (
        <Checkbox key={menu} inline checked readOnly>{menu}</Checkbox>
      );
    }
  });

  render() {
    return (
      <ListGroup>
        <ListGroupItem active>Wyposażenie</ListGroupItem>
        <ListGroupItem>
          <FormGroup>
            {this.buttons}
          </FormGroup>
        </ListGroupItem>
      </ListGroup>
    )
  }
}

export default EquipmentView;
