import React, { Component } from 'react';
import {Link, animateScroll as scroll, scroller} from 'react-scroll';

class Home extends Component {

	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			staff: [],
			items: [],
			projects: {
				project1: { title: '', image: '', imageProp: ''},
				project2: { title: '', image: '', imageProp: '' },
				project3: { title: '', image: '', imageProp: '' },
				project4: { title: '', image: '', imageProp: '' }
			}
		};
	}

	componentDidMount() {
		fetch(`http://192.168.33.10:4000/data/staff.json`)
		.then(res => res.json())
		.then((staffResults) => {
			this.setState({
				staff:staffResults
			});


		fetch(`http://192.168.33.10:4000/behance/user/${staffResults[0].behance}/projects`)
		.then(res => res.json())
		.then(
			(result) => {
				this.setState({
					isLoaded: true,
					items: result,
					projects: {
						project1: { title: result.projects[0].name,
									image: result.projects[0].covers[404],
									imgProp: { backgroundImage: `url(${result.projects[0].covers[404]})`}
						},
						project2: { title: result.projects[1].name,
									image: result.projects[1].covers[404],
									imgProp: { backgroundImage: `url(${result.projects[1].covers[404]})`}
						},
						project3: { title: result.projects[2].name,
									image: result.projects[2].covers[404],
									imgProp: { backgroundImage: `url(${result.projects[2].covers[404]})`}
						},
						project4: { title: result.projects[3].name,
									image: result.projects[3].covers[404],
									imgProp: { backgroundImage: `url(${result.projects[3].covers[404]})`}
						}
					}
				});
			},
			(error) => {
				this.setState({
					isLoaded: true,
					error
				});
			});
		});
  	}

	scrollTo() {
		scroller.scrollTo('scroll-to-element', {
		duration: 800,
		delay: 0,
		smooth: 'easeInOutQuart'
		})
	}

	scrollToTop() {
		scroll.scrollToTop();
	}


	render(){
		return (
			<div id='sectIndex' style={this.props.homeOpen}>
				<div className='scroll-up-btn-wrapper fixed-bottom'>
					<button type='button' name='button' className='scroll-up' onClick={this.scrollToTop}><i className='fas fa-angle-up'></i></button>
				</div>

	            {/* Banner */}
	            <div className='banner'>
	                <div className='main-image'>
	                    <div className='transparent-layer'></div>
	                    <div className='banner-content'>
	                      <h1 className='banner-title'>Hi, We're Ocular.</h1>
	                      <p className='banner-text'>Web Strategy Brand Design Video</p>
	                      <Link name='button' className='scroll-down' to='ourGoal' spy={true} smooth={true} duration={3000}>Find out more <i className='fas fa-angle-down'></i></Link>
	                    </div>
	                </div>
	            </div> {/* banner ends */}


                {/* Our goal section */}
                <div className='our-goal' name='ourGoal'>
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
	                		<div className='project-img' id='projectImg' title={this.state.projects.project1.title} style={this.state.projects.project1.imgProp}></div>
	                		<h3 className='third-heading' id='projectTitle'>{this.state.projects.project1.title}</h3>
	                	</div>

						<div className='col-sm project-indiviudal'>
	                		<div className='project-img' id='projectImg2' title={this.state.projects.project2.title} style={this.state.projects.project2.imgProp}></div>
	                		<h3 className='third-heading' id='projectTitle2'>{this.state.projects.project2.title}</h3>
	                	</div>

						<div className='col-sm project-indiviudal'>
	                		<div className='project-img' id='projectImg3' title={this.state.projects.project3.title} style={this.state.projects.project3.imgProp}></div>
	                		<h3 className='third-heading' id='projectTitle3'>{this.state.projects.project3.title}</h3>
	                	</div>

						<div className='col-sm project-indiviudal'>
	                		<div className='project-img' id='projectImg4' title={this.state.projects.project4.title} style={this.state.projects.project4.imgProp}></div>
	                		<h3 className='third-heading' id='projectTitle4'>{this.state.projects.project4.title}</h3>
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
