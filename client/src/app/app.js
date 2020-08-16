/** @jsx jsx */
import { jsx } from 'theme-ui'
import Tasks from '../features/tasks/tasks'
import { Route, Switch } from 'react-router-dom'
import SignIn from '../features/auth/signIn'
import SignUp from '../features/auth/signUp'

const App = () => {
  return (
    <div
      sx={{
        height: '100vh',
        p: 4,
        fontSize: 2,
        fontFamily: 'body',
        bg: 'neutral.9',
      }}
      className="App"
    >
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route exact path="/" component={Tasks} />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </div>
  )
}

export default App
