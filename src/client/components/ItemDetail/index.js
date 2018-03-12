import React from 'react'
import glam from 'glamorous'

const CenterScrollWrapper = glam.div({
  height: '100%'
})
const Image = glam.img({
  marginBottom: 20,
  width: '100%'
})

export const CenterScroll = ({ images = [] }) => {
  return (
    <CenterScrollWrapper>
      {images.map((img, i) => <Image key={i} {...img} />)}
    </CenterScrollWrapper>
  )
}

export const Wrapper = glam.div('row', {
  height: 'calc(100vh - 64px)'
})

export const Column = glam.div('col s4', {
  height: '100%',
  position: 'relative'
})

export const Fixed = glam.div({
  position: 'absolute',
  height: '100%'
}, ({ align = 'left' }) => {

  return {
    top: '40%',
    [align]: 64,
    width: '100%'
  };
})

export const Brand = glam.h4({})

export const Title = glam.p({
  fontSize: 21,
})

export const Description = glam.p({
  fontSize: 18,
  margin: 0
})

export const Price = glam.h4({})