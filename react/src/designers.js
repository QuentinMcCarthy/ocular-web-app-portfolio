import React, { Component } from 'react';
import Stats from './stats';

var allStats = [['Project Name', 'Appreciations', 'Comments', 'Views']];

class Designers extends Component {
	constructor(props){
		super(props);

		this.state = {
			staff: [],
			currStaff: {
				profile: {
					user: {
						display_name: '',
						stats: {
							views: 0,
							appreciations: 0,
							comments: 0
						}
					}
				},
				projects: {},
				fields: '',

			},
			isLoaded: false,
			error: null,
			designerPic: { backgroundImage: ''},
			designerBg: { backgroundImage: '' },
			designersHide: { display: 'block' },
			viewStatsOpen: { display: 'none' },
			disignersListDiv : {display: 'none'},
			singleProject: [],
			dataTable: []
		}

		this.viewStats = this.viewStats.bind(this);
		this.statsHandle = this.statsHandle.bind(this);
		this.viewDesigners = this.viewDesigners.bind(this);
	}

	componentDidMount() {
		fetch('http://192.168.33.10:4000/data/staff.json')
			.then(res => res.json())
			.then((staffData) => {
				this.setState({
					staff: staffData
				});

				fetch(`http://192.168.33.10:4000/behance/user/${staffData[0].behance}`)
					.then(res => res.json())
					.then((userData) => {
						var userImage = userData.user.images,
							fields = '';

						switch('string'){
							case typeof userImage[276]:
								userImage = userImage[276];

								break;
							case typeof userImage[230]:
								userImage = userImage[230];

								break;
							case typeof userImage[138]:
								userImage = userImage[138];

								break;
							case typeof userImage[115]:
								userImage = userImage[115];

								break;
							case typeof userImage[100]:
								userImage = userImage[100];

								break;
							case typeof userImage[50]:
								userImage = userImage[50];

								break;
							default:
								userImage = 'https://placehold.it/230x230';
						}

						fields = userData.user.fields[0];

						for(var i = 1; i < userData.user.fields.length; i++){
							fields+=`, ${userData.user.fields[i]}`;
						}

						this.setState({
							isLoaded: true,
							currStaff: {
								profile: userData,
								projects: this.state.currStaff.projects,
								fields: fields
							},
							designerPic: { backgroundImage: `url(${userImage})` }
						});
					}, (err) => {
						this.setState({
							isLoaded: true,
							error: err
						});
					});

				fetch(`http://192.168.33.10:4000/behance/user/${staffData[0].behance}/projects`)
					.then(res => res.json())
					.then((userProjectData) => {
						this.setState({
							currStaff: {
								profile: this.state.currStaff.profile,
								projects: userProjectData.projects,
								fields: this.state.currStaff.fields
							},
							dataTable: allStats,
							backgroundBg: { backgroundImage: `url(${userProjectData.projects[0].covers.original})` }
						});
					}, (err) => {
						this.setState({
							isLoaded: true,
							error: err
						});
					});
			}, (err) => {
				this.setState({
					error: err
				});
			});
	}

	render(){
		return (
			<div className='sectContainer'>
				<div id='sectDesigners' style={this.props.designersOpen}>

					<div className='designer-profile position-relative' style={this.state.designersHide}>
						<div className='profile-bg-image position-relative w-100 h-100'  style={this.state.backgroundBg}></div>
						<div className='profile-details position-absolute w-100 h-100'>
							<div className='statsRibbon position-absolute d-flex flex-column justify-content-center align-items-center' onClick={this.viewStats}>
								<i className="far fa-chart-bar"></i>
								<span>View Stats</span>
							</div>
							<div id='profileSplitTop' className='splitv-third position-relative w-100'>
								<button type='button' name='button' className='scroll-left' onClick={this.props.backToHome}>
									<i className='fas fa-angle-left'></i>
								</button>
							</div>
							<div id='profileSplitCenter' className='splitv-third position-relative w-100 d-flex align-items-center flex-column'>
								<div className='profile-image h-100' style={this.state.designerPic}></div>
								<p className='profile-name'>{this.state.currStaff.profile.user.display_name} <i className="fas fa-angle-down" onClick={this.viewDesigners} ></i></p>
								<p className='profile-fields'>{this.state.currStaff.fields}</p>
							</div>
							<div id='listOfDesigners' style= {this.state.disignersListDiv}>
								<ul className='designersName'>
									<li className='desingers-name' value='ben'>Ben Mckenzie</li>
									<li className='desingers-name' value='sophia'>Sophia Ong</li>
									<li className='desingers-name'value='darryl'>Darryl Powell</li>
									<li className='desingers-name' value='jayna'>Jayna Ravji</li>
									<li className='desingers-name' value='michael'>Michael Dessoulavy</li>
								</ul>
							</div>
							<div id='profileSplitBottom' className='splitv-third position-relative w-100 d-flex'>
								<div className='h-100 flex-fill'>
									<div className='profile-views h-100 d-flex flex-column justify-content-center align-items-center'>
										<i className="far fa-eye"></i>
										<span>{this.state.currStaff.profile.user.stats.views}</span>
									</div>
								</div>
								<div className='h-100 flex-fill'>
									<div className='profile-appreciations h-100 d-flex flex-column justify-content-center align-items-center'>
										<i className="fas fa-thumbs-up"></i>
										<span>{this.state.currStaff.profile.user.stats.appreciations}</span>
									</div>
								</div>
								<div className='h-100 flex-fill'>
									<div className='profile-comments h-100 d-flex flex-column justify-content-center align-items-center'>
										<i className="fas fa-comments"></i>
										<span>{this.state.currStaff.profile.user.stats.comments}</span>
									</div>
								</div>
							</div>

						</div>
						<div className='row latest-projects'>
							<div className='col-sm project-indiviudal'>
		                		<div className='project-img'></div>
		                		<h3 className='third-heading'>Ocular Christmas Gift</h3>
		                	</div>
						</div>
					</div>
				</div>
				<Stats
					{...this.state}
					closeStats = {this.statsHandle}
					designerName = {this.state.currStaff.profile.user.first_name}
					theData = {this.state.dataTable}
				/>
			</div>
		)
	}

	// Open the stats section on click of 'View Stats'
	viewStats(e){
		e.preventDefault();
		if(this.state.viewStatsOpen.display === 'none'){
			this.setState({
				designersHide: { display: 'none' },
				viewStatsOpen: { display: 'block' }
			});
		} else{
			this.setState({
				designersHide: { display: 'block' },
				viewStatsOpen: { display: 'none' }
			});
		}

		// For looping the this.state.currStaff.projects which is compiled into in allStats array
		// This creates the data table which is needed for the Google Charts API
		for(var j = 0; j < this.state.currStaff.projects.length; j++){
			allStats.push([
				this.state.currStaff.projects[j].name,
				this.state.currStaff.projects[j].stats.appreciations,
				this.state.currStaff.projects[j].stats.comments,
				this.state.currStaff.projects[j].stats.views
			])
		}
	}

	// Handling the closing of the Stats section
	statsHandle(e){
		e.preventDefault();
		this.setState({
			viewStatsOpen: { display: 'none' },
			designersHide: { display: 'block' }
		});
	}

	viewDesigners() {
		if(this.state.disignersListDiv.display === 'none'){
			this.setState({
				disignersListDiv: { display: 'block' }
			});
		} else{
			this.setState({
				disignersListDiv: { display: 'none' }
			});
		}
	}


}

export default Designers;
