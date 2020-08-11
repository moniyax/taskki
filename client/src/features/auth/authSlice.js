import { createSlice } from '@reduxjs/toolkit'
import * as AuthApi from './authApi'
import ky from 'ky'
import * as localStorageUtil from '../../util/localStorageUtil'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {},
  reducers: {
    signUpStart(state) {
      state.pending = true
      state.signUpError = null
    },
    signUpSuccess(state, { payload }) {
      state.currentUser = payload
      state.pending = false
      state.signUpError = null
    },
    signUpFailure(state, action) {
      state.pending = false
      state.signUpError = action.payload
    },
    signInStart(state) {
      state.pending = true
      state.signInError = null
    },
    signInSuccess(state, { payload }) {
      state.currentUser = payload
      state.pending = false
      state.signInError = null
    },
    signInFailure(state, action) {
      state.pending = false
      state.signInError = action.payload
    },
  },
})

const {
  signUpStart,
  signUpSuccess,
  signUpFailure,
  signInStart,
  signInSuccess,
  signInFailure,
} = authSlice.actions

export const signInRequest = ({ email, password }) => async (dispatch) => {
  try {
    dispatch(signInStart())

    const user = await AuthApi.signIn({ email, password })
    dispatch(signInSuccess(user))
    localStorageUtil.save('user', user)
  } catch (_error) {
    if (!(_error instanceof ky.HTTPError)) throw _error
    const error = await _error.response.json()
    dispatch(signInFailure(error))
  }
}
export const signUpRequest = ({ username, email, password }) => async (
  dispatch
) => {
  try {
    dispatch(signUpStart())

    const user = await AuthApi.signUp({ username, email, password })
    dispatch(signUpSuccess(user))
    localStorageUtil.save('user', user)
  } catch (_error) {
    if (!(_error instanceof ky.HTTPError)) throw _error
    const error = await _error.response.json()
    dispatch(signUpFailure(error))
  }
}

export const getToken = (state) => state.auth.currentUser?.token
export const getSignInErrorMessage = (state) =>
  state.auth.signInError?.messages[0]
export const getSignUpErrorMessage = (state) =>
  state.auth.signUpError?.messages[0]

export default authSlice.reducer
