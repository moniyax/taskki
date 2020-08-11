import * as TasksApi from './tasksApi'
import { v4 as uuid } from 'uuid'
import { normalize, schema } from 'normalizr'
import ky from 'ky'
import {
  addTask,
  getTasksStart,
  getTasksSuccess,
  getTasksFailure,
  addTaskSuccess,
} from './tasksSlice'

const taskSchema = new schema.Entity('tasks')
const tasksSchema = [taskSchema]

export const getTasksRequest = () => async (dispatch) => {
  try {
    dispatch(getTasksStart())

    const tasks = await TasksApi.getTasks()
    const { entities, result } = normalize(tasks, tasksSchema)
    const tasksById = entities.tasks || {}
    const taskIds = result

    dispatch(getTasksSuccess({ tasksById, taskIds }))
  } catch (_error) {
    if (!(_error instanceof ky.HTTPError)) throw _error
    const error = await _error.response.json()

    dispatch(getTasksFailure(error))
    console.error('getTasksFailure:', error)
  }
}

export const addTaskRequest = (newTask) => async (dispatch) => {
  try {
    const { text } = newTask
    const id = uuid()
    dispatch(addTask({ id, text }))
    const task = await TasksApi.postTask({ id, text })
    dispatch(addTaskSuccess({ id: task.id, text: task.text }))
  } catch (_error) {
    if (!(_error instanceof ky.HTTPError)) throw _error
    const error = await _error.response.json()

    dispatch(getTasksFailure(error))
    console.error('addTaskFailure:', error)
  }
}
