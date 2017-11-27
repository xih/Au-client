import React from 'react';
import glam from 'glamorous';
import { renderRoutes } from 'react-router-config';

import { fetchCurrentUser } from './actions';

import Header from './components/Header';

const AppWrapper = glam.div({
  fontFamily: 'futura, sans-serif',
  fontStyle: 'normal',
  fontWeight: 500
});

const Container = glam.div('container');

const App = ({ route }) => {
  return (
    <AppWrapper>
      <Header />
      <Container>
        {renderRoutes(route.routes)}
      </Container>
    </AppWrapper>
  );
};

export default {
  component: App,
  loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
};