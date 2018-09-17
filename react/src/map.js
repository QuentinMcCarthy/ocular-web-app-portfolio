import React from 'react';
import { GoogleApiWrapper, Map, Marker, InfoWindow } from 'google-maps-react';

class GoogleMapsContainer extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			map: [],
			showingInfoWindow: false,
			activeMarker: {},
			selectedPlace: {},
			visible: false,
		
		}
		this.onMarkerClick = this.onMarkerClick.bind(this);

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
				disableDefaultUI = {false}
		        zoom = { 14}
		        initialCenter = {{ lat: -41.328075, lng: 174.797316 }}
	      	>
	       <Marker onClick={this.onMarkerClick}
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
  apiKey: 'AIzaSyDDZDbzY30ZhRhi2S4fER5I1HQbskuAs_U'
})(GoogleMapsContainer)
