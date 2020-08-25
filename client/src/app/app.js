/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Route, Switch } from 'react-router-dom'
import SignIn from '../features/auth/signIn'
import SignUp from '../features/auth/signUp'
import Home from '../features/layout/home'

const App = () => {
  return (
    <div
      sx={{
        height: '100vh',
        fontSize: 2,
        fontFamily: 'body',
        bg: 'n.10',
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route exact path="/tasks/:taskId" component={Home} />
        <Route exact path="/" component={Home} />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </div>
  )
}

export default App
