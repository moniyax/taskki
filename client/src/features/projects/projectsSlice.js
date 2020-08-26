import { createSlice } from '@reduxjs/toolkit'

export const projectsSlice = createSlice({
  name: 'projects',
  initialState: {
    byId: {},
    ids: [],
    loading: false,
    fetched: false,
    error: null,
  },
  reducers: {
    getProjectsStart(state) {
      state.loading = true
      state.error = null
    },
    getProjectsSuccess(state, { payload }) {
      const { projectsById, projectIds } = payload
      state.byId = projectsById
      state.ids = projectIds
      state.loading = false
      state.error = null
      state.fetched = true
    },
    getProjectsFailure(state, action) {
      state.loading = false
      state.error = action.payload
    },

    addProject(state, { payload }) {
      const { id, text } = payload
      state.byId[id] = { id, text, completed: false }
      state.ids.unshift(id)
    },
    addProjectStart(state, { payload }) {
      const { id } = payload
      state.byId[id].syncing = true
      state.byId[id].error = null
    },
    addProjectSuccess(state, { payload }) {
      const { id } = payload
      state.byId[id] = payload
      state.byId[id].syncing = false
      state.byId[id].error = null
    },
    addProjectFailure(state, { payload }) {
      const { id } = payload
      state.byId[id].syncing = false
      state.byId[id].error = payload
    },

    updateProject(state, { payload }) {
      const { id } = payload
      state.byId[id] = { ...state.byId[id], ...payload }
    },
    updateProjectStart(state, { payload }) {
      const { id } = payload
      state.byId[id].syncing = true
      state.byId[id].error = null
    },
    updateProjectSuccess(state, { payload }) {
      const { id } = payload
      state.byId[id] = payload
      state.byId[id].syncing = false
      state.byId[id].error = null
    },
    updateProjectFailure(state, { payload }) {
      const { id } = payload
      state.byId[id].syncing = false
      state.byId[id].error = payload
    },

    deleteProject(state, { payload }) {
      const { id } = payload
      state.ids = state.ids.filter((_id) => _id !== id)
      delete state.byId[id]
    },
    deleteProjectStart(state, { payload }) {
      const { id } = payload
      state.byId[id].syncing = true
      state.byId[id].error = null
    },
    deleteProjectSuccess(state, { payload }) {
      const { id } = payload
      state.byId[id] = payload
      state.byId[id].syncing = false
      state.byId[id].error = null
    },
    deleteProjectFailure(state, { payload }) {
      const { id } = payload
      state.byId[id].syncing = false
      state.byId[id].error = payload
    },
  },
})

export const {
  addProject,
  addProjectStart,
  addProjectFailure,
  getProjectsStart,
  getProjectsSuccess,
  getProjectsFailure,
  addProjectSuccess,
  updateProject,
  updateProjectStart,
  updateProjectSuccess,
  updateProjectFailure,
  deleteProject,
  deleteProjectStart,
  deleteProjectSuccess,
  deleteProjectFailure,
} = projectsSlice.actions

export const getProjects = (state) =>
  state.ids.map((id) => state.byId[id]).filter((project) => !project.archived)

export const getIsProjectsFetched = (state) => state.fetched

export const getProject = (state, projectId) => state.projects.byId[projectId]

export default projectsSlice.reducer
