import React, {Component} from "react";
import {
  withGoogleMap,
  GoogleMap, Marker,
} from "react-google-maps";
import {connect} from "react-redux";
import {submitCoordinates} from "../actions/index";

const SimpleMapExampleGoogleMap = withGoogleMap(props => {
  return (
    <GoogleMap
      defaultZoom={11}
      defaultCenter={{lat: props.lat, lng: props.lng}}
    >
      {props.markers.map(marker => (
        <Marker
          {...marker}
        />
      ))}
    </GoogleMap>
  );
});

class MyMap extends Component {
  render() {
    this.props.submitCoordinates();

    let state = {
      markers: [{
        position: {
          lat: this.props.lat,
          lng: this.props.lng,
        },
        key: `Cracow`,
        defaultAnimation: 4,
        //icon: icon
      }],
    };
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
          markers={state.markers}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lat: state.coordinates.lat,
    lng: state.coordinates.lng
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    submitCoordinates: () => dispatch(submitCoordinates())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MyMap);