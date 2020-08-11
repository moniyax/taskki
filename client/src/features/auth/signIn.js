import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'
import SignInForm from './signInForm'
import t from 'prop-types'
import { signInRequest, getToken, getSignInErrorMessage } from './authSlice'

const SignIn = ({ token, error }) => {
  const dispatch = useDispatch()

  const submit = ({ email, password }) =>
    dispatch(signInRequest({ email, password }))

  if (token) {
    return <Redirect to="/" />
  }

  return (
    <div className="auth-box">
      <h2>Taskki</h2>
      {error && <div>{error}</div>}
      <SignInForm onSubmit={submit} />
      <Link to="/signup">Sign Up</Link>
    </div>
  )
}

export default connect((state) => ({
  token: getToken(state),
  error: getSignInErrorMessage(state),
}))(SignIn)

SignIn.propTypes = {
  token: t.string,
  error: t.string,
}
