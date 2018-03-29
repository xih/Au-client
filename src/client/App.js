import React from 'react'
import glam from 'glamorous'
import styled from 'styled-components'
import { renderRoutes } from 'react-router-config'

import { fetchCurrentUser } from './actions'

import Header from './components/Header'
import Footer from './components/Footer'

const AppWrapper = glam.div({
  fontFamily: 'futura, sans-serif',
  fontStyle: 'normal',
  fontWeight: 500
})

const Div = styled.div`
  margin-top: 5em;
`

const Container = glam.div('container')

const App = ({ route }) => {
  return (
    <AppWrapper>
      <Header />
      {/* <Container> */}
      <Div>
        {renderRoutes(route.routes)}
      </Div>
      {/* </Container> */}
      {/*  TODO Make the footer sticky */}
      {/* <Footer /> */}
    </AppWrapper>
  );
};

export default {
  component: App,
  loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
};
