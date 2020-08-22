/** @jsx jsx */
import { jsx } from 'theme-ui'
import t from 'prop-types'
import { useDispatch } from 'react-redux'
import { updateTaskRequest } from './taskRequests'
import check from './check.svg'
import circle from './circle.svg'
import { taskProps } from '../../util/propTypes'
import { Link } from 'react-router-dom'

const taskStyle = (completed) => {
  const base = {
    px: 1,
    width: '100%',
    py: 3,
  }

  const completedStyle = completed
    ? { textDecoration: 'line-through', color: 'n.4' }
    : {}
  return { ...base, ...completedStyle }
}

const Task = ({ id, text, completed }) => {
  const dispatch = useDispatch()
  return (
    <div
      sx={{
        display: 'flex',
        borderBottom: '1px solid #000',
        borderColor: 'n.6',
        alignItems: 'center',
      }}
    >
      <span
        onClick={() => {
          dispatch(
            updateTaskRequest({
              id,
              completed: !completed,
            })
          )
        }}
      >
        <input
          type="checkbox"
          defaultChecked={completed}
          sx={{
            display: 'none',
            '& + span': {
              color: 'red',
              display: 'inline-block',
              width: '16px',
              height: '16px',
              backgroundSize: '16px',
              cursor: 'pointer',
              mr: 1,
              backgroundImage: `url(${circle})`,
            },
            '&:checked + span': {
              backgroundImage: `url(${check})`,
              border: 'none',
            },
          }}
        />
        <span></span>
      </span>
      <Link
        to={`tasks/${id}`}
        sx={{
          color: 'n.1',
          textDecoration: 'none',
          width: '100%',
          ...taskStyle(completed),
        }}
        key={id}
      >
        {' '}
        {text}
      </Link>
    </div>
  )
}

Task.propTypes = t.exact(taskProps).isRequired

export default Task
