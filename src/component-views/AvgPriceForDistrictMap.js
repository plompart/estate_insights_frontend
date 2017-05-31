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
    districtName: "Stare Miasto I",
      position: {
        lat: 50.061506,
        lng: 19.937884
      },
      avgPrice: 1000,
      radius: 1000,
    },
    {
      districtName: "Grzegórzki II",
      position: {
        lat: 50.062081,
        lng: 19.968075
      },
      avgPrice: 1000,
      radius: 1200,
    },
    {
      districtName: "Pradnik Czerwony III",
      position: {
        lat: 50.086976,
        lng: 19.968243
      },
      avgPrice: 1000,
      radius: 1200,
    },
    {
      districtName: "Pradnik Biały IV",
      position: {
        lat: 50.106925,
        lng: 19.917033
      },
      avgPrice: 1000,
      radius: 2000,
    },
    {
      districtName: "Bronowice VI",
      position: {
        lat: 50.082669,
        lng: 19.862920
      },
      avgPrice: 1000,
      radius: 1800,
    },{
      districtName: "Dębniki VII",
      position: {
        lat: 50.015957,
        lng: 19.874714
      },
      avgPrice: 1000,
      radius: 3000,
    },{
      districtName: "Zwierzyniec",
      position: {
        lat: 50.056583,
        lng: 19.854543
      },
      avgPrice: 1000,
      radius: 2200,
    },{
      districtName: "Łagiewniki - Borek Fałęcki",
      position: {
        lat: 50.017779,
        lng: 19.929685
      },
      avgPrice: 1000,
      radius: 1600,
    },{
      districtName: "Swoszowice",
      position: {
        lat: 49.988400,
        lng: 19.953777
      },
      avgPrice: 1000,
      radius: 1700,
    },{
      districtName: "Podgórze Duchackie",
      position: {
        lat: 50.013819,
        lng: 19.964842
      },
      avgPrice: 1000,
      radius: 1700,
    },{
      districtName: "Bieżanów - Prokocim",
      position: {
        lat: 50.018092,
        lng: 20.027471
      },
      avgPrice: 1000,
      radius: 2300,
    },{
      districtName: "Podgórze",
      position: {
        lat: 50.039351,
        lng: 19.978552
      },
      avgPrice: 1000,
      radius: 1700,
    },{
      districtName: "Czyżyny",
      position: {
        lat: 50.067815,
        lng: 20.010506
      },
      avgPrice: 1000,
      radius: 1900,
    },{
      districtName: "Mistrzejowice",
      position: {
        lat: 50.099978,
        lng: 20.007730
      },
      avgPrice: 1000,
      radius: 1700,
    },{
      districtName: "Bieńczyce",
      position: {
        lat: 50.086961,
        lng: 20.023791
      },
      avgPrice: 1000,
      radius: 800,
    },{
      districtName: "Wzgórza Krzesławickie",
      position: {
        lat: 50.100015,
        lng: 20.074530
      },
      avgPrice: 1000,
      radius: 2300,
    },{
      districtName: "Nowa Huta",
      position: {
        lat: 50.065119,
        lng: 20.128466
      },
      avgPrice: 1000,
      radius: 3400,
    },{
      districtName: "Krowodrza V",
      position: {
        lat: 50.071567,
        lng: 19.916865
      },
      avgPrice: 1000,
      radius: 1200,
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
          return <Circle key={district.districtName} center={district.position} radius={district.radius} options={options}/>

        })
      }
      {
        circleAreas.map(district => {
          return (
            <InfoWindow key={district.districtName} position={district.position}>
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
