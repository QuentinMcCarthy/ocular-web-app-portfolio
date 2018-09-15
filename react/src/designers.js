import React, { Component } from 'react';

class Designers extends Component {
	constructor(props){
		super(props);

		this.state = {
			staff: [],
			currStaff: [],
			isLoaded: false,
			error: null,
			designerPic: { backgroundImage: ''}
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
						var userImage = userData.user.images

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

						this.setState({
							isLoaded: true,
							currStaff: userData,
							designerPic: { backgroundImage: `url(${userImage})` }
						});
					}, (err) => {
						this.setState({
							isLoaded: true,
							error: err
						});
					});
			}, (err)=> {
				this.setState({
					error: err
				});
			});
	}

	render(){
		return (
			<div id='sectDesigners' style={this.props.designersOpen}>
				<div className='designer-profile position-relative'>
					<div className='profile-bg-image'></div>
					<div className='splitv-third position-relative w-100'></div>
					<div className='splitv-third position-relative w-100 d-flex align-items-center flex-column'>
						<div className='profile-image h-100' style={this.state.designerPic}></div>
					</div>
					<div className='splitv-third position-relative w-100'></div>
				</div>
			</div>
		)
	}
}

export default Designers;
