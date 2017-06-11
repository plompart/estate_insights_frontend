/**
 * Created by Patryk on 2017-05-30.
 */

import React, {Component} from 'react';
import {Bubble} from 'react-chartjs-2';
import {Button, ControlLabel, ListGroup, ListGroupItem} from "react-bootstrap";
import {Field, Form} from "react-redux-form";
import {connect} from "react-redux";
import {getBubbleGraphData} from "../actions/index";

class BubbleGraph extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: {
        labels: [''],
        datasets: [
          {
            label: '',
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
            data: this.props.data,
          }
        ]
      }
    }
    this.props.getBubbleGraphData();
  }
  componentWillReceiveProps(newProps){
    let tmp = this.state.data.datasets;
    tmp[0].data = newProps.data;
    this.setState({
      data: {
        ...this.state.data,
        datasets: tmp,
      }
    })
  }

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
                  <option value="price">cena</option>
                  <option value="distance">odległość od centrum</option>
                  <option value="area">powierzchnia</option>
                  <option value="rooms">liczba pokoi</option>
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
                  <option value="distance">odległość od centrum</option>
                  <option value="area">powierzchnia</option>
                  <option value="rooms">liczba pokoi</option>
                </select>
              </Field>
            </Form>
          </ListGroupItem>
          <ListGroupItem>
            <Button onClick={() => {
              this.props.getBubbleGraphData()
            }}
            >
              Wyślij
            </Button>
          </ListGroupItem>
          <ListGroupItem><Bubble data={this.state.data} />{console.log(this.state)}</ListGroupItem>
        </ListGroup>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    data: state.serverData.bubbleGraphData,
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getBubbleGraphData: () => dispatch(getBubbleGraphData())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(BubbleGraph);
