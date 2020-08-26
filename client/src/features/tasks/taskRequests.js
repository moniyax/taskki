import * as TasksApi from './tasksApi'
import { v4 as uuid } from 'uuid'
import { normalize, schema } from 'normalizr'
import ky from 'ky'
import {
  addTask,
  addTaskStart,
  addTaskSuccess,
  addTaskFailure,
  getTasksStart,
  getTasksSuccess,
  getTasksFailure,
  updateTask,
  updateTaskStart,
  updateTaskSuccess,
  updateTaskFailure,
  deleteTask,
  deleteTaskStart,
  deleteTaskSuccess,
  deleteTaskFailure,
} from './tasksSlice'

const taskSchema = new schema.Entity('tasks')
const tasksSchema = [taskSchema]

export const getTasksRequest = ({ projectId }) => async (dispatch) => {
  try {
    dispatch(getTasksStart())

    const tasks = await TasksApi.getTasks({ projectId })
    const { entities, result } = normalize(tasks, tasksSchema)
    const tasksById = entities.tasks || {}
    const taskIds = result

    dispatch(getTasksSuccess({ tasksById, taskIds }))
  } catch (error) {
    if (!(error instanceof ky.HTTPError)) throw error
    const tasksFailure = await error.response.json()

    dispatch(getTasksFailure(tasksFailure))
    console.error('getTasksFailure:', tasksFailure)
  }
}

export const addTaskRequest = (task) => async (dispatch) => {
  const id = uuid()
  const newTask = { ...task, id }
  try {
    dispatch(addTask(newTask))
    dispatch(addTaskStart(newTask))

    const taskSuccess = await TasksApi.postTask(newTask)
    dispatch(addTaskSuccess(taskSuccess))
  } catch (error) {
    if (!(error instanceof ky.HTTPError)) throw error
    const taskFailure = await error.response.json()

    dispatch(addTaskFailure({ ...taskFailure, id }))
    console.error('addTaskFailure:', taskFailure)
  }
}

export const updateTaskRequest = (taskFields) => async (dispatch) => {
  const { id } = taskFields
  try {
    dispatch(updateTaskStart(taskFields))

    dispatch(updateTask(taskFields))
    const taskSuccess = await TasksApi.updateTask(taskFields)
    dispatch(updateTaskSuccess(taskSuccess))
  } catch (error) {
    if (!(error instanceof ky.HTTPError)) throw error
    const taskFailure = await error.response.json()

    dispatch(updateTaskFailure({ ...taskFailure, id }))
    console.error('updateTaskFailure:', taskFailure)
  }
}

export const archiveTaskRequest = ({ id }) =>
  updateTaskRequest({
    id,
    archived: true,
  })

export const deleteTaskRequest = ({ id }) => async (dispatch) => {
  try {
    dispatch(deleteTaskStart({ id }))

    dispatch(deleteTask({ id }))
    const taskSuccess = await TasksApi.deleteTask({ id })
    dispatch(deleteTaskSuccess(taskSuccess))
  } catch (error) {
    if (!(error instanceof ky.HTTPError)) throw error
    const taskFailure = await error.response.json()

    dispatch(deleteTaskFailure({ ...taskFailure, id }))
    console.error('deleteTaskFailure:', taskFailure)
  }
}
