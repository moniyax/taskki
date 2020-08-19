/** @jsx jsx */
import { jsx } from 'theme-ui'
import { connect, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'
import SignInForm from './signInForm'
import t from 'prop-types'
import { signInRequest, getToken, getSignInErrorMessage } from './authSlice'

const SignIn = ({ token, error }) => {
  const dispatch = useDispatch()

  const submit = (formValues) => dispatch(signInRequest(formValues))

  if (token) {
    return <Redirect to="/" />
  }

  /* Named err instead of error as there's an error prop from
      redux-form  that would override this one  */

  return (
    <div sx={{ height: '100vh', bg: 'n.10', overflow: 'auto' }}>
      <SignInForm onSubmit={submit} err={error} />
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
