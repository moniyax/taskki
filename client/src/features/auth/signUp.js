import React from 'react'
import { Redirect } from 'react-router-dom'
import { useDispatch, connect } from 'react-redux'
import SignUpForm from './signUpForm'
import t from 'prop-types'
import { signUpRequest, getToken, getSignUpErrorMessage } from './authSlice'

const SignUp = ({ token, error }) => {
  const dispatch = useDispatch()

  const submit = (formValues) => dispatch(signUpRequest(formValues))

  if (token) {
    return <Redirect to="/" />
  }

  /* Named err instead of error as there's an error prop from
      redux-form  that would override this one  */

  return (
    <div sx={{ height: '100vh', bg: 'n.10', overflow: 'hidden' }}>
      <SignUpForm onSubmit={submit} err={error} />
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
