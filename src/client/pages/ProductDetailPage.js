import React, { Component } from 'react'
import styled from 'styled-components'
import { getData } from '../../helpers/utils'
import { Grid, Image, Sticky, Header, Container, Dropdown, Button, Divider } from 'semantic-ui-react'

// TODO: change this shit up
const PRODUCT_URL = 'http://localhost:8000/products/3/'

const options = [
  { key: 1, text: 'Small', value: 'small' },
  { key: 2, text: 'Medium', value: 'medium' },
  { key: 3, text: 'Large', value: 'large' },
]

const MiddleColumn = styled(Grid.Column)`
  &&& {
    overflow: auto;
  }
`

const FixedColumn = styled(Grid.Column)`
  &&& {
    position: fixed;
  }
`
const Spacing = styled.div`
  margin: 1em;
`

class ProductDetailPage extends Component {
  constructor() {
    super()
		this.state = { productData: [] }
  }

  componentDidMount() {
    getData(PRODUCT_URL).then( data => this.setState({ productData: data }))
  }

  handleContextRef = contextRef => this.setState({ contextRef })
  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { contextRef } = this.state
    const { value } = this.state
    const { productData } = this.state
    const images = productData.image_array || []
    console.log(productData)
    return (
      <Grid container columns='equal'
        padded='vertically'
        >
        <Grid.Column>
          <Sticky context={contextRef}>
            <Header as='h1'>
              {productData.brand}
            </Header>
            <Header as='h2'>
              {productData.product_name}
            </Header>
            <Header as='h3'>
              ${productData.price}
            </Header>
            <Dropdown
              onChange={this.handleChange}
              fluid
              options={options}
              placeholder='Choose an option'
              selection
              value={value}
            />
            <Divider hidden />
            <Button
              color='black'
              fluid
              content='ADD TO SHOPPING BAG'
              // label={{ as: 'a', basic: true, content: '2,048' }}
            />
          </Sticky>
        </Grid.Column>
      <Grid.Column width={7}>
        <div ref={this.handleContextRef}>
          {images.map((img, i) => <Spacing><Image fluid spaced src={img} /></Spacing> )}
        </div>
      </Grid.Column>
      <Grid.Column>
        <Sticky context={contextRef}>
          <Header as='h3'>Description</Header>
          <Container
            text
            fluid='false'>
            {productData.description}
          </Container>

          {/* {productData.product_buyable_url} */}
          <Header as='h3'>Size and Fit</Header>
          <Container
            text
            fluid='false'>
            {productData.size_and_fit}
          </Container>

        </Sticky>
      </Grid.Column>
      </Grid>
    )
  }
}

export default {
	component: ProductDetailPage,
}
