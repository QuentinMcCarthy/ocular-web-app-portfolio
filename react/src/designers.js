import React, { Component } from 'react';

class Designers extends Component {
	render(){
		return (
			<div id='sectDesigners' style={this.props.designersOpen}>
				<div className='designer-profile position-relative'>
					<div className='profile-bg-image'></div>
					<div className='splitv-third w-100'></div>
					<div className='splitv-third w-100 d-flex align-items-center flex-column'>
						<div className='profile-image h-100'>

						</div>
					</div>
					<div className='splitv-third w-100'></div>
				</div>
			</div>
		)
	}
}

export default Designers;
