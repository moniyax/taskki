/** @jsx jsx */
import { jsx, Close, Button } from 'theme-ui'
import { useHistory, withRouter } from 'react-router-dom'
import { connect, useDispatch } from 'react-redux'
import { getTask } from './tasksSlice'
import { taskProps } from '../../util/propTypes'
import t from 'prop-types'
import TaskDetailsText from './taskDetailsText'
import { updateTaskRequest, archiveTaskRequest } from './taskRequests'

const modalBaackdrop = {
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
  border: '1px solid #eee',
  boxShadow: 9,
  p: 4,
  pt: 6,
  borderRadius: 4,
  color: 'n.1',
}

const actions = { p: 3, textAlign: 'center' }

const closeButton = {
  position: 'absolute',
  top: 0,
  right: 0,
  color: 'n.4',
  cursor: 'pointer',
}

const TaskDetails = ({ task }) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { text, id, completed } = task

  return (
    <div>
      <div
        className="modalBaackdrop"
        sx={modalBaackdrop}
        onClick={() => history.push('/')}
      ></div>
      <div className="modal" sx={modal} onClick={(e) => e.preventDefault()}>
        <Close sx={closeButton} onClick={() => history.push('/')} />
        <TaskDetailsText text={text} />
        <div className="content"></div>
        <div className="actions" sx={actions}>
          <Button
            sx={{
              color: 'a.2',
              bg: '#fff',
              fontWeight: 3,
              outline: 'none',
            }}
            onClick={() => {
              dispatch(
                archiveTaskRequest({
                  id,
                })
              )
              history.push('/')
            }}
          >
            Archive
          </Button>
          <Button
            sx={{
              bg: '#fff',
              fontWeight: 3,
              outline: 'none',
              border: '1px solid',
              borderColor: 'a2.2',
              color: 'a2.2',
            }}
            onClick={() => {
              dispatch(
                updateTaskRequest({
                  id,
                  completed: !completed,
                })
              )
            }}
          >
            {completed ? 'Complete' : 'Uncomplete'}
          </Button>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state, { match: { params } }) => {
  return {
    task: getTask(state, params.taskId),
  }
}

export default withRouter(connect(mapStateToProps)(TaskDetails))

TaskDetails.propTypes = {
  task: t.exact(taskProps),
}
