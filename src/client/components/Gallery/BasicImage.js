import React from 'react'
import glam from 'glamorous'


const BasicImage = (props) => {
  const { streetstyle_src } = props
  console.log(props)
  return (
    <div>
      <img src={streetstyle_src} />
    </div>
  )
}

export default BasicImage
