/**
 * Created by Patryk on 2017-04-09.
 */

import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from "react-bootstrap";
import {Errors, Control} from "react-redux-form";
import {isCracow, isString, isNumber, required} from "../rules/index";

class Location extends Component {
  render() {
    return (
      <ListGroup>
        <ListGroupItem active>Lokalizacja</ListGroupItem>
        <ListGroupItem>
          <div className="field">
            <Control.text
              placeholder="miasto"
              model="form.inputForm.city"
              validators={{
                required,
                isString,
                isCracow,
              }}
            />
            <Errors
              className="errors"
              model="form.inputForm.city"
              show="touched"
              messages={{
                required: 'Pole wymagane',
                isString: 'Niepoprawna nazwa miasta',
                isCracow: 'Złe miasto'
              }}
            />
          </div>
          <div className="field">
            <Control.text
              placeholder="ulica"
              model="form.inputForm.road"
              validators={{
                required,
                isString,
              }}
            />
            <Errors
              className="errors"
              model="form.inputForm.road"
              show="touched"
              messages={{
                required: 'Pole wymagane',
                isString: 'Niepoprawna nazwa ulicy',
              }}
            />
          </div>
          <div className="field">
            <Control.text
              placeholder="numer mieszkania"
              model="form.inputForm.houseNumber"
              type="number"
              validators={{
                required,
                isNumber,
              }}
            />
            <Errors
              className="errors"
              model="form.inputForm.houseNumber"
              show="touched"
              messages={{
                required: 'Pole wymagane',
                isNumber: 'Musi być liczbą',
              }}
            />
          </div>
        </ListGroupItem>
      </ListGroup>
    )
  }
}

export default Location;