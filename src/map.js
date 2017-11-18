import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div style={{
    position: 'relative', color: 'white', background: 'red',
    height: 15, width: 15, top: -7, left: -7 }}>{text}</div>;

const MapMarker = ({props}) => {
  return (
    <div style={{ position: 'relative', color: 'black', background: 'yellow',
      height: 10, width: 10, top: -5, left: -5 }}>
      {props}
    </div>
  )
}

export class Map extends React.Component {
  render() {
    return (
      <GoogleMapReact
        bootstrapURLKeys={{key: 'AIzaSyD8P99A42W2kEoLdRb_9T6I-9wlGO7r3Rs'}}
        defaultCenter={{lat: this.props.lat, lng: this.props.lng}}
        defaultZoom={14}
      >
        <AnyReactComponent
          lat={this.props.lat}
          lng={this.props.lng}
          text={'*'}
        />
        {this.props.yelpResults.map((marker, index) => {
            return (
                <MapMarker
                lat={marker.coordinates.latitude}
                lng={marker.coordinates.longitude}
                props={index + 1} /> 
            );
        })}
      </GoogleMapReact>
    );
  }
}