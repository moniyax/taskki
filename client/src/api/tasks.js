import ky from 'ky'

export const getTasks = () => ky.get('/api/tasks').json()
