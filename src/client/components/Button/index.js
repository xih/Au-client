import React from 'react'
import glam from 'glamorous'
import { Link } from 'react-router-dom'

export const LinkButton = glam(Link)({
  fontSize: 24,
  color: '#000',
  ':hover': {
    backgroundColor: '#fff'
  }
});

export const Button = glam.button({
  border: '1px solid rgba(0,0,0,0.7)',
  padding: '8px 16px',
  marginTop: 12,
  textTransform: 'uppercase',
  backgroundColor: '#fff',
  fontSize: 21,
  alignSelf: 'flex-start'
})
