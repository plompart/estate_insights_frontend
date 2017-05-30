/**
 * Created by Patryk on 2017-05-30.
 */

import React, {Component} from 'react';
import {Bubble} from 'react-chartjs-2';
import {Button, ControlLabel, ListGroup, ListGroupItem} from "react-bootstrap";
import {Field, Form} from "react-redux-form";

let points = [];

for(let i = 0; i < 1000; i++){
  let point = {};
  point.x = i%5;
  point.y = Math.random()*40 + 1;
  point.r = 1;
  points.push(point);
}

const data = {
  labels: ['January'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
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
      data: points
    }
  ]
};
class BubbleGraph extends Component {
  render() {
    return (
      <div className="BubbleGraph">
        <ListGroup>
          <ListGroupItem active/>
          <ListGroupItem>
            <ControlLabel>Oś x:</ControlLabel>
            <Form model="form.bubbleGraph">
              <Field model="form.bubbleGraph.x">
                <select >
                  <option value="area">powierzchnia</option>
                  <option value="floors">liczba pokoi</option>
                </select>
              </Field>
            </Form>
          </ListGroupItem>
          <ListGroupItem>
            <ControlLabel>Oś y:</ControlLabel>
            <Form model="form.bubbleGraph">
              <Field model="form.bubbleGraph.y">
                <select >
                  <option value="price">cena</option>
                  <option value="distFromCentrum">odległość od centrum</option>
                </select>
              </Field>
            </Form>
          </ListGroupItem>
          <ListGroupItem><Button>Wyślij</Button></ListGroupItem>
          <ListGroupItem><Bubble data={data} /></ListGroupItem>
        </ListGroup>
      </div>
    )
  }
}

export default BubbleGraph;
