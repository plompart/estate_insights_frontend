/**
 * Created by Patryk on 2017-04-09.
 */

import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from "react-bootstrap";
import {Errors, Control} from "react-redux-form";
import {isCracow, isString, isNumber, required} from "../rules/index";

class Location extends Component {
  constructor(props){
    super(props);
    this.props = {onBlur: {}, props};
  }

  render() {
    return (
      <ListGroup>
        <ListGroupItem active>Lokalizacja</ListGroupItem>
        <ListGroupItem>
          <div className="field">
            <Control.text
              placeholder="miasto"
              onBlur={(event) => this.props.onBlur("city", event.target.value)}
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
              onBlur={(event) => this.props.onBlur("road", event.target.value)}
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
              onBlur={(event) => this.props.onBlur("houseNumber", event.target.value)}
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
