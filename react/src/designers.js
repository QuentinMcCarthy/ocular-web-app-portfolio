import React, { Component } from 'react';
import Stats from './stats';

var singleProjectStats = [];
var allTheStats = [['Project Name', 'Appreciations', 'Comments', 'Views']];

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
			singleProject: [],
			allStats: [['Project Name', 'Appreciations', 'Comments', 'Views']],
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
						this.setState({
							currStaff: {
								profile: this.state.currStaff.profile,
								projects: userProjectData.projects,
								fields: this.state.currStaff.fields
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

		for(var j = 0; j < this.state.currStaff.projects.length; j++) {
			singleProjectStats.push(
				this.state.currStaff.projects[j].name,
				this.state.currStaff.projects[j].stats.appreciations,
				this.state.currStaff.projects[j].stats.comments,
				this.state.currStaff.projects[j].stats.views
			);

			allTheStats.push(singleProjectStats);

			// singleProjectStats.length = 0;

			break;

 // ----------------------------------------------------------------------------

			// this.setState ({
			// 	singleProject: [this.state.currStaff.projects[j].name
			// 					this.state.currStaff.projects[j].stats.appreciations,
			// 					this.state.currStaff.projects[j].stats.comments,
			// 					this.state.currStaff.projects[j].stats.views
			// 	],
			// 	allStats: singleProject
			// });

 // ----------------------------------------------------------------------------

			// The code here should push a single projects stats into an array (singleProjectStats).
			// The array is then carried over into another array will contains a bunch of
			// arrays which are the inidivdual project stats. (arraies inside of an array)
			// Once an inidivudal project is pushed into the final array (allTheStats) the singleProjectStats
			// array is cleared so that the next project can be pushed into the singleProjectStats and that array
			// is added to the allTheStats array. This is repeated via a for loop.
		}

		console.log('this is the single stat which complies into one array');
		console.log(singleProjectStats);
		console.log('these are all the inidivual stats inside one array');
		console.log(allTheStats);

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
