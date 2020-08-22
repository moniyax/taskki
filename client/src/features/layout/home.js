/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import Authentication from '../auth/authentication'
import Header from './header'
import Main from './main'

const Home = () => (
  <Authentication>
    <React.Fragment>
      <Header />
      <Main />
    </React.Fragment>
  </Authentication>
)

export default Home
