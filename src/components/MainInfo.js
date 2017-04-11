/**
 * Created by Patryk on 2017-04-09.
 */

import React, {Component} from 'react';
import {FormControl, FormGroup, ListGroup, ListGroupItem} from "react-bootstrap";

class MainInfo extends Component {
  render() {
    return (
      <ListGroup>
        <ListGroupItem active>Informacje główne</ListGroupItem>
        <ListGroupItem>
          <FormGroup>
            <FormControl type="text" placeholder="powierzchnia"
                         onBlur={(event) => this.props.onBlur("area", event.target.value)}
            />
            <FormControl type="text" placeholder="liczba pokoi"
                         onBlur={(event) => this.props.onBlur("roomNumber", event.target.value)}
            />
            <FormControl type="text" placeholder="nr piętra"
                         onBlur={(event) => this.props.onBlur("floor", event.target.value)}
            />
            <FormControl componentClass="select" placeholder="Rodzaj zabudowy"
                         onBlur={(event) => this.props.onBlur("buildingType", event.target.value)}>
              <option value="blok">blok</option>
              <option value="kamienica">kamienica</option>
              <option value="apartamentowiec">apartamentowiec</option>
            </FormControl>
          </FormGroup>
        </ListGroupItem>
      </ListGroup>
    )
  }
}

export default MainInfo;
