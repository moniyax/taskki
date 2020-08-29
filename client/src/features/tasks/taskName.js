/** @jsx jsx */
import { jsx } from 'theme-ui'
import t from 'prop-types'
import { taskProps } from '../../util/propTypes'
import { Link } from 'react-router-dom'

const taskStyle = (completed) => {
  const base = {
    width: '100%',
  }

  const completedStyle = completed
    ? { textDecoration: 'line-through', color: 'n.4' }
    : {}
  return { ...base, ...completedStyle }
}

const TaskName = ({ id, text, completed, projectId }) => {
  return (
    <Link
      to={`/projects/${projectId}/tasks/${id}`}
      sx={{
        color: 'n.1',
        textDecoration: 'none',
        width: '100%',
        ...taskStyle(completed),
      }}
      key={id}
    >
      {text}
    </Link>
  )
}

TaskName.propTypes = t.exact(taskProps).isRequired

export default TaskName
