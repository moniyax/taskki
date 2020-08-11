import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import t from 'prop-types'
import { getToken } from './authSlice'

const Authentication = ({ token, children }) =>
  token ? <>{children}</> : <Redirect to="/signin" />

export default connect((state) => ({ token: getToken(state) }))(
  Authentication
)

Authentication.propTypes = {
  token: t.string,
  children: t.object.isRequired,
}
