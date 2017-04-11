import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from "react-bootstrap";

class Valuation extends Component {
  render() {
    return (
      <div className="Valuation">
        <ListGroup>
          <ListGroupItem active>Twoja wycena:</ListGroupItem>
          <ListGroupItem>Wartość mieszkania: 350 000zł</ListGroupItem>
          <ListGroupItem>Wartość m2: 10 000 zł</ListGroupItem>
          <ListGroupItem>Wartość m2 w okolicy: 10 000 zł</ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}

export default Valuation;
