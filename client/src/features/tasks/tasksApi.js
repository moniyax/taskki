import ky from 'ky'
import { getToken } from '../auth/authSlice'
import Store from '../../app/store'

const api = ky.extend({
  hooks: {
    beforeRequest: [
      (options) => {
        const token = getToken(Store.getState())
        token &&
          options.headers.set('Authorization', 'Token token="' + token + '"')
      },
    ],
  },
})

export const getTasks = ({ projectId }) => {
  return api.get(`/api/projects/${projectId}/tasks`).json()
}

export const postTask = ({ id, text, projectId }) =>
  api
    .post(`/api/projects/${projectId}/tasks`, {
      json: {
        id,
        text,
      },
    })
    .json()

export const updateTask = (taskFields) => {
  const { id } = taskFields
  return api
    .patch(`/api/tasks/${id}`, {
      json: taskFields,
    })
    .json()
}

export const deleteTask = ({ id }) => {
  return api.delete(`/api/tasks/${id}`).json()
}
