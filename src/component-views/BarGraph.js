/**
 * Created by Patryk on 2017-04-02.
 */

import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from "react-bootstrap";
import {Bar} from "react-chartjs-2";
import {connect} from "react-redux";

class BarGraph extends Component {
  getProperData(){
    let data = 'hist_price_per_sqm' === this.props.type ? this.props.hist_price_per_sqm : this.props.hist_area;
    let keys = [];
    let values = [];
    for(let key in data){
      keys.push(key);
      values.push(data[key]);
    }

    if(values[values.length - 1] === null){
      values.pop();
      keys.pop();
    }

    let labels = [];
    if(this.props.type === 'hist_price_per_sqm'){

      for(let i = 0; i < keys.length - 1; i++){
        labels.push(keys[i] + "-" + keys[i+1] + " tys/m2");
      }
      labels.push( "> " + keys[keys.length - 1] + " tys/m2");
    }else{
      for(let i = 0; i < keys.length - 1; i++){
        labels.push(keys[i] + "-" + keys[i+1] + " m2");
      }
      labels.push( "> " + keys[keys.length - 1] + " m2");
    }

    return {
      labels: labels,
      datasets: [
        {
          label: 'w procentach',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: values
        }
      ]
    }
  }

  render() {
    let title = 'hist_price_per_sqm' === this.props.type ? 'Rozkład cen sprzedaży mieszkań w mieście: Kraków' : 'Rozkład powierzchni sprzedaży mieszkań w mieście: Kraków';
    let data = this.getProperData();

    return (
      <div className="BarGraph">
        <ListGroup>
          <ListGroupItem active>{title}</ListGroupItem>
          <ListGroupItem><Bar height={450} options={{
            maintainAspectRatio: false
          }} data={data}/></ListGroupItem>
        </ListGroup>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    hist_area: state.valuation.hist_area,
    hist_price_per_sqm: state.valuation.hist_price_per_sqm
  }
};

export default connect(mapStateToProps,null)(BarGraph);
