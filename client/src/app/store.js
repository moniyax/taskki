import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit'
import tasksReducer from '../features/tasks/tasksSlice'
import authReducer from '../features/auth/authSlice'
import { reducer as formReducer } from 'redux-form'
import logger from 'redux-logger'
import { load } from '../util/localStorageUtil'

const middleware = [...getDefaultMiddleware()]
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger)
}

const combinedReducer = combineReducers({
  tasks: tasksReducer,
  form: formReducer,
  auth: authReducer,
})

const rootReducer = (state, action) => {
  if (action.type === 'logout') {
    localStorage.removeItem('user')
    state = undefined
  }
  return combinedReducer(state, action)
}

export default configureStore({
  reducer: rootReducer,
  preloadedState: {
    auth: { currentUser: load('user') },
  },
  middleware,
})
