/**
 * Created by Patryk on 2017-05-29.
 */

import React, {Component} from 'react';
import {
  withGoogleMap,
  GoogleMap, InfoWindow, Circle,
} from "react-google-maps";
import {ListGroup, ListGroupItem} from "react-bootstrap";
import {connect} from "react-redux";
import {getDistrictData} from "../actions/index";

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

  let maxPrice = 0;

  for(let val of props.circleAreas){
    if(val.price > maxPrice){
      maxPrice = val.price;
    }
  }


  return (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{lat: props.lat, lng: props.lng}}
    >
      {
        props.circleAreas.map((district, index) => {
          console.log(props.circleAreas);
          let options;
          if (district.price > maxPrice * 0.66) {
            options = {
              fillColor: `red`,
              fillOpacity: 0.20,
              strokeColor: `red`,
              strokeOpacity: 1,
              strokeWeight: 1,
            }
          }else if (district.price > maxPrice * 0.33) {
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
          return <span>
            <Circle
              key={index}
              center={{lat: district.latitude, lng: district.longitude}}
              radius={district.radius}
              options={options}
              onClick={() => props.onMarkerClick(district)}
            />
            {district.showInfo && (
              <InfoWindow
                key={district.name}
                position={{lat: district.latitude, lng: district.longitude}}
                onCloseClick={() => props.onMarkerClose(district)}
              >
                <div>{district.name} : {Number(district.price).toFixed(2)} zł</div>
              </InfoWindow>
            )}
          </span>

        })
      }
    </GoogleMap>
  );
});

class AvgPriceForDistrictMap extends Component {
  constructor(props){
    super(props);
    this.props.getDistrictData();
    this.state = {
      circles: this.addedShowInfo(this.props),
    };

    console.log(this.state);
  }

  addedShowInfo(props){
    return Object.values(props.districtData).map((value) => {
      return {
        ...value,
        showInfo: false,
      }
    })
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      circles: this.addedShowInfo(newProps)
    })
  }

  handleMarkerClick = this.handleMarkerClick.bind(this);
  handleMarkerClose = this.handleMarkerClose.bind(this);

  handleMarkerClick(targetMarker) {
    this.setState({
      circles: this.state.circles.map(circle => {
        if (circle === targetMarker) {
          return {
            ...circle,
            showInfo: true,
          };
        }
        return circle;
      }),
    });
  }

  handleMarkerClose(targetMarker) {
    this.setState({
      circles: this.state.circles.map(circle => {
        if (circle === targetMarker) {
          return {
            ...circle,
            showInfo: false,
          };
        }
        return circle;
      }),
    });
  }

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
            onMarkerClick={this.handleMarkerClick}
            onMarkerClose={this.handleMarkerClose}
            circleAreas={this.state.circles}
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

const mapStateToProps = (state) => {
  return {
    districtData: state.serverData.districtData,
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getDistrictData: () => dispatch(getDistrictData())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AvgPriceForDistrictMap);