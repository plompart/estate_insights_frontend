/**
 * Created by Patryk on 2017-04-06.
 */

import React, {Component} from 'react';
import {Button, Col, Grid, PageHeader, Row} from "react-bootstrap";
import MyHeader from "../components/MyHeader";
import ReactDOM from "react-dom";
import Body from "./Body";
import {Provider, connect} from "react-redux";
import LocationDiv from "./LocationDiv";
import MainInfoDiv from "../containers/MainInfoDiv";
import EquipmentDiv from "../containers/EquipmentDiv";
import {submitData} from "../actions/index"
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
              this.props.submitData();
              ReactDOM.render(<Provider store={this.props.store}>
                <Body />
              </Provider>, document.getElementById('body'))
            }}
            onSumbitFailed={(userForm) => {
              console.log(userForm);
            }}
          >
            <Row className="show-grid first">
              <Col xs={12} md={8} xsOffset={3} mdOffset={2}>
                <PageHeader>Wypełnij formularz by uzyskać wycenę mieszkania:</PageHeader>
                <LocationDiv/>
              </Col>
            </Row>
            <Row className="show-grid">
              <Col xs={12} md={8} xsOffset={3} mdOffset={2}>
                <MainInfoDiv/>
              </Col>
            </Row>
            <Row className="show-grid">
              <Col xs={12} md={8} xsOffset={3} mdOffset={2}>
                <EquipmentDiv/>
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
    submitData: () => dispatch(submitData())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(InputForm)