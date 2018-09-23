import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import { Chart } from 'react-google-charts';

import Home from './home';
import Designers from './designers';
import Contact from './contact';

import 'bootstrap/dist/css/bootstrap.min.css';
// import 'popper.js/dist/umd/popper.min.js';
// import 'bootstrap/dist/js/bootstrap.min.js';
// import 'google-maps/lib/Google.min.js';

import './css/index.min.css';

class App extends Component {
	constructor(props){
		super(props);

		this.state = {
			navHide: { display: 'block' },
			navMenuOpen: { display: 'none' },
			homeOpen: { display: 'block' },
			designersOpen: { display: 'none' },
			contactOpen: { display: 'none' }
		}

		this.navMenuToggle = this.navMenuToggle.bind(this);
		this.navToHome = this.navToHome.bind(this);
		this.navToDesigners = this.navToDesigners.bind(this);
		this.navToContact = this.navToContact.bind(this);
		this.openStats = this.openStats.bind(this);
		this.closeStats = this.closeStats.bind(this);
	}

	render(){
		return (
			<div>
				{/* Nav */}
				<div id='nav' className='header fixed-top' style={this.state.navHide}>
					<div className='header-bar'>
						<img alt='Ocular Logo' src='img/ocular_logo.png' width='120' className='logo' onClick={this.navToHome}/>
						<div className='nav-items-right'>
							<ul className='contact-icons-list'>
								<li className='inline-icons'><a className='social-link' href='https://www.facebook.com/ocularnz/'><i className='fab fa-facebook-f fb-icon'></i></a></li>
								<li className='inline-icons'><a className='social-link' href='https://www.instagram.com/ocular_nz/'><i className='fab fa-instagram insta-icon'></i></a></li>
								<li className='inline-icons'><a className='social-link' href='https://www.youtube.com/user/OcularNZ'><i className='fab fa-youtube youtube-icon'></i></a></li>
								<li className='inline-icons'><a className='social-link' href='https://nz.linkedin.com/company/ocular'><i className='fab fa-linkedin-in linkedin-icon'></i></a></li>
							</ul>
							<button type='button' name='button' className='menu-btn button-outline' onClick={this.navMenuToggle}><i className='fas fa-bars fa-3x'></i>Menu</button>
						</div>
					</div>

					<ul id='menu' className='menu' style={this.state.navMenuOpen}>
						<li id='navIndex' className='menu-item' onClick={this.navToHome}>Home</li>
						<li id='navDesigners' className='menu-item' onClick={this.navToDesigners}>Designers</li>
						<li id='navContact' className='menu-item' onClick={this.navToContact}>Contact</li>
					</ul>
				</div>

				<Home
					{...this.state}
				/>
				<Designers
					{...this.state}
					backToHome={this.navToHome}
					hideDesigners={this.openStats}
					showDesigners={this.closeStats}
				/>
				<Contact
					{...this.state}
				/>
			</div>
		);
	}

	navMenuToggle(e){
		e.preventDefault();

		if(this.state.navMenuOpen.display === 'none'){
			this.setState({
				navMenuOpen: { display: 'block' }
			});
		} else{
			this.setState({
				navMenuOpen: { display: 'none' }
			});
		}
	}

	navToHome(e){
		e.preventDefault();

		if(this.state.homeOpen.display === 'none'){
			this.setState({
				navHide: { display: 'block' },
				navMenuOpen: { display: 'none' },
				homeOpen: { display: 'block' },
				designersOpen: { display: 'none' },
				contactOpen: { display: 'none' }
			});
		} else{
			this.setState({
				navMenuOpen: { display: 'none' },
				homeOpen: { display: 'block' }
			});
		}
	}

	navToDesigners(e){
		e.preventDefault();

		if(this.state.designersOpen.display === 'none'){
			this.setState({
				navHide: { display: 'none' },
				navMenuOpen: { display: 'none' },
				homeOpen: { display: 'none' },
				designersOpen: { display: 'block' },
				contactOpen: { display: 'none' }
			});
		} else{
			this.setState({
				navMenuOpen: { display: 'none' },
				designersOpen: { display: 'none' }
			});
		}
	}

	navToContact(e){
		e.preventDefault();
		if(this.state.contactOpen.display === 'none'){
			this.setState({
				navHide: { display: 'block' },
				navMenuOpen: { display: 'none' },
				homeOpen: { display: 'none' },
				designersOpen: { display: 'none' },
				contactOpen: { display: 'block' }
			});
		} else{
			this.setState({
				navMenuOpen: { display: 'none' },
				contactOpen: { display: 'block' }
			});
		}
	}

	openStats(e){
		this.setState({
			designersOpen: { display: 'none' }
		})
	}
	closeStats(e){
		this.setState({
			designersOpen: { display: 'block' }
		})
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
