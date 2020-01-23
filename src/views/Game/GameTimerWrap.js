import { Game } from './Game';
import React, { Component } from 'react';

export class GameTimerWrap extends Component {
	constructor(props) {
		super(props);
		this.state = {
			time: 0,
			stopTimer: false
		};
	}

	setTimer = () => {
		let startTimer = setInterval(() => {
			if (this.state.stopTimer === true) {
				clearInterval(startTimer);
			}
			this.setState((previousState) => {
				return { time: previousState.time + 1 };
			});
			// console.log(this.state.time);
		}, 1000);
		// console.log(this.state.stopTimer);
	};

	stopTimer = () => {
		this.setState({ stopTimer: true });
	};

	componentDidMount() {
		this.setTimer();
	}

	render() {
		return (
			<Game
				rows={this.props.rows}
				cols={this.props.cols}
				time={this.state.time}
				stopTimer={this.stopTimer}
			></Game>
		);
	}
}

export default GameTimerWrap;
