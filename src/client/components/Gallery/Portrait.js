import React, { Component } from 'react';
import glam from 'glamorous';

const PortraitWrapper = glam.div('col l3 m3 s12', styles => ({
  position: 'relative',
  padding: '0 !important'
}));

const BrandWrapper = glam.div({
  width: '100%',
  paddingLeft: 32
});

const Brand = glam.span({
  fontSize: 18,
  fontWeight: 500
});

const Content = glam.div({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'stretch',
  maxHeight: 360
});

const SideWrapper = glam.div({
  height: 'calc(100% - 28px)',
  width: 32,
  position: 'relative'
});

const SideInfo = glam.div({
  position: 'absolute',
  textAlign: 'right',
  height: 32,
  width: 108,
  top: 35,
  left: -35,
  paddingRight: 4, 
  transform: 'rotate(270deg)'
});

const MainWrapper = glam.div({
  height: 'calc(100% - 28px)',
  width: 'calc(100% - 34px)',
  cursor: 'pointer'
});

const Image = glam.img({
  width: '100%'
})

const Title = glam.p({
  margin: 0
})

export class Portrait extends Component {
  constructor() {
    super()
    this.state = { hover: false }
  }

  onMouseOver() { this.setState({ hover: true }) }

  onMouseOut() { this.setState({ hover: false }) }

  render() {
    let { streetImage, shopImage, price, brand, title } = this.props
    const { hover } = this.state

    if (Array.isArray(shopImage)) {
      shopImage = shopImage[0]
    }

    return (
      <PortraitWrapper>
        <BrandWrapper>
          <Brand>{brand}</Brand>
        </BrandWrapper>
        <Content>
          <SideWrapper>
            <SideInfo>{price} | M, L</SideInfo>
          </SideWrapper>
          <MainWrapper onMouseOver={this.onMouseOver.bind(this)} onMouseOut={this.onMouseOut.bind(this)}>
            <Image src={hover ? `/photos/${shopImage}` : `/streetphotos/${streetImage}`} />
            <Title>{title}</Title>
          </MainWrapper>
        </Content>
      </PortraitWrapper>
    );
  }
}