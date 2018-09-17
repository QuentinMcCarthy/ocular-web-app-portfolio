import React, { Component } from 'react';


class Stats extends Component {
	constructor(props){
		super(props);
		this.state = {
			viewStatsOpen: { display: 'block' }
		}
		this.closeStats = this.closeStats.bind(this);
	}
	render() {
		return(
			<div id='sectStatistics' className='sect-statistics container' style={this.props.viewStatsOpen}>
				<button type='button' className='close-btn' onClick={this.closeStats}>
					<i className='fas fa-times fa-2x'></i>
				</button>
				<h1 className='second-heading stats-heading'>Darryl's Projects Statistics</h1>
				<hr className='title-hr'/>
				<div id='googleChart' className='chart-stats'></div>
			</div>
		)
	}

	closeStats(e){
		e.preventDefault();
		console.log('working');
		console.log(this.props.viewStatsOpen);
		if (this.state.viewStatsOpen.display === 'block') {
			this.setState({
				viewStatsOpen: { display: 'none'}
			});
			console.log('closing');
			console.log(this.props.viewStatsOpen);
		} else {
			console.log('Not closing');
		}
	}
}

export default Stats;
