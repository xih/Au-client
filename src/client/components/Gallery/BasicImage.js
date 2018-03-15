import React from 'react'
import glam from 'glamorous'
import { Card, Icon, Image } from 'semantic-ui-react'



const BasicImage = (props) => {
  const { streetstyle_src } = props
  return (
    <div>
      <Card centered>
        <Image src={streetstyle_src} />
      </Card>
    </div>
  )
}

export default BasicImage
