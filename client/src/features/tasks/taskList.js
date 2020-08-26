/** @jsx jsx */
import { jsx } from 'theme-ui'
import { connect, useDispatch } from 'react-redux'

import t from 'prop-types'
import Task from './task'
import { taskProps } from '../../util/propTypes'
import { getTasks } from './tasksSlice'
import { useCallback, useEffect } from 'react'
import TaskDetails from './taskDetails'
import { useParams } from 'react-router-dom'
import { getIsProjectsFetched } from '../projects/projectsSlice'

import { getTasksRequest } from './taskRequests'

const TaskList = ({ tasks, isProjectsFetched }) => {
  const { projectId } = useParams()
  const { taskId } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    if (isProjectsFetched) {
      dispatch(getTasksRequest({ projectId }))
    }
  }, [projectId, isProjectsFetched, dispatch])

  const taskGroup = useCallback(
    (predicate) =>
      tasks
        .filter(predicate)
        .map((task) => (
          <Task
            key={task.id}
            id={task.id}
            projectId={projectId}
            text={task.text}
            completed={task.completed}
          />
        )),
    [tasks, projectId]
  )

  return (
    <div className="tasklist">
      {taskId && tasks.length > 0 && <TaskDetails taskId={taskId} />}
      {taskGroup((task) => !task.completed)}
      {taskGroup((task) => task.completed)}
    </div>
  )
}

const mapStateToProps = ({ tasks, projects }) => ({
  isProjectsFetched: getIsProjectsFetched(projects),
  tasks: getTasks(tasks),
})

export default connect(mapStateToProps)(TaskList)

TaskList.propTypes = {
  tasks: t.arrayOf(t.exact(taskProps)).isRequired,
  isProjectsFetched: t.bool.isRequired,
}
