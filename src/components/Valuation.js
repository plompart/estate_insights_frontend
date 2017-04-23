import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from "react-bootstrap";
import {connect} from 'react-redux'

class Valuation extends Component {
  render() {
    return (
      <div className="Valuation">
        <ListGroup>
          <ListGroupItem active>Twoja wycena:</ListGroupItem>
          <ListGroupItem>Wartość mieszkania: {this.props.wycena ? this.props.wycena : <span>Ładuję</span>}</ListGroupItem>
          <ListGroupItem>Wartość m2: 10 000 zł</ListGroupItem>
          <ListGroupItem>Wartość m2 w okolicy: 10 000 zł</ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    wycena: state.inputData.wycena
  }
}

export default connect(mapStateToProps, null)(Valuation);
