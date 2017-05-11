/**
 * Created by Patryk on 2017-04-02.
 */

import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from "react-bootstrap";
import {Bar} from "react-chartjs-2";

let surfaceData = {
  labels: ['< 20m2', '30-45 m2', '45-65 m2', '65-90 m2', '90-120 m2', '>120 m2'],
  datasets: [
    {
      label: 'w procentach',
      backgroundColor: 'rgba(0,99,132,0.2)',
      borderColor: 'rgba(0,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [7.6, 28.6, 37.7, 16.0, 5.5, 2.7]
    }
  ]
};

let pricesData = {
  labels: ['<5,5 tys/m2', '5,5-6,0 tys/m2', '6,0-7,0 tys/m2', '7,0-8,0 tys/m2', '8,0-9,0 tys/m2', '>5,5 tys/m2'],
  datasets: [
    {
      label: 'w procentach',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [8.9, 10.7, 26.7, 24.9, 14.8, 14.2]
    }
  ]
};

class BarGraph extends Component {
  render() {
    let title = 'prices' === this.props.type ? 'Rozkład cen sprzedaży mieszkań w mieście: Kraków' : 'Rozkład powierzchni sprzedaży mieszkań w mieście: Kraków';
    let data = 'surfaces' === this.props.type ? surfaceData : pricesData;
    return (
      <div className="BarGraph">
        <ListGroup>
          <ListGroupItem active>{title}</ListGroupItem>
          <ListGroupItem><Bar data={data}/></ListGroupItem>
        </ListGroup>
      </div>
    )
  }
}

export default BarGraph;
