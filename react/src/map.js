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
		this.onMarkerClick = this.onMarkerClick.bind(this);
	}

	componentWillUnmount() {
		const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
		const script = document.createElement('script');
		script.src = `https://maps.googleapis.com/maps/api/js?${API_KEY}&callback=initMap`;
		script.async = true;
		script.defer = true;
		document.head.append(script);
	}

  	render() {
	  	const pos = {
		 	lat :-41.328075 ,
			lng:174.799973
	  	}


	    return (
			<Map
				google = { this.props.google }
				disableDefaultUI = {false}
				zoom = { 14}
				initialCenter = {{ lat: -41.328075, lng: 174.797316 }}
			>
			    <Marker onClick={this.onMarkerClick}
					icon={{
					   url: 'img/eye.jpeg',
					}}
					animation = {this.props.google.maps.Animation.DROP}
				    position = {pos}
					name = {'Ocular'}
			    />
				<InfoWindow
					onOpen={this.windowHasOpened}
					marker = {this.state.activeMarker}
				    visible = {this.state.showingInfoWindow}>
				    <div>
				        <p> {this.state.selectedPlace.name} </p>
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

export default GoogleApiWrapper({
})(GoogleMapsContainer)
