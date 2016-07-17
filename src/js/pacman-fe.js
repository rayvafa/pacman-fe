import React from 'react';
import textSelectListener from './modules/text-select-listener.js';

const PacmanFe = React.createClass({

	getInitialState() {
		return {
			selectedText: ''
		};
	},

	componentDidMount() {
		textSelectListener((selectedText) => {
			this.setState({
				selectedText: selectedText
			});
		});
	},

	render() {
		return (
			<div>Selected text: {this.state.selectedText}</div>
		);
	}
});

export default PacmanFe;
