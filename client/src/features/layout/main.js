/** @jsx jsx */
import { useEffect } from 'react'
import { jsx } from 'theme-ui'
import { useDispatch } from 'react-redux'
import { getTasksRequest, addTaskRequest } from '../tasks/taskRequests'
import TaskList from '../tasks/taskList'
import TaskForm from '../tasks/taskForm'
import { getProjectsRequest } from '../projects/projectRequests'

const Main = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTasksRequest())
  }, [dispatch])

  useEffect(() => {
    dispatch(getProjectsRequest())
  }, [dispatch])

  const submit = ({ taskText }) => {
    dispatch(addTaskRequest({ text: taskText }))
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
