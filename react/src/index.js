import React, { Component } from 'react';
import ReactDOM from "react-dom";
// import { Chart } from "react-google-charts";
import "./css/index.min.css";

class App extends Component {
	render() {
		return (
			<div>
				<div className="designer-profile">
					<div className="profile-image">

					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("desprofiles"));
