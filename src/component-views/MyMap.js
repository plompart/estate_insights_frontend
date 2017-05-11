import React, {Component} from "react";
import {
  withGoogleMap,
  GoogleMap, Marker,
} from "react-google-maps";
// import icon from './icon.png';

const SimpleMapExampleGoogleMap = withGoogleMap(props => {
  return (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{lat: 50.07949, lng: 19.948897}}
    >
      {props.markers.map(marker => (
        <Marker
          {...marker}
        />
      ))}
    </GoogleMap>
  );
});

export default class MyMap extends Component {
  state = {
    markers: [{
      position: {
        lat: 50.079490,
        lng: 19.948897,
      },
      key: `Cracow`,
      defaultAnimation: 4,
      //icon: icon
    }],
  };

  render() {
    return (
      <div className="MyMap" style={{
        height: 300,
        width: '100%',
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'center',
        padding: 0
      }}>
        <SimpleMapExampleGoogleMap
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
          markers={this.state.markers}
        />
      </div>
    );
  }
}