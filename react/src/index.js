import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Chart } from 'react-google-charts';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/jquery/dist/jquery.min.js';
import '../node_modules/popper.js/dist/umd/popper.min.js';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/google-maps/lib/Google.min.js';
// import './css/index.min.css';
import './css/index.css';

class App extends Component {
	render() {
		return (
			<div>
				<div className='designer-profile position-relative'>
					<div className='profile-bg-image'></div>
					<div className='splitv-third w-100'></div>
					<div className='splitv-third w-100 d-flex align-items-center flex-column'>
						<div className='profile-image h-100'>

						</div>
					</div>
					<div className='splitv-third w-100'></div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('desProfiles'));
