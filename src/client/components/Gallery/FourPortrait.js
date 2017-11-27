import React, { Component } from 'react';
import glam from 'glamorous';

import { Portrait } from 'components/Gallery/Portrait';
import { Row } from 'components/Layout'

export default ({ portraits = [] }) => {
  return (
    <Row>
      {portraits.map((portrait, i) => <Portrait key={i} {...portrait} />)}
    </Row>
  );
};