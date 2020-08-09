import ky from 'ky'

export const getTasks = () => ky.get('/api/tasks').json()

export const postTask = ({ id, text }) =>
  ky
    .post('/api/tasks', {
      json: {
        id,
        text,
      },
    })
    .json()
