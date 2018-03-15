import React from 'react'
import BasicImage from './BasicImage'
import glam from 'glamorous'
import { Grid } from 'semantic-ui-react'

const Gallery = (props) => {
  const { images } = props
  return (
    <Grid container columns={1}>
      {images.map((img, i) =>
        <Grid.Column>
          <BasicImage key={i} {...img} />
        </Grid.Column>
      )}
    </Grid>
  )
}

export default Gallery
