import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from "react-bootstrap";
import {connect} from 'react-redux'

class Valuation extends Component {
  render() {
    let pricePerMeter = function(props) {
      if(props.price_per_sqm === "nan"){
        return;
      }else{
        return (
          <ListGroupItem>Wartość m2: {props.price_per_sqm ? Number(props.price_per_sqm).toFixed(2) + " zł": <span>Ładuję</span>}</ListGroupItem>
        )
      }
    };

    return (
      <div className="Valuation">
        <ListGroup>
          <ListGroupItem active>Twoja wycena:</ListGroupItem>
          <ListGroupItem>Wartość mieszkania: {this.props.price ? Number(this.props.price).toFixed(2) + " zł" : <span>Ładuję</span>}</ListGroupItem>
          {pricePerMeter(this.props)}
          <ListGroupItem>Wartość m2 w okolicy: {this.props.mean_price_per_sqm ? Number(this.props.mean_price_per_sqm).toFixed(2) + " zł" : <span>Ładuję</span>}</ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    price: state.valuation.price,
    price_per_sqm: state.valuation.price_per_sqm,
    mean_price_per_sqm: state.valuation.mean_price_per_sqm
  }
};

export default connect(mapStateToProps, null)(Valuation);
