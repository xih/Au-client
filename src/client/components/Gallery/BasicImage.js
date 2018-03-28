import React from 'react'
import glam from 'glamorous'
import { Card, Icon, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'



const BasicImage = (props) => {
  const { img_src_url } = props
  // console.log(props)
  return (
    <div>
      <Card centered>
        <Link to='/shearling-jacket'>
          <Image src={img_src_url} />
        </Link>
      </Card>
    </div>
  )
}

export default BasicImage
