/**
 * Created by Patryk on 2017-04-06.
 */

import React, {Component} from 'react';
import {Button, Col, Grid, PageHeader, Row} from "react-bootstrap";
import MyHeader from "../components/MyHeader";
import ReactDOM from "react-dom";
import Body from "./Body";
import {Provider, connect} from "react-redux";
import Location from "../components/Location";
import MainInfo from "../components/MainInfo";
import Equipment from "../components/Equipment";
import {submitCoordinates, submitData, submitHistData} from "../actions/index"
import {Form} from "react-redux-form";

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buildingType: "blok",

    };
  }

  render() {
    return (
      <div className="InputForm">
        <Grid className="Grid">
          <Row className="show-grid header">
            <Col xs={18} md={12}>
              <MyHeader/>
            </Col>
          </Row>
          <Form
            model="form.inputForm"
            onSubmit={() => {
              this.props.submitCoordinates();
              this.props.submitData();
              this.props.submitHistData("hist_price_per_sqm");
              this.props.submitHistData("hist_area");
              ReactDOM.render(<Provider store={this.props.store}>
                <Body />
              </Provider>, document.getElementById('body'))
            }}
          >
            <Row className="show-grid first">
              <Col xs={12} md={8} xsOffset={3} mdOffset={2}>
                <PageHeader>Wypełnij formularz by uzyskać wycenę mieszkania:</PageHeader>
                <Location/>
              </Col>
            </Row>
            <Row className="show-grid">
              <Col xs={12} md={8} xsOffset={3} mdOffset={2}>
                <MainInfo/>
              </Col>
            </Row>
            <Row className="show-grid">
              <Col xs={12} md={8} xsOffset={3} mdOffset={2}>
                <Equipment/>
              </Col>
            </Row>
            <Row className="show-grid" >
              <Col xs={12} md={8} xsOffset={3} mdOffset={2} style={{textAlign: "center"}}>
                <button type="submit" className="btn btn-default">
                  Wyceń
                </button>
              </Col>
            </Row>
          </Form>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    submitData: () => dispatch(submitData()),
    submitCoordinates: () => dispatch(submitCoordinates()),
    submitHistData: (type) => dispatch(submitHistData(type))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(InputForm)