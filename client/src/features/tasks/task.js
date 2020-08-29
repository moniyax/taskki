/** @jsx jsx */
import { jsx } from 'theme-ui'
import t from 'prop-types'
import { taskProps } from '../../util/propTypes'
import { Link } from 'react-router-dom'
import TaskCheckBox from './taskCheckbox'
import TaskName from './taskName'
import TaskDueDate from './taskDueDate'

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

const Task = ({ id, text, completed, projectId, dueDate }) => {
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        borderBottom: '1px solid #000',
        borderColor: 'n.6',
      }}
    >
      <div
        sx={{
          py: 2,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <TaskCheckBox id={id} completed={completed} />
        <TaskName
          id={id}
          completed={completed}
          text={text}
          projectId={projectId}
        />
      </div>
      {dueDate && <TaskDueDate dueDate={dueDate} />}
    </div>
  )
}

Task.propTypes = t.exact(taskProps).isRequired

export default Task
