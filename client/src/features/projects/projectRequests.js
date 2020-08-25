import * as ProjectsApi from './projectsApi'
import { v4 as uuid } from 'uuid'
import { normalize, schema } from 'normalizr'
import ky from 'ky'
import {
  addProject,
  addProjectStart,
  addProjectSuccess,
  addProjectFailure,
  getProjectsStart,
  getProjectsSuccess,
  getProjectsFailure,
  updateProject,
  updateProjectStart,
  updateProjectSuccess,
  updateProjectFailure,
  deleteProject,
  deleteProjectStart,
  deleteProjectSuccess,
  deleteProjectFailure,
} from './projectsSlice'

const projectSchema = new schema.Entity('projects')
const projectsSchema = [projectSchema]

export const getProjectsRequest = () => async (dispatch) => {
  try {
    dispatch(getProjectsStart())

    const projects = await ProjectsApi.getProjects()
    const { entities, result } = normalize(projects, projectsSchema)
    const projectsById = entities.projects || {}
    const projectIds = result

    dispatch(getProjectsSuccess({ projectsById, projectIds }))
  } catch (error) {
    if (!(error instanceof ky.HTTPError)) throw error
    const projectsFailure = await error.response.json()

    dispatch(getProjectsFailure(projectsFailure))
    console.error('getProjectsFailure:', projectsFailure)
  }
}

export const addProjectRequest = (project) => async (dispatch) => {
  const id = uuid()
  const newProject = { ...project, id }
  try {
    dispatch(addProject(newProject))
    dispatch(addProjectStart(newProject))

    const projectSuccess = await ProjectsApi.postProject(newProject)
    dispatch(addProjectSuccess(projectSuccess))
  } catch (error) {
    if (!(error instanceof ky.HTTPError)) throw error
    const projectFailure = await error.response.json()

    dispatch(addProjectFailure({ ...projectFailure, id }))
    console.error('addProjectFailure:', projectFailure)
  }
}

export const updateProjectRequest = (projectFields) => async (dispatch) => {
  const { id } = projectFields
  try {
    dispatch(updateProjectStart(projectFields))

    dispatch(updateProject(projectFields))
    const projectSuccess = await ProjectsApi.updateProject(projectFields)
    dispatch(updateProjectSuccess(projectSuccess))
  } catch (error) {
    if (!(error instanceof ky.HTTPError)) throw error
    const projectFailure = await error.response.json()

    dispatch(updateProjectFailure({ ...projectFailure, id }))
    console.error('updateProjectFailure:', projectFailure)
  }
}

export const archiveProjectRequest = ({ id }) =>
  updateProjectRequest({
    id,
    archived: true,
  })

export const deleteProjectRequest = ({ id }) => async (dispatch) => {
  try {
    dispatch(deleteProjectStart({ id }))

    dispatch(deleteProject({ id }))
    const projectSuccess = await ProjectsApi.deleteProject({ id })
    dispatch(deleteProjectSuccess(projectSuccess))
  } catch (error) {
    if (!(error instanceof ky.HTTPError)) throw error
    const projectFailure = await error.response.json()

    dispatch(deleteProjectFailure({ ...projectFailure, id }))
    console.error('deleteProjectFailure:', projectFailure)
  }
}
