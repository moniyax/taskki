/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import Authentication from '../auth/authentication'
import Header from './header'
import Main from './main'
import Projects from '../projects/projects'

const container = {
  display: 'flex',
  flex: 1,
}

const Home = () => (
  <Authentication>
    <React.Fragment>
      <Header />
      <div sx={container}>
        <Projects />
        <Main />
      </div>
    </React.Fragment>
  </Authentication>
)

export default Home
