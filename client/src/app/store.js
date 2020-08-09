import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from '../features/tasks/tasksSlice'
import { reducer as formReducer } from 'redux-form'
import ky from 'ky'

window.ky = ky
export default configureStore({
  reducer: {
    tasks: tasksReducer,
    form: formReducer,
  },
})
