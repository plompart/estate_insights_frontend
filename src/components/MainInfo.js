/**
 * Created by Patryk on 2017-04-09.
 */

import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from "react-bootstrap";
import {Errors, Control} from "react-redux-form";
import {isRoomCorrect, isFloorCorrect, isNumber} from "../rules/index";

class MainInfo extends Component {
  render() {
    return (
      <ListGroup>
        <ListGroupItem active>Informacje główne</ListGroupItem>
        <ListGroupItem>
          <div className="field">
            <Control.text
              placeholder="powierzchnia"
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
          <div className="field">
            <Control.text
              placeholder="numer najwyższego piętra"
              model=".number_of_floors"
              validators={{
                //required,
                isNumber,
                isFloorCorrect,
              }}
            />
            <Errors
              className="errors"
              model="form.inputForm.number_of_floors"
              show="touched"
              messages={{
                //required: 'Pole wymagane',
                isNumber: "Musi być liczbą",
                isFloorCorrect: 'Zły numer piętra',
              }}
            />
          </div>
        </ListGroupItem>
      </ListGroup>
    )
  }
}

export default MainInfo;
