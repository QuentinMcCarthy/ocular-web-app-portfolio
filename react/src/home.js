import React, { Component } from 'react';

class Home extends Component {
	render(){
		return (
			<div id='sectIndex' style={this.props.homeOpen}>
				<div className='scroll-up-btn-wrapper fixed-bottom'>
					<button type='button' name='button' className='scroll-up'><i className='fas fa-angle-up'></i></button>
				</div>

	            {/* Banner */}
	            <div className='banner'>
	                <div className='main-image'>
	                    <div className='transparent-layer'></div>
	                    <div className='banner-content'>
	                      <h1 className='banner-title'>Hi, We're Ocular.</h1>
	                      <p className='banner-text'>Web Strategy Brand Design Video</p>
	                      <button type='button' name='button' className='scroll-down'>Find out more <i className='fas fa-angle-down'></i></button>
	                    </div>
	                </div>
	            </div> {/* banner ends */}


                {/* Our goal section */}
                <div className='our-goal'>
					<div className='row'>
						<div className='col-sm'>
							<h2 className='second-heading'>Our Goal</h2>
							<hr className='title-hr'/>
						</div>
						<div className='col-sm'>
	                    	<p className='body-text our-goal-text'>Our goal is to provide our clients with an expectional outcome with a insightful and indepth process. We care about our clients wants and needs whilst catering to the audience their business attracts</p>
						</div>
					</div>
                </div>

				<div className='container'>
	                {/* Our latest projects section */}
	                <h2 className='second-heading'>Our Latest Projects</h2>
	                <hr className='title-hr latest-projects-hr'/>
	                <div className='row latest-projects'>
	                	<div className='col-sm project-indiviudal'>
	                		<div className='project-img' id='projectImg' title='Miss Monday'></div>
	                		<h3 className='third-heading' id='projectTitle'>Ocular - Christmas Present</h3>
	                	</div>

						<div className='col-sm project-indiviudal'>
	                		<div className='project-img' id='projectImg2' title='Miss Monday'></div>
	                		<h3 className='third-heading' id='projectTitle2'>Miss Monday</h3>
	                	</div>

						<div className='col-sm project-indiviudal'>
	                		<div className='project-img' id='projectImg3' title='Miss Monday'></div>
	                		<h3 className='third-heading' id='projectTitle3'>Seafood New Zealand Website</h3>
	                	</div>

						<div className='col-sm project-indiviudal'>
	                		<div className='project-img' id='projectImg3' title='Miss Monday'></div>
	                		<h3 className='third-heading' id='projectTitle3'>Seafood New Zealand Website</h3>
	                	</div>
	                </div>
					<div className="behance-logo">
						<img alt='behance logo' src="img/behance_logo.png" height='30'></img>
					</div>
	        	</div>
			</div>
		)
	}
}

export default Home;
