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

export const getProjects = () => api.get('/api/projects').json()

export const postProject = ({ id, text }) =>
  api
    .post('/api/projects', {
      json: {
        id,
        text,
      },
    })
    .json()

export const updateProject = (projectFields) => {
  const { id } = projectFields
  return api
    .patch(`/api/projects/${id}`, {
      json: projectFields,
    })
    .json()
}

export const deleteProject = ({ id }) => {
  return api.delete(`/api/projects/${id}`).json()
}
