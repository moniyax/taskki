/** @jsx jsx */
import { jsx, Button } from 'theme-ui'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { guidPropType } from '../../util/propTypes'
import t from 'prop-types'
import { updateTaskRequest, archiveTaskRequest } from './taskRequests'

const actions = {
  textAlign: 'center',
  bg: 'n.8',
  borderBottomLeftRadius: 4,
  borderBottomRightRadius: 4,
  p: 3,
}

const archiveButtonStyle = {
  color: 'a.2',
  bg: 'transparent',
  fontWeight: 3,
  outline: 'none',
  cursor: 'pointer',
}

const completeButtonStyle = {
  bg: '#fff',
  fontWeight: 3,
  outline: 'none',
  border: '1px solid',
  borderColor: 'a2.2',
  color: 'a2.2',
  cursor: 'pointer',
}

const TaskDetailsActions = ({ id, completed }) => {
  const dispatch = useDispatch()
  const history = useHistory()

  const handleCompleteClick = () => {
    dispatch(
      updateTaskRequest({
        id,
        completed: !completed,
      })
    )
  }

  const handleArchiveClick = () => {
    dispatch(
      archiveTaskRequest({
        id,
      })
    )
    history.push('/')
  }

  return (
    <div sx={actions}>
      <Button sx={archiveButtonStyle} onClick={handleArchiveClick}>
        Archive
      </Button>
      <Button sx={completeButtonStyle} onClick={handleCompleteClick}>
        {completed ? 'Uncomplete' : 'Complete'}
      </Button>
    </div>
  )
}

TaskDetailsActions.propTypes = {
  id: guidPropType,
  completed: t.bool,
}

export default TaskDetailsActions
