/**
 * Created by Patryk on 2017-04-09.
 */

import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from "react-bootstrap";
import {Errors, Form, Control, Field} from "react-redux-form";
import {isRoomCorrect, isFloorCorrect, isNumber, required} from "../rules/index";
import {connect} from "react-redux";

class MainInfo extends Component {
  render() {
    return (
      <ListGroup>
        <ListGroupItem active>Informacje główne</ListGroupItem>
        <ListGroupItem>
          <Form model="form.inputForm">
            <div className="field">
              <Control.text
                placeholder="powierzchnia"
                onBlur={(event) => this.props.onBlur("area", event.target.value)}
                model=".area"
                validators={{
                  //required,
                  isNumber,
                }}
              />
              <Errors
                className="errors"
                model="form.inputForm.area"
                show="touched"
                messages={{
                  //required: 'Pole wymagane',
                  isNumber: 'Musi być liczbą',
                }}
              />
            </div>
            <div className="field">
              <Control.text
                placeholder="liczba pokoi"
                onBlur={(event) => this.props.onBlur("roomNumber", event.target.value)}
                model=".roomNumber"
                validators={{
                  //required,
                  isRoomCorrect,
                  isNumber,
                }}
              />
              <Errors
                className="errors"
                model="form.inputForm.roomNumber"
                show="touched"
                messages={{
                  //required: 'Pole wymagane',
                  isNumber: "Musi być liczbą",
                  isRoomCorrect: 'Zła liczba pokoi',
                }}
              />
            </div>
            <div className="field">
              <Control.text
                placeholder="numer piętra"
                onBlur={(event) => this.props.onBlur("floor", event.target.value)}
                model=".floor"
                validators={{
                  //required,
                  isNumber,
                  isFloorCorrect,
                }}
              />
              <Errors
                className="errors"
                model="form.inputForm.floor"
                show="touched"
                messages={{
                  //required: 'Pole wymagane',
                  isNumber: "Musi być liczbą",
                  isFloorCorrect: 'Zły numer piętra',
                }}
              />
            </div>
            <Field model="form.inputForm.buildingType">
              <select onBlur={(event) => this.props.onBlur("buildingType", event.target.value)}>
                <option value="blok">blok</option>
                <option value="kamienica">kamienica</option>
                <option value="apartamentowiec">apartamentowiec</option>
              </select>
            </Field>
          </Form>
        </ListGroupItem>
      </ListGroup>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onBlur: (prop, value) => {
      //dispatch(changeInputData(prop, value));
    }
  }
};

export default connect(null, mapDispatchToProps)(MainInfo);
