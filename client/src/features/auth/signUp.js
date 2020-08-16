/** @jsx jsx */
import { jsx } from 'theme-ui'
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
    <div
      sx={{
        m: 'auto',
        mt: 8,
        p: 5,
        maxWidth: 13,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'neutral.2',
        borderRadius: 3,
        backgroundColor: 'neutral.5',
      }}
      className="auth-box"
    >
      <div sx={{ fontSize: 4, pb: 3 }}>Taskki</div>
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
