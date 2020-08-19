/** @jsx jsx */
import { jsx } from 'theme-ui'
import Authentication from '../auth/authentication'
import Header from './header'
import Main from './main'

const Home = () => (
  <Authentication>
    <Header />
    <Main />
  </Authentication>
)

export default Home
