/**
 * Created by Patryk on 2017-05-29.
 */

import React, {Component} from 'react';
import {
  withGoogleMap,
  GoogleMap, Marker,
} from "react-google-maps";
import {ListGroup, ListGroupItem} from "react-bootstrap";
import { default as MarkerClusterer } from "react-google-maps/lib/addons/MarkerClusterer";

const SimpleMapExampleGoogleMap = withGoogleMap(props => {
  let markers = [];

  for(let i = 0; i < 1000; i++) {
    let position = {};
    position.lat = Math.random()/8.0 + 50;
    position.lng = Math.random()/4.0 + 19.8;
    markers.push({position,id: i});
  }

  return (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{lat: props.lat, lng: props.lng}}
    >
      <MarkerClusterer
        averageCenter
        enableRetinaIcons
        gridSize={60}
      >
        {markers.map(marker => (
          <Marker
            position={marker.position}
            key={marker.id}
          />
        ))}
      </MarkerClusterer>
    </GoogleMap>
  );
});

class AllOffersMap extends Component {
  render() {
    return (
      <ListGroup>
        <ListGroupItem active>Lokalizacja ofert</ListGroupItem>
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

export default AllOffersMap;
