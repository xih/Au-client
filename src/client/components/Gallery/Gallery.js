import React from 'react'
import BasicImage from './BasicImage'
import glam from 'glamorous'

const Gallery = (props) => {
  const { images } = props
  return (
    <div>
      {images.map((img, i) => <BasicImage key={i} {...img} />)}
    </div>
  )
}

export default Gallery
