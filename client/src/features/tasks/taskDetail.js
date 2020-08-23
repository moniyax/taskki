/** @jsx jsx */
import { jsx, Close } from 'theme-ui'
import { useHistory, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getTask } from './tasksSlice'
import { taskProps } from '../../util/propTypes'
import t from 'prop-types'
import TaskDetailText from './taskDetailText'

const modalBaackdrop = {
  position: 'absolute',
  backgroundColor: 'hsl(0,0,%,0%,0.15)',
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
  border: '1px solid #ccc',
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

const TaskDetail = ({ task: { text } }) => {
  const history = useHistory()
  return (
    <div>
      <div
        className="modalBaackdrop"
        sx={modalBaackdrop}
        onClick={() => history.push('/')}
      ></div>
      <div className="modal" sx={modal} onClick={(e) => e.preventDefault()}>
        <Close sx={closeButton} onClick={() => history.push('/')} />
        <TaskDetailText text={text} />
        <div className="content"></div>
        <div className="actions" sx={actions}></div>
      </div>
    </div>
  )
}

const mapStateToProps = (state, { match: { params } }) => {
  return {
    task: getTask(state, params.taskId),
  }
}

export default withRouter(connect(mapStateToProps)(TaskDetail))

TaskDetail.propTypes = {
  task: t.exact(taskProps),
}
