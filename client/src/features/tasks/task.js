/** @jsx jsx */
import { jsx } from 'theme-ui'
import t from 'prop-types'
import { useDispatch } from 'react-redux'
import { updateTaskRequest } from './taskRequests'
import check from './check.svg'
import circle from './circle.svg'
import { taskProps } from '../../util/propTypes'

const taskStyle = (completed) => {
  const base = {
    borderBottom: '1px solid #000',
    borderColor: 'n.6',
    py: 2,
    px: 1,
    mb: 2,
    width: '100%',
  }

  const completedStyle = completed
    ? { textDecoration: 'line-through', color: 'n.4' }
    : {}
  return { ...base, ...completedStyle }
}

const Task = ({ id, text, completed }) => {
  const dispatch = useDispatch()
  return (
    <div sx={{ display: 'flex' }}>
      <div sx={taskStyle(completed)} key={id}>
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
                verticalAlign: 'middle',
                cursor: 'pointer',
                marginRight: '7px',
                backgroundImage: `url(${circle})`,
                backgroundSize: '16px',
              },
              '&:checked + span': {
                backgroundImage: `url(${check})`,
                border: 'none',
              },
            }}
          />
          <span></span>
        </span>
        {text}
      </div>
    </div>
  )
}

Task.propTypes = t.exact(taskProps).isRequired

export default Task
