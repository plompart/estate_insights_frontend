/**
 * Created by Patryk on 2017-04-01.
 */

import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import {ListGroup, ListGroupItem} from "react-bootstrap";

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Stare Miasto',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [360200, 355000, 350100, 357020, 353000, 355200, 351000]
    },
    {
      label: 'Krakow',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(236,202,115,0.4)',
      borderColor: '#ec932f',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [300200, 315000, 310100, 317020, 303000, 315200, 311000]
    }
  ]
};

class LineGraph extends Component {
  displayName = 'LineExample';

  render() {
    return (
      <div className="Graphs">
        <ListGroup>
          <ListGroupItem active>Średnie ceny sprzedaży dla: Kraków, Stare Miasto</ListGroupItem>
          <ListGroupItem><Line data={data}/></ListGroupItem>
        </ListGroup>

      </div>
    )
  }
}
;

export default LineGraph;
