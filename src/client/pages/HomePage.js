import React, { Component } from 'react'
import FourPortrait from 'components/Gallery/FourPortrait'

import matchingImages from 'assets/matchingImages.json'

import Gallery from 'components/Gallery/Gallery'

async function getStreetstyleImages() {
	try {
		let response = await fetch('http://localhost:8000/streetstyle/')
		let streetstyleImages = await response.json()
		return streetstyleImages
	} catch(e) {
		console.log('Error!', e)
	}
}

class Home extends Component {
	constructor() {
		super()
		this.state = { portraits: [], portraits2: [] }
	}

	componentDidMount() {
		const { items } = matchingImages
		getStreetstyleImages().then( p => this.setState({ portraits2: p }))
		this.setState({ portraits: items })
	}



	render() {
		const { portraits, portraits2 } = this.state
		console.log(portraits2)

		let content = <div></div>

		if (portraits2) {
			content = <Gallery images={portraits2} />
		}


		return (
			<div>
				<FourPortrait portraits={portraits.slice(0, 4)} />
				<FourPortrait portraits={portraits.slice(5, 8)} />

				{content}

			</div>
		);
	}
};

export default {
	component: Home
};
