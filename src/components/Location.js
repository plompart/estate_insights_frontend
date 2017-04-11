/**
 * Created by Patryk on 2017-04-09.
 */

import React, {Component} from 'react';
import {FormControl, FormGroup, ListGroup, ListGroupItem} from "react-bootstrap";

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
          <FormGroup>
            <FormControl type="text" placeholder="miasto"
                         onBlur={(event) => this.props.onBlur("city", event.target.value)}
            />
            <FormControl type="text" placeholder="ulica"
                         onBlur={(event) => this.props.onBlur("road", event.target.value)}
            />
            <FormControl type="text" placeholder="nr domu"
                         onBlur={(event) => this.props.onBlur("houseNumber", event.target.value)}
            />
          </FormGroup>
        </ListGroupItem>
      </ListGroup>
    )
  }
}

export default Location;
