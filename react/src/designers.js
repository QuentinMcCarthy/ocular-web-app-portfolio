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
						display_name: ''
					}
				},
				projects: {},
				fields: ''
			},
			isLoaded: false,
			error: null,
			designerPic: { backgroundImage: ''},
			designerBg: { backgroundImage: '' }
		}
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
								projects: userProjectData,
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
			<div id='sectDesigners' style={this.props.designersOpen}>

				<div className='designer-profile position-relative'>
					<div className='profile-bg-image position-relative w-100 h-100'  style={this.state.backgroundBg}></div>
					<div className='profile-details position-absolute w-100 h-100'>
						<div className='statsRibbon position-absolute d-flex flex-column justify-content-center align-items-center'>
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
						<div id='profileSplitBottom' className='splitv-third position-relative w-100'></div>
					</div>
				</div>
				<Stats/>
			</div>
		)
	}
}

export default Designers;
