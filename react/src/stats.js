import React, { Component } from 'react';
import { Chart } from "react-google-charts";

var thedata =  [
	['Project Name', 'Appreciations', 'Comments', 'Views'],
	['hello', 10, 10, 100],
	['world', 20, 70, 500],
	['my name is', 30, 19, 300],
	['sun', 40, 80, 400]
];

class Stats extends Component {
	constructor(props) {
		super(props);
		this.state = {
			projects: [
				['Project Name', 'Appreciations', 'Comments', 'Views'],
				['hello', 10, 10, 100],
				['world', 20, 70, 500],
				['my name is', 30, 19, 300],
				['sun', 40, 80, 400]
			]
		}
	}

	render() {
		// console.log(thedata);
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
						data={this.state.projects}
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
