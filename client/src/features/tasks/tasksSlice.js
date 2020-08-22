import { createSlice } from '@reduxjs/toolkit'

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
      state.byId[id] = payload
      state.byId[id].syncing = false
      state.byId[id].error = null
    },
    addTaskFailure(state, { payload }) {
      const { id } = payload
      state.byId[id].syncing = false
      state.byId[id].error = payload
    },

    updateTask(state, { payload }) {
      const { id } = payload
      state.byId[id] = { ...state.byId[id], ...payload }
    },
    updateTaskStart(state, { payload }) {
      const { id } = payload
      state.byId[id].syncing = true
      state.byId[id].error = null
    },
    updateTaskSuccess(state, { payload }) {
      const { id } = payload
      state.byId[id] = payload
      state.byId[id].syncing = false
      state.byId[id].error = null
    },
    updateTaskFailure(state, { payload }) {
      const { id } = payload
      state.byId[id].syncing = false
      state.byId[id].error = payload
    },
  },
})

export const {
  addTask,
  addTaskStart,
  addTaskFailure,
  getTasksStart,
  getTasksSuccess,
  getTasksFailure,
  addTaskSuccess,
  updateTask,
  updateTaskStart,
  updateTaskSuccess,
  updateTaskFailure,
} = tasksSlice.actions

export const getTasks = (state) => state.ids.map((id) => state.byId[id])

export const getTask = (state, taskId) => state.tasks.byId[taskId]

export default tasksSlice.reducer
