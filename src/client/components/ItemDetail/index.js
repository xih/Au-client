import React from 'react'
import glam from 'glamorous'

const CenterScrollWrapper = glam.div({
  height: '100%',
  overflow: 'scroll'
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
  height: '100%'
})

export const VerticalAlign = glam.div({
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  flexDirection: 'column'
}, styles => ({
  justifyContent: styles.justifyContent || 'center'
}))

export const Brand = glam.h4({})

export const Title = glam.p({
  fontSize: 21,
})

export const Description = glam.p({
  fontSize: 18,
  margin: 0
})

export const Price = glam.h4({})