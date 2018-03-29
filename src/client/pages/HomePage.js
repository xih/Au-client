import React, { Component } from 'react'
import FourPortrait from 'components/Gallery/FourPortrait'

import matchingImages from 'assets/matchingImages.json'

import Gallery from 'components/Gallery/Gallery'
import { Grid } from 'semantic-ui-react'

async function getStreetstyleImages() {
	try {
		let response = await fetch('http://localhost:8000/images/')
		let images = await response.json()
		return images
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
		getStreetstyleImages().then( images => this.setState({ portraits2: images }))
		this.setState({ portraits: items })
	}

	render() {
		const { portraits, portraits2 } = this.state

		let content = <div></div>

		if (portraits2) {
			content = <Gallery images={portraits2} />
		}


		return (
			<Grid padded='vertically'>

					<FourPortrait portraits={portraits.slice(0, 4)} />
					<FourPortrait portraits={portraits.slice(5, 8)} />


				{content}
			</Grid>
		);
	}
};

export default {
	component: Home
};
