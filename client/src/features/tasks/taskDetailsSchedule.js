/** @jsx jsx */
import { jsx, Button } from 'theme-ui'
import TaskDetailsSectionHeader from './taskDetailsSectionHeader'
import t from 'prop-types'
import { updateTaskRequest } from './taskRequests'
import { useDispatch } from 'react-redux'
import { guidPropType } from '../../util/propTypes'
import { useHistory } from 'react-router-dom'

const addDays = (date, days) => {
  var result = new Date(date)
  result.setDate(result.getDate() + days)
  return result
}

const TaskDetailsScheduleButton = ({ label, onClick }) => (
  <Button
    sx={{
      p: 1,
      fontSize: 1,
      bg: 'n.2',
      borderRadius: 1,
      mr: 1,
      boxShadow: 0,
      cursor: 'pointer',
      outline: 'none',
    }}
    onClick={onClick}
  >
    {label}
  </Button>
)

TaskDetailsScheduleButton.propTypes = {
  label: t.string,
  onClick: t.func,
}

const TaskDetailsSchedule = ({ taskId, projectId }) => {
  const dispatch = useDispatch()
  const history = useHistory()

  const todayClick = () => {
    dispatch(
      updateTaskRequest({
        id: taskId,
        dueDate: new Date().toJSON(),
      })
    )
    history.push(`/projects/${projectId}`)
  }

  const tomorrowClick = () => {
    console.log('toomorrow')
    dispatch(
      updateTaskRequest({
        id: taskId,
        dueDate: addDays(new Date(), 1).toJSON(),
      })
    )
    history.push(`/projects/${projectId}`)
  }

  const nextWeekClick = () => {
    dispatch(
      updateTaskRequest({
        id: taskId,
        dueDate: addDays(new Date(), 7).toJSON(),
      })
    )
    history.push(`/projects/${projectId}`)
  }

  const noDateClick = () => {
    dispatch(
      updateTaskRequest({
        id: taskId,
        dueDate: null,
      })
    )
    history.push(`/projects/${projectId}`)
  }

  return (
    <div sx={{ mb: 6 }}>
      <TaskDetailsSectionHeader>Schedule</TaskDetailsSectionHeader>
      <div>
        <TaskDetailsScheduleButton label={'Today'} onClick={todayClick} />
        <TaskDetailsScheduleButton label={'Tomorrow'} onClick={tomorrowClick} />
        <TaskDetailsScheduleButton
          label={'Next Week'}
          onClick={nextWeekClick}
        />
        <TaskDetailsScheduleButton label={'No Date'} onClick={noDateClick} />
      </div>
    </div>
  )
}

TaskDetailsSchedule.propTypes = {
  taskId: guidPropType,
}

export default TaskDetailsSchedule
