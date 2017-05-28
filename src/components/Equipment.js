/**
 * Created by Patryk on 2017-04-09.
 */

import React, {Component} from "react";
import {Checkbox, FormGroup, ListGroup, ListGroupItem} from "react-bootstrap";
import {connect} from "react-redux";
import {changeCheckboxData} from "../actions/index";

let equipment = ['telewizja kablowa', 'internet', 'telefon', 'balkon ', 'winda',
  'garaż', 'pom. użytkowe', 'monitoring', 'meble ', 'teren zamknięty', 'lodówka ',
  'piekarnik', 'kuchenka', 'pralka', 'piwnica', 'drzwi / okna antywłamaniowe',
  'system alarmowy', 'prysznic', 'wanna', 'stół', 'krzesła'];

class Equipment extends Component {
  render() {
    let buttons = Object.values(equipment).map((menu) => {
      if (this.props.checked[menu]) {
        return (
          <Checkbox key={menu} inline checked disabled
                    onChange={(event) => this.props.onChange(menu, event.target.checked)}>{menu}</Checkbox>
        );
      } else {
        return (
          <Checkbox key={menu} inline disabled
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

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (prop, value) => {
      dispatch(changeCheckboxData(prop, value));
    }
  }
};

const mapStateToProps = (state) => {
  return {
    checked: state.checkboxData
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Equipment);