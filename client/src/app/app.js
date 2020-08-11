import React from 'react'
import Tasks from '../features/tasks/tasks'
import { Route, Switch } from 'react-router-dom'
import SignIn from '../features/auth/signIn'
import SignUp from '../features/auth/signUp'

function App() {
  return (
    <div className="App">
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
