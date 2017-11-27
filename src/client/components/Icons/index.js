import React from 'react';
import glam from 'glamorous';

import Au from 'assets/icons/Au.svg';
import Bag from 'assets/icons/Bag.svg';

const Image = glam.img({
  height: 60,
  marginLeft: 20
}, styles => ({
  ...styles
}));

export const AuIcon = props => <Image src={Au} {...props} />
export const BagIcon = props => <Image src={Bag} {...props} />