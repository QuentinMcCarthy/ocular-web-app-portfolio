import React, { Component } from 'react';


class Stats extends Component {
	render() {
		return(
			<div id='sectStatistics' className='sect-statistics container' style={this.props.viewStatsOpen}>
				<button type='button' className='close-btn'><i className='fas fa-times fa-2x'></i></button>
				<h1 className='second-heading stats-heading'>Darryl's Projects Statistics</h1>
				<hr className='title-hr'/>
				<div id='googleChart' className='chart-stats'></div>
			</div>
		)
	}
}

export default Stats;
