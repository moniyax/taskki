/** @jsx jsx */
import { jsx, Label, Input, Button } from 'theme-ui'
import { reduxForm, Field } from 'redux-form'
import { Link } from 'react-router-dom'
import t from 'prop-types'
import alert from './alert.svg'

const loginHeader = {
  mb: 4,
}

const login = {
  maxWidth: 13,
  backgroundColor: 'n.10',
  mx: 'auto',
  mt: 7,
  p: 5,
  borderRadius: 5,
  boxShadow: 0,
}
const fieldGroup = { pb: 1, mb: 4 }
const inputLabel = {
  mb: 1,
  fontWeight: 2,
  color: 'n.2',
}
const loginInput = {
  p: 2,
  borderRadius: 3,
  borderColor: 'n.5',
  backgroundColor: 'n.8',
}
const button = {
  width: '100%',
  backgroundColor: 'prime.2',
  fontSize: 1,
  fontWeight: 3,
  p: 3,
  mb: 3,
  outline: 'none',
  cursor: 'pointer',
}

const alertImage = { width: 4, mr: 1 }

const validate = (values) => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Required'
  }

  if (!values.password) {
    errors.password = 'Required'
  }

  return errors
}

const requiredField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <Label className="inputLabel" sx={inputLabel}>
      {label}
    </Label>
    <Input {...input} type={type} className="loginInput" sx={loginInput} />
    {touched && error && <span>{error}</span>}
  </div>
)

const SignInForm = (props) => {
  const { handleSubmit, err } = props
  return (
    <form sx={login} onSubmit={handleSubmit}>
      <div className="loginHeader" sx={loginHeader}>
        <div
          sx={{
            mb: 1,
            fontSize: 3,
            fontWeight: 2,
            color: 'n.2',
          }}
        >
          Tasski
        </div>
        <div
          sx={{
            fontSize: 6,
            fontWeight: 3,
            color: 'n.1',
          }}
        >
          Log in
        </div>
      </div>
      {err && (
        <div
          sx={{
            color: 'danger.2',
            mb: 2,
          }}
        >
          <img src={alert} sx={alertImage} className="alert" alt="alert" />
          <span sx={{ lineHeight: 2 }}> {err}</span>
        </div>
      )}

      <div className="fieldGroup" sx={fieldGroup}>
        <Field
          name="email"
          type="email"
          label="Email"
          component={requiredField}
        />
      </div>
      <div className="fieldGroup" sx={fieldGroup}>
        <Field
          name="password"
          type="password"
          label="Password"
          component={requiredField}
        />
      </div>
      <Button sx={button}>LOG IN</Button>
      <div
        sx={{
          textAlign: 'center',
        }}
      >
        Don&apos; t have an account? <Link to="/signup">Sign Up</Link>
      </div>
    </form>
  )
}

export default reduxForm({ form: 'signIn', validate })(SignInForm)

SignInForm.propTypes = {
  handleSubmit: t.func.isRequired,
  err: t.string,
}
