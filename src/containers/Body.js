/**
 * Created by Patryk on 2017-04-01.
 */

import React, {Component} from 'react';
import MyHeader from "../components/MyHeader";
import {Col, Grid, PageHeader, Row} from "react-bootstrap";
import MyMap from "../components/MyMap";
import LocationViewDiv from "../containers/LocationViewDiv";
import Valuation from "../components/Valuation";
import EquipmentViewDiv from "../containers/EquipmentViewDiv";
import LineGraph from "../components/LineGraph";
import BarGraph from "../components/BarGraph";
import SidePanel from "./SidePanel";
import MainInfoViewDiv from "../containers/MainInfoViewDiv";

class Body extends Component {
  render() {
    return (
      <div className="Body">
        <div id="outer-container">
          <SidePanel />
          <div id="page-wrap">
            <Grid className="Grid">
              <Row className="show-grid header">
                <Col xs={18} md={12}>
                  <MyHeader/>
                </Col>
              </Row>
              <Row className="show-grid first">
                <Col xs={12} md={8} xsOffset={3} mdOffset={2}>
                  <PageHeader>Wycena twojego mieszkania:</PageHeader>
                </Col>
              </Row>
              <Row className="show-grid">
                <Col xs={6} md={4} xsOffset={3} mdOffset={2}>
                  <MyMap/>
                </Col>
                <Col xs={6} md={4} className="location">
                  <Valuation/>
                </Col>
              </Row>
              <Row className="show-grid">
                <Col xs={12} md={8} xsOffset={3} mdOffset={2}>
                  <LocationViewDiv/>
                </Col>
              </Row>
              <Row className="show-grid">
                <Col xs={12} md={8} xsOffset={3} mdOffset={2}>
                  <MainInfoViewDiv/>
                </Col>
              </Row>
              <Row className="show-grid">
                <Col xs={12} md={8} xsOffset={3} mdOffset={2}>
                  <EquipmentViewDiv/>
                </Col>
              </Row>
              <Row className="show-grid">
                <Col xs={6} md={4} xsOffset={3} mdOffset={2}>
                  <BarGraph type="prices"/>
                </Col>
                <Col xs={6} md={4}>
                  <BarGraph type="surfaces"/>
                </Col>
              </Row>
            </Grid>
          </div>
        </div>
      </div>
    )
  }
}

export default Body;
