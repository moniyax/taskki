import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid'
import * as TaskApi from '../../api/tasks'
import { normalize, schema } from 'normalizr'

const taskSchema = new schema.Entity('tasks')
const tasksSchema = [taskSchema]

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    byId: {},
    ids: [],
    loading: false,
    error: null,
  },
  reducers: {
    addTask: {
      reducer(state, action) {
        const { id, text } = action.payload
        state.byId[id] = { id, text, completed: false }
        state.ids.push(id)
      },
      prepare(text) {
        return { payload: { text, id: uuid() } }
      },
    },
    getTasksStart(state) {
      state.loading = true
      state.error = null
    },
    getTasksSuccess(state, { payload }) {
      const { tasksById, taskIds } = payload
      state.byId = tasksById
      state.ids = taskIds
      state.loading = false
      state.error = null
    },
    getTasksFailure(state, action) {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const { addTask, getTasksSuccess, getTasksFailure } = tasksSlice.actions

export const taskCount = (state) => state.ids.length
export const getTasks = (state) => state.ids.map((id) => state.byId[id])

export const getTasksRequest = () => async (dispatch) => {
  try {
    const tasks = await TaskApi.getTasks()
    const { entities, result } = normalize(tasks, tasksSchema)
    const tasksById = entities.tasks
    const taskIds = result

    dispatch(getTasksSuccess({ tasksById, taskIds }))
  } catch (error) {
    dispatch(getTasksFailure())
    console.error('getTasksFailure:', error)
  }
}

export default tasksSlice.reducer
