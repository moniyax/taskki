import ky from 'ky'

export const signIn = ({ email, password }) =>
  ky
    .post('/api/session', {
      json: {
        email,
        password,
      },
    })
    .json()

export const signUp = ({ username, email, password }) =>
  ky
    .post('/api/users', {
      json: {
        username,
        email,
        password,
      },
    })
    .json()
