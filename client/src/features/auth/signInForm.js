import React from 'react'
import { reduxForm, Field } from 'redux-form'
import t from 'prop-types'

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

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const SignInForm = ({ handleSubmit }) => (
  <form className="auth-form" onSubmit={handleSubmit}>
    <div className="field">
      <Field name="email" component={renderField} type="email" label="Email:" />
    </div>
    <div className="field">
      <Field
        name="password"
        component={renderField}
        type="password"
        label="Password:"
      />
    </div>
    <input type="submit" value="Log in"></input>
  </form>
)

export default reduxForm({ form: 'signIn', validate })(SignInForm)

SignInForm.propTypes = {
  handleSubmit: t.func.isRequired,
}
