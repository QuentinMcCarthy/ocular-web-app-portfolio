import React, { Component } from 'react';

class Contact extends Component {
	render(){
		return (
			<div id='sectContact'>
				<div className='contact-wrapper'>
					<div className='contact'>
						<h2 className='second-heading'>Contact Us</h2>
						<hr className='title-hr' />
					</div>
					<div className='contact-details'>
						<p className='body-text' id='contactInfoP'> Unit 7/68 Kingsford Smith Street <br />Lyall Bay <br />Welligton <br /><br />04 920 2208 <br />stevo@ocular.co.nz</p>
						<div className='contact-icons'>
							<ul>
								<li><a href='https://www.facebook.com/ocularnz/'><i className='fab fa-facebook'></i></a></li>
								<li><a href='https://nz.linkedin.com/company/ocular'><i className='fab fa-linkedin'></i></a></li>
								<li><a href='https://www.instagram.com/ocular_nz/'><i className='fab fa-instagram'></i></a></li>
								<li><a href='https://www.youtube.com/user/OcularNZ'><i className='fab fa-youtube'></i></a></li>
							</ul>
						</div>
					</div>
				</div>
				<div className='contact-map'>
					<a href='https://placeholder.com'><img alt='placeholder' src='https://via.placeholder.com/320x220' /></a>
				</div>
			</div>
		)
	}
}

export default Contact;
