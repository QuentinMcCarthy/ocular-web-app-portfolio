import React from 'react';
import { GoogleApiWrapper, Map, Marker, InfoWindow } from 'google-maps-react';

class GoogleMapsContainer extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			map: null,
			showingInfoWindow: false,
			activeMarker: {},
			selectedPlace: {},
			visible: false,
		}
	}

	componentDidMount() {
		fetch('http://192.168.33.10:4000/config')
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
	        <Marker onclick = {this.onMarkerClick}
					animation = {this.props.google.maps.Animation.DROP}
		          	position = {pos}
					name = {'Ocular'}
					icon={{
					   url: 'img/eye.jpeg',
					   }}
	        />
			<InfoWindow
				onOpen={this.windowHasOpened}
				marker = {this.state.activeMarker}
		        visible = {this.state.showingInfoWindow}>
		        <div>
		            <h1> {this.state.selectedPlace.name} </h1>
		        </div>
	        </InfoWindow>
			</Map>
	    );
  	}
	onMarkerClick(props, marker) {
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
    }

}
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const MapExport = GoogleApiWrapper({
   apiKey: API_KEY
})(GoogleMapsContainer);

export default MapExport
