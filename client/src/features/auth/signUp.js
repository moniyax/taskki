import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { useDispatch, connect } from 'react-redux'
import SignUpForm from './signUpForm'
import t from 'prop-types'
import { signUpRequest, getToken, getSignUpErrorMessage } from './authSlice'

const SignUp = ({ token, error }) => {
  const dispatch = useDispatch()

  const submit = ({ username, email, password }) =>
    dispatch(signUpRequest({ username, email, password }))

  if (token) {
    return <Redirect to="/" />
  }

  return (
    <div className="auth-box">
      <h2>Taskki</h2>
      {error && <div>{error}</div>}
      <SignUpForm onSubmit={submit} />
      <Link to="/signin">Log In</Link>
    </div>
  )
}

export default connect((state) => ({
  token: getToken(state),
  error: getSignUpErrorMessage(state),
}))(SignUp)

SignUp.propTypes = {
  token: t.string,
  error: t.string,
}
