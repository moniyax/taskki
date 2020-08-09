import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid'
import * as TasksApi from './tasksApi'
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

    addTask(state, { payload }) {
      const { id, text } = payload
      state.byId[id] = { id, text, completed: false }
      state.ids.push(id)
    },
    addTaskStart(state, { payload }) {
      const { id } = payload
      state.byId[id].syncing = true
      state.byId[id].error = null
    },
    addTaskSuccess(state, { payload }) {
      const { id } = payload
      state.byId[id] = { ...state.byId[id], ...payload }
      state.byId[id].syncing = false
      state.byId[id].error = null
    },
    addTaskFailure(state, { payload }) {
      const { id } = payload
      state.byId[id].syncing = false
      state.byId[id].error = payload
    },
  },
})

export const {
  addTask,
  getTasksStart,
  getTasksSuccess,
  getTasksFailure,
  addTaskSuccess,
} = tasksSlice.actions

export const taskCount = (state) => state.ids.length
export const getTasks = (state) => state.ids.map((id) => state.byId[id])

export const getTasksRequest = () => async (dispatch) => {
  try {
    dispatch(getTasksStart())

    const tasks = await TasksApi.getTasks()
    const { entities, result } = normalize(tasks, tasksSchema)
    const tasksById = entities.tasks
    const taskIds = result

    dispatch(getTasksSuccess({ tasksById, taskIds }))
  } catch (error) {
    dispatch(getTasksFailure())
    console.error('getTasksFailure:', error)
  }
}

export const addTaskRequest = (newTask) => async (dispatch) => {
  try {
    const { text } = newTask
    const id = uuid()
    dispatch(addTask({ id, text }))
    const task = await TasksApi.postTask({ id, text })
    dispatch(addTaskSuccess({ id: task.id, text: task.text, offline: false }))
  } catch (error) {
    dispatch(getTasksFailure())
    console.error('addTaskFailure:', error)
  }
}

export default tasksSlice.reducer
