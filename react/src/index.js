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
			navOpen: {display: 'none'},
			homeOpen: {display: 'block'},
			designersOpen: {display: 'none'},
			contactOpen: {display: 'none'}
		}

		this.navToggle = this.navToggle.bind(this);
		this.navToHome = this.navToHome.bind(this);
		this.navToDesigners = this.navToDesigners.bind(this);
		this.navToContact = this.navToContact.bind(this);
	}

	render(){
		return (
			<div>
				{/* Nav */}
				<div id='nav' className='header fixed-top'>
					<div className='header-bar'>
						<img alt='Ocular Logo' src='img/ocular_logo.png' width='120' className='logo'/>
						<button type='button' name='button' className='menu-btn' onClick={this.navToggle}><i className='fas fa-bars fa-3x'></i>Menu</button>
					</div>

					<ul className='menu' id='menu' style={this.state.navOpen}>
						<li id='navIndex' className='menu-item' onClick={this.navToHome}>Home</li>
						<li id='navDesigners' className='menu-item' onClick={this.navToDesigners}>Designers</li>
						<li id='navContact' className='menu-item' onClick={this.navToContact}>Contact</li>
					</ul>
				</div>

				<div className='scroll-down-btn-wrapper fixed-bottom'>
					<button type='button' name='button' className='scroll-up'><i className='fas fa-angle-up'></i></button>
				</div>

				<Home
					{...this.state}
				/>
				<Designers
					{...this.state}
				/>
				<Contact
					{...this.state}
				/>
			</div>
		);
	}

	navToggle(e){
		e.preventDefault();

		if(this.state.navOpen.display === 'none'){
			this.setState({
				navOpen: {display: 'block'}
			});
		} else{
			this.setState({
				navOpen: {display: 'none'}
			});
		}
	}

	navToHome(e){
		e.preventDefault();

		if(this.state.homeOpen.display === 'none'){
			this.setState({
				navOpen: {display: 'none'},
				homeOpen: {display: 'block'},
				designersOpen: {display: 'none'},
				contactOpen: {display: 'none'}
			});
		} else{
			this.setState({
				navOpen: {display: 'none'},
				homeOpen: {display: 'none'}
			});
		}
	}

	navToDesigners(e){
		e.preventDefault();

		if(this.state.designersOpen.display === 'none'){
			this.setState({
				navOpen: {display: 'none'},
				homeOpen: {display: 'none'},
				designersOpen: {display: 'block'},
				contactOpen: {display: 'none'}
			});
		} else{
			this.setState({
				navOpen: {display: 'none'},
				designersOpen: {display: 'none'}
			});
		}
	}

	navToContact(e){
		e.preventDefault();

		if(this.state.contactOpen.display === 'none'){
			this.setState({
				navOpen: {display: 'none'},
				homeOpen: {display: 'none'},
				designersOpen: {display: 'none'},
				contactOpen: {display: 'block'}
			});
		} else{
			this.setState({
				navOpen: {display: 'none'},
				contactOpen: {display: 'none'}
			});
		}
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
