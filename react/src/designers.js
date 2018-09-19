import React, { Component } from 'react';
import Stats from './stats';

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
				singlePushProjectStats: [],
				userProjectStats: []
			},
			isLoaded: false,
			error: null,
			designerPic: { backgroundImage: ''},
			designerBg: { backgroundImage: '' },
			designersHide: { display: 'block' },
			viewStatsOpen: { display: 'none' }
		}
		this.viewStats = this.viewStats.bind(this);
		this.statsHandle = this.statsHandle.bind(this);
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
						userProjectStats: [];
						for(var j = 0; j < userProjectData.projects.length; j++){
							console.log(userProjectData.projects[j].name);
							console.log(userProjectData.projects[j].stats.appreciations);
							console.log(userProjectData.projects[j].stats.comments);
							console.log(userProjectData.projects[j].stats.views);
						}
						this.setState({
							currStaff: {
								profile: this.state.currStaff.profile,
								projects: userProjectData.projects,
								fields: this.state.currStaff.fields,
							},
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
		// console.log(this.state.currStaff.projects[0]);
		// console.log(this.state.currStaff.userProjectStats);
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
								<p className='profile-name'>{this.state.currStaff.profile.user.display_name}</p>
								<p className='profile-fields'>{this.state.currStaff.fields}</p>
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
					</div>
				</div>
				<Stats
					{...this.state}
					closeStats = {this.statsHandle}
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
	}

	// Handling the closing of the Stats section
	statsHandle(e){
		e.preventDefault();
		this.setState({
			viewStatsOpen: { display: 'none' },
			designersHide: { display: 'block' }
		});
	}
}

export default Designers;
