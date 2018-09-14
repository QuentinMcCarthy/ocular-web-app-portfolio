import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import { Chart } from 'react-google-charts';

import Home from './home';
import Designers from './designers';
import Contact from './contact';

import 'bootstrap/dist/css/bootstrap.min.css';
// import 'jquery/dist/jquery.min.js';
// import 'popper.js/dist/umd/popper.min.js';
// import 'bootstrap/dist/js/bootstrap.min.js';
// import 'google-maps/lib/Google.min.js';

// import './css/index.min.css';
import './css/index.css';
// import './js/script.min.js';
// import './js/script.js';

class App extends Component {
	constructor(props){
		super(props);

		this.state = {
			menuOpen: 'display: none;'
		}
	}

	render() {
		return (
			<div>
				{/* Nav */}
				<div id='nav' className='header fixed-top'>
					<div className='header-bar'>
						<img alt='Ocular Logo' src='img/Ocular-Logo.png' width='120' className='logo'/>
						<button type='button' name='button' className='menu-btn'><i className='fas fa-bars fa-3x'></i>Menu</button>
					</div>

					<ul className='menu' id='menu'>
						<li id='navIndex' className='menu-item'>Home</li>
						<li id='navDesigners' className='menu-item'>Designers</li>
						<li id='navContact' className='menu-item'>Contact</li>
					</ul>
				</div>

				<div className='scroll-down-btn-wrapper fixed-bottom'>
					<button type='button' name='button' className='scroll-up'><i className='fas fa-angle-up'></i></button>
				</div>

				<Home />
				<Designers />
				<Contact />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
