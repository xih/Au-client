import React, { Component } from 'react'
import glam from 'glamorous'
import { connect } from 'react-redux'
import {
  Input,
  Menu,
  Container,
  Icon
} from 'semantic-ui-react'

import { Link } from 'react-router-dom'
import { AuIcon, BagIcon } from 'components/Icons'
import styled from 'styled-components'



const StyledMenu = styled(Menu)`
  &&& {
   background-color: #E1D4C0;
   font-weight: bold;

   a {
     color: white;
   }
  }
`

class MenuExampleInverted extends Component {
  constructor() {
		super()
		this.state = { activeItem: 'home', fixed: false }
	}
  // handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  // handleItemClick (e, { name }) {this.setState({ activeItem: name })}

  // hideFixedMenu = () => this.setState({ fixed: false })
  // showFixedMenu = () => this.setState({ fixed: true })

  redirect(to) {
    browserHistory.push({
       pathname: to
    })
  }

  render() {
    const { activeItem, fixed } = this.state

    return (
      <StyledMenu
        fluid
        size='large'
        fixed='top'
        inverted={!fixed}
        pointing={!fixed}
      >
        <Container>
          <Link to='/' >
            <Menu.Item name='Opulence' as='a' />
          </Link>

          <Menu.Menu position='right'>
            <Link to='/signup' >
              <Menu.Item name='Sign Up' as='a' onClick={this.handleItemClick} />
            </Link>
          </Menu.Menu>

          <Link to='/login' >
            <Menu.Item name='Log In' as='a' onClick={this.handleItemClick} />
          </Link>
          {/* <Link to='/shearling-jacket'> */}
          <Link to='/'>
            <Icon name='shopping bag'/>
          </Link>

        </Container>
      </StyledMenu>
    )
  }
}

const MenuExampleInputs = () => (
  <Menu>
    <Menu.Item>
      <Input className='icon' icon='search' placeholder='Search...' />
    </Menu.Item>

    <Menu.Item position='right'>
      <Input action={{ type: 'submit', content: 'Go' }} placeholder='Navigate to...' />
    </Menu.Item>
  </Menu>
)

const Header = ({ auth }) => {
  return (
    <MenuExampleInverted />
  )
}

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(Header)
