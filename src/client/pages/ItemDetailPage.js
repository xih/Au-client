import React, { Component } from 'react';

import { Wrapper, Column, Fixed, CenterScroll, Brand, Title, Description, Price } from 'components/ItemDetail';
import { Button } from 'components/Button';
import { Dropdown } from 'components/Form';

const DATA = {
	images: [
		{ src: 'photos/pink-wool-1.jpg' },
		{ src: 'photos/pink-wool-2.jpg' },
		{ src: 'photos/pink-wool-3.jpg' },
		{ src: 'photos/pink-wool-4.jpg' },
	],
	price: '$1,595',
	brand: 'Joseph',
	title: 'Pink Wool Turtleneck',
	description:
		"Hand-knit long sleeve wool sweater in 'bubblegum' pink. Rib knit turtleneck collar, cuffs, and hem. Frayed yarn at side-seams. Tonal stitching. 100% wool. Made in Italy.",
};

class ItemDetails extends Component {
	componentDidMount() {
		// const { id, fetchItem } = this.props
		// fetchItem(id)
	}

	render() {
		const { brand, title, description, images, price } = DATA;
		return (
			<Wrapper>
				<Column>
					<Fixed align='left'>
						<Brand>{brand}</Brand>
						<Title>{title}</Title>
						<Description>{description}</Description>
					</Fixed>
				</Column>
				<Column>
					<CenterScroll images={images} />
				</Column>
				<Column>
					<Fixed align='right'>
						<Price>{price} USD</Price>
						Free express shipping and returns in the United States.<br />
						View Size Chart<br />
            <Dropdown />
            <Button>Add to Bag</Button>

					</Fixed>
				</Column>
			</Wrapper>
		);
	}
}

export default {
	component: ItemDetails,
};
