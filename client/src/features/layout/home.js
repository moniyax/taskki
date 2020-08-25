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

const projects = [
  { name: 'Niceties' },
  { name: 'Niceties' },
  { name: 'Niceties' },
  { name: 'Niceties' },
  { name: 'Niceties' },
  { name: 'Niceties' },
  { name: 'Niceties' },
  { name: 'Niceties' },
]

const Home = () => (
  <Authentication>
    <React.Fragment>
      <Header />
      <div sx={container}>
        <Projects projects={projects} />
        <Main />
      </div>
    </React.Fragment>
  </Authentication>
)

export default Home
