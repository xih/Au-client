import React from 'react';
import glam from 'glamorous';
import { connect } from 'react-redux';

import { LinkButton as Link } from 'components/Button';
import { AuIcon, BagIcon } from 'components/Icons';

const Nav = glam.nav('white', {
  marginBottom: 4
});
const NavWrapper = glam.div({
  margin: '0 auto',
  maxWidth: 1000
});

const Menu = glam.ul('right');
const MenuItem = glam.li();

const Header = ({ auth }) => {
  console.log('My auth status is ', auth);

  return (
    <Nav>
      <NavWrapper>
        <Link to='/'>
          <AuIcon />
        </Link>
        <Menu>
          <MenuItem>
            <Link to='/login'>Log In</Link>
          </MenuItem>
          <MenuItem>
            <Link to='/signup'>Sign Up</Link>
          </MenuItem>
          <MenuItem>
            <Link to='/cart'>
              <BagIcon marginLeft={0} height={48} />
            </Link>
          </MenuItem>
        </Menu>
      </NavWrapper>
    </Nav>
  );
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
