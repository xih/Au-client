import React, { Component } from 'react';
import FourPortrait from 'components/Gallery/FourPortrait';

import matchingImages from 'assets/matchingImages.json'

class Home extends Component {
	constructor() {
		super()
		this.state = { portraits: [] }
	}

	componentDidMount() {
		const { items } = matchingImages;
		this.setState({ portraits: items })
	}

	render() {
		const { portraits } = this.state;
		return (
			<div>
				<FourPortrait portraits={portraits.slice(0, 4)} />
				<FourPortrait portraits={portraits.slice(5, 8)} />
			</div>
		);
	}
};

export default {
	component: Home
};
