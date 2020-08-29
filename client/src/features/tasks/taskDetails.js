/** @jsx jsx */
import { jsx, Close } from 'theme-ui'
import { useHistory, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getTask } from './tasksSlice'
import { taskProps } from '../../util/propTypes'
import t from 'prop-types'
import TaskDetailsText from './taskDetailsText'
import TaskDetailsActions from './taskDetailsActions'
import TaskDetailsDate from './taskDetailsDate'
import TaskNotes from './taskNotesSection'
import TaskDetailsSchedule from './taskDetailsSchedule'

const modalBackdrop = {
  position: 'absolute',
  backgroundColor: 'hsl(0,0%,0%,0.2)',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
}

const modal = {
  maxWidth: '600px',
  width: '80%',
  position: 'absolute',
  left: 0,
  right: 0,
  margin: 'auto',
  background: 'white',
  boxShadow: 9,
  pt: 3,
  borderRadius: 4,
  color: 'n.1',
}

const closeButton = {
  position: 'absolute',
  top: 0,
  right: 0,
  color: 'n.4',
  cursor: 'pointer',
  width: 5,
}

const TaskDetails = ({ task }) => {
  const history = useHistory()
  const { text, id, completed, createdAt, notes, projectId } = task

  return (
    <div>
      <div
        className="modalBackdrop"
        sx={modalBackdrop}
        onClick={() => history.push(`/projects/${projectId}`)}
      ></div>
      <div className="modal" sx={modal} onClick={(e) => e.preventDefault()}>
        <div sx={{ p: 3, px: 5 }}>
          <Close
            sx={closeButton}
            onClick={() => history.push(`/projects/${projectId}`)}
          />
          <TaskDetailsText text={text} />
          <TaskDetailsSchedule taskId={id} projectId={projectId} />
          <TaskNotes notes={notes} />
          <TaskDetailsDate createdAt={createdAt} />
        </div>
        <TaskDetailsActions
          id={id}
          completed={completed}
          projectId={projectId}
        />
      </div>
    </div>
  )
}

const mapStateToProps = (state, { match: { params } }) => {
  return {
    task: getTask(state, params.taskId),
  }
}

TaskDetails.propTypes = {
  task: t.exact(taskProps),
}

export default withRouter(connect(mapStateToProps)(TaskDetails))
