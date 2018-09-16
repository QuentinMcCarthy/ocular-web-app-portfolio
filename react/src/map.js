import React from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';


class GoogleMapsContainer extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			map: [],
		}
	}

	componentDidMount() {
		fetch('http://192.168.33.10:4000/config.json')
		.then(res => res.json())
		.then((mapData) => {
			this.setState({
				map: mapData
			});

		}, (err)=> {
			this.setState({
				error: err
			});
		});
	}
  	render() {
	  	const pos = {
		 	lat :-41.328075 ,
			lng:174.799973
	  	}
    return (
      <Map
        google = { this.props.google }
		disableDefaultUI = {true}
        zoom = { 14 }
        initialCenter = {{ lat: -41.328075, lng: 174.797316 }}
      >
        <Marker
			animation = {this.props.google.maps.Animation.DROP}
          	position = {pos}
        />
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyDDZDbzY30ZhRhi2S4fER5I1HQbskuAs_U'
})(GoogleMapsContainer)
