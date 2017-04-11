/**
 * Created by Patryk on 2017-04-09.
 */

import React, {Component} from "react";
import {Checkbox, FormGroup, ListGroup, ListGroupItem} from "react-bootstrap";

let equipment = ['telewizja kablowa', 'internet', 'telefon', 'balkon ', 'winda',
  'garaż', 'pom. użytkowe', 'monitoring', 'meble ', 'teren zamknięty', 'lodówka ',
  'piekarnik', 'kuchenka', 'pralka', 'piwnica', 'drzwi / okna antywłamaniowe',
  'system alarmowy', 'prysznic', 'wanna', 'stół', 'krzesła'];

class Equipment extends Component {
  render() {
    let buttons = Object.values(equipment).map((menu) => {
      if (this.props.checked[menu]) {
        return (
          <Checkbox key={menu} inline checked
                    onChange={(event) => this.props.onChange(menu, event.target.checked)}>{menu}</Checkbox>
        );
      } else {
        return (
          <Checkbox key={menu} inline
                    onChange={(event) => this.props.onChange(menu, event.target.checked)}>{menu}</Checkbox>
        );
      }
    });
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
}

export default Equipment;
