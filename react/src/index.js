import React, { Component } from 'react';
import ReactDOM from "react-dom";
// import { Chart } from "react-google-charts";
// import "./css/index.min.css";
import "./css/index.css";

class App extends Component {
	render() {
		return (
			<div>
				<div className="designer-profile position-relative">
					<div className="splitv-third w-100"></div>
					<div className="splitv-third w-100 d-flex align-items-center flex-column">
						<div className="profile-image h-100">

						</div>
					</div>
					<div className="splitv-third w-100"></div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("desprofiles"));
