import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Chart } from 'react-google-charts';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
// import 'popper.js/dist/umd/popper.min.js';
// import 'bootstrap/dist/js/bootstrap.min.js';
import 'google-maps/lib/Google.min.js';


// import './css/index.min.css';
import './css/index.css';
// import './js/script.min.js';
// import './js/script.js';

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
