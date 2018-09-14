import React, { Component } from 'react';

class Home extends Component {
	render(){
		return (
			<div id='sectIndex' style={this.props.homeOpen}>
	            {/* Banner */}
	            <div className='banner'>
	                <div className='main-image'>
	                    <div className='transparent-layer'></div>
	                    <div className='banner-content'>
	                      <h1 className='banner-title'>Hi, We're Ocular.</h1>
	                      <p className='banner-text'>WEB STRATEGY BRAND DESIGN VIDEO</p>
	                      <button type='button' name='button' className='scroll-down'>Find out more <i className='fas fa-angle-down'></i></button>
	                    </div>
	                </div>
	            </div> {/* banner ends */}

	            <div className='container'>
	                {/* Our goal section */}
	                <div className='our-goal'>
	                    <h2 className='second-heading'>Our Goal</h2>
	                    <hr className='title-hr'/>
	                    <p className='body-text'>Our goal is to provide our clients with an expectional outcome with a insightful and indepth process. We care about our clients wants and needs whilst catering to the audience their business attracts</p>
	                </div>

	                {/* Our latest projects section */}
	                <h2 className='second-heading'>Our Latest Projects</h2>
	                <hr className='title-hr'/>
	                <div className='row latest-projects'>
	                	<div className='col-sm project-indiviudal'>
	                		<div className='project-img' id='projectImg' title='Miss Monday'></div>
	                		<h3 className='third-heading' id='projectTitle'>Ocular Christmas Present</h3>
	                	</div>

						<div className='col-sm project-indiviudal'>
	                		<div className='project-img' id='projectImg2' title='Miss Monday'></div>
	                		<h3 className='third-heading' id='projectTitle2'>Miss Monday</h3>
	                	</div>

						<div className='col-sm project-indiviudal'>
	                		<div className='project-img' id='projectImg3' title='Miss Monday'></div>
	                		<h3 className='third-heading' id='projectTitle3'>Seafood New Zealand Website</h3>
	                	</div>
	                </div>
	        	</div>
			</div>
		)
	}
}

export default Home;
