import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit'
import tasksReducer from '../features/tasks/tasksSlice'
import projectsReducer from '../features/projects/projectsSlice'
import authReducer from '../features/auth/authSlice'
import { reducer as formReducer } from 'redux-form'
import { createLogger } from 'redux-logger'
import { load } from '../util/localStorageUtil'

const logger = createLogger({
  predicate: (_, action) => !action.type.startsWith('@@redux-form'),
})

const middleware = [...getDefaultMiddleware()]
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger)
}

const combinedReducer = combineReducers({
  tasks: tasksReducer,
  projects: projectsReducer,
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
