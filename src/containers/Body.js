/**
 * Created by Patryk on 2017-04-01.
 */

import React, {Component} from 'react';
import MyHeader from "../components/MyHeader";
import {Col, Grid, PageHeader, Row} from "react-bootstrap";
import MyMap from "../component-views/MyMap";
import LocationView from "../component-views/LocationView";
import Valuation from "../component-views/Valuation";
import EquipmentView from "../component-views/EquipmentView";
import BarGraph from "../component-views/BarGraph";
import SidePanel from "./SidePanel";
import MainInfoView from "../component-views/MainInfoView";
import AvgPriceForDistrictMap from "../component-views/AvgPriceForDistrictMap";
import AllOffersMap from "../component-views/AllOffersMap";
import BubbleGraph from "../component-views/BubbleGraph";
import AdditionalInfoView from "../component-views/AdditionalInfoView";

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
                  <LocationView/>
                </Col>
              </Row>
              <Row className="show-grid">
                <Col xs={12} md={8} xsOffset={3} mdOffset={2}>
                  <MainInfoView/>
                </Col>
              </Row>
              <Row className="show-grid">
                <Col xs={12} md={8} xsOffset={3} mdOffset={2}>
                  <AdditionalInfoView/>
                </Col>
              </Row>
              <Row className="show-grid">
                <Col xs={12} md={8} xsOffset={3} mdOffset={2}>
                  <EquipmentView/>
                </Col>
              </Row>
              <Row className="show-grid">
                <Col xs={6} md={4} xsOffset={3} mdOffset={2}>
                  <BarGraph type="hist_price_per_sqm"/>
                </Col>
                <Col xs={6} md={4}>
                  <BarGraph type="hist_area"/>
                </Col>
              </Row>
              <Row className="show-grid">
                <Col xs={12} md={8} xsOffset={3} mdOffset={2}>
                  <AvgPriceForDistrictMap lat={50.060491} lng={19.9235729}/>
                </Col>
              </Row>
              <Row className="show-grid">
                <Col xs={12} md={8} xsOffset={3} mdOffset={2}>
                  <AllOffersMap lat={50.060491} lng={19.9235729}/>
                </Col>
              </Row>
              <Row className="show-grid">
                <Col xs={12} md={8} xsOffset={3} mdOffset={2}>
                  <BubbleGraph/>
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
