import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from "react-bootstrap";
import {connect} from 'react-redux'

class Valuation extends Component {
  render() {
    return (
      <div className="Valuation">
        <ListGroup>
          <ListGroupItem active>Twoja wycena:</ListGroupItem>
            {console.log(this.props.valuation)}
          <ListGroupItem>Wartość mieszkania: {this.props.valuation ? this.props.valuation : <span>Ładuję</span>}</ListGroupItem>
          <ListGroupItem>Wartość m2: 10 000 zł</ListGroupItem>
          <ListGroupItem>Wartość m2 w okolicy: 10 000 zł</ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    valuation: state.valuation.valuation
  }
};

export default connect(mapStateToProps, null)(Valuation);
