import React, { Component } from 'react';
import { Chart } from "react-google-charts";

class Stats extends Component {
	render() {
		return(
			<div id='sectStatistics' className='sect-statistics container' style={this.props.viewStatsOpen}>
				<button type='button' className='close-btn' onClick={this.props.closeStats}>
					<i className='fas fa-times fa-2x'></i>
				</button>
				<h1 className='second-heading stats-heading'>Darryl's Projects Statistics</h1>
				<hr className='title-hr'/>
				<div id='googleChart' className='chart-stats'>
					<Chart
						chartType='Bar'
						width='100%'
						height='400px'
						legendToggle
						data={this.props.theData}
						options={{
						  title: 'Designers Project Stats',
						}}
					/>
				</div>
			</div>
		)
	}
}

export default Stats;
