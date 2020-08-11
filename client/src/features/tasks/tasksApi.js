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

export const getTasks = () => api.get('/api/tasks').json()

export const postTask = ({ id, text }) =>
  api
    .post('/api/tasks', {
      json: {
        id,
        text,
      },
    })
    .json()
