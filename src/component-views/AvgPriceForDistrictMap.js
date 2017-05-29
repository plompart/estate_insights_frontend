/**
 * Created by Patryk on 2017-05-29.
 */

import React, {Component} from 'react';
import {
  withGoogleMap,
  GoogleMap, InfoWindow, Circle,
} from "react-google-maps";
import {ListGroup, ListGroupItem} from "react-bootstrap";

const SimpleMapExampleGoogleMap = withGoogleMap(props => {
  let circleAreas = [
    {
      districtName: "Stare Miasto",
      position: {
        lat: 50.062659,
        lng: 19.906899
      },
      avgPrice: 210000,
      radius: 1000,
    },
    {
      districtName: "Bronowice",
      position: {
        lat: 50.0830503,
        lng: 19.8370422
      },
      avgPrice: 210000,
      radius: 1200,
    },
    {
      districtName: "Grzegórzki",
      position: {
        lat: 50.0646066,
        lng: 19.9529138
      },
      avgPrice: 240000,
      radius: 1200,
    },
    {
      districtName: "Kazimierz",
      position: {
        lat: 50.0515918,
        lng: 19.9357531
      },
      avgPrice: 270000,
      radius: 1000,
    },
    {
      districtName: "Prądnik Biały",
      position: {
        lat: 50.1023721,
        lng: 19.8891376
      },
      avgPrice: 230000,
      radius: 1700,
    },
  ];

  return (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{lat: props.lat, lng: props.lng}}
    >
      {
        circleAreas.map(district => {
          let options;
          if (district.avgPrice > 250000) {
            options = {
              fillColor: `red`,
              fillOpacity: 0.20,
              strokeColor: `red`,
              strokeOpacity: 1,
              strokeWeight: 1,
            }
          }else if (district.avgPrice > 220000) {
            options = {
              fillColor: `yellow`,
              fillOpacity: 0.20,
              strokeColor: `yellow`,
              strokeOpacity: 1,
              strokeWeight: 1,
            }
          }else {
            options = {
              fillColor: `green`,
              fillOpacity: 0.20,
              strokeColor: `green`,
              strokeOpacity: 1,
              strokeWeight: 1,
            }
          }
          return (
          <Circle
          center={district.position}
          radius={district.radius}
          options={options}
          />
          )
        })
      }
      {
        circleAreas.map(district => {
          return (
            <InfoWindow position={district.position}>
              <div>{district.districtName} : {district.avgPrice} zł</div>
            </InfoWindow>
          )
        })
      }
    </GoogleMap>
  );
});

class AvgPriceForDistrictMap extends Component {
  render() {
    return (
      <ListGroup>
        <ListGroupItem active>Średnie ceny mieszkań dla każdej dzielnicy</ListGroupItem>
        <ListGroupItem><div className="MyMap" style={{
          height: 500,
          width: '100%',
          display: 'flex',
          flexFlow: 'row nowrap',
          justifyContent: 'center',
          padding: 0
        }}>
          <SimpleMapExampleGoogleMap
            lat={this.props.lat}
            lng={this.props.lng}
            containerElement={
              <div
                style={{
                  width: "100%",
                  marginLeft: 0
                }}
              />
            }
            mapElement={
              <div style={{height: `100%`}}/>
            }
          />
        </div></ListGroupItem>
      </ListGroup>
    );
  }
}

export default AvgPriceForDistrictMap;
