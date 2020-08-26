/** @jsx jsx */
import { useEffect } from 'react'
import { jsx } from 'theme-ui'
import { useDispatch } from 'react-redux'
import { addTaskRequest } from '../tasks/taskRequests'
import TaskList from '../tasks/taskList'
import TaskForm from '../tasks/taskForm'
import { getProjectsRequest } from '../projects/projectRequests'
import { useParams } from 'react-router-dom'

const Main = () => {
  const { projectId } = useParams()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProjectsRequest())
  }, [dispatch])

  const submit = ({ taskText }) => {
    dispatch(addTaskRequest({ text: taskText, projectId }))
  }

  return (
    <div
      sx={{
        px: 7,
        bg: 'n.10',
        fontSize: 2,
        flex: '1 1',
      }}
    >
      <TaskList />
      <TaskForm onSubmit={submit} />
    </div>
  )
}

export default Main
