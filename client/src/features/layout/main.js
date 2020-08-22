/** @jsx jsx */
import { useEffect } from 'react'
import { jsx } from 'theme-ui'
import { useDispatch } from 'react-redux'
import { getTasksRequest, addTaskRequest } from '../tasks/taskRequests'
import TaskList from '../tasks/taskList'
import TaskForm from '../tasks/taskForm'

const Main = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTasksRequest())
  }, [dispatch])

  const submit = ({ taskText }) => {
    dispatch(addTaskRequest({ text: taskText }))
  }

  return (
    <div
      sx={{
        px: 7,
        bg: 'n.10',
        maxWidth: 17,
        m: 'auto',
        fontSize: 2,
        mt: 9,
      }}
    >
      <TaskList />
      <TaskForm onSubmit={submit} />
    </div>
  )
}

export default Main
