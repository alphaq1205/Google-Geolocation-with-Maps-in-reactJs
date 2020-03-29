import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>

class SimpleMap extends Component {
  constructor(){
    super()
    this.state={
      longitude:0,
      latitude:0,
      zoom: 11,
      center: {
        lat: 59.95,
        lng: 30.33
      }
    }
  }

  componentWillMount = () => {
    navigator.geolocation.getCurrentPosition(
       (position) => {
         var lat=parseFloat(position.coords.latitude)
         var lon=parseFloat(position.coords.longitude)
         console.log(lat+'...........'+lon)
          this.setState({ longitude:lon,latitude:lat })
           
       }
    )
 }
  
 
 render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:'********ENTER YOUR GOOGLE-API HERE****************'}}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
          <AnyReactComponent
            lat={this.state.latitude}
            lng={this.state.longitude}
            text="Here you are"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap