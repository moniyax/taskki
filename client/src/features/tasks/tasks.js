/** @jsx jsx */
import { useEffect } from 'react'
import { jsx, useColorMode } from 'theme-ui'
import { connect, useDispatch } from 'react-redux'
import { getTasksRequest, addTaskRequest } from './taskRequests'
import { getTasks } from './tasksSlice'
import TaskForm from './taskForm'
import t from 'prop-types'
import Authentication from '../auth/authentication'

import Task from './task'

const Tasks = ({ tasks }) => {
  const dispatch = useDispatch()
  const [colorMode, setColorMode] = useColorMode()

  useEffect(() => {
    dispatch(getTasksRequest())
  }, [dispatch])

  const submit = ({ taskText }) => {
    dispatch(addTaskRequest({ text: taskText }))
  }

  return (
    <Authentication>
      <button
        onClick={(e) => {
          setColorMode(colorMode === 'default' ? 'dark' : 'default')
        }}
      >
        {colorMode === 'default' ? 'Dark' : 'Light'} theme
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'logout' })
        }}
      >
        Log out
      </button>
      <div sx={{ px: 8 }} className="tasks">
        {tasks.map((task) => (
          <Task key={task.id} id={task.id} text={task.text} />
        ))}
        <TaskForm onSubmit={submit} />
      </div>
    </Authentication>
  )
}

const mapStateToProps = ({ tasks }) => ({
  tasks: getTasks(tasks),
})

Tasks.propTypes = {
  tasks: t.arrayOf(
    t.shape({ text: t.string.isRequired, completed: t.bool.isRequired })
  ),
}
const TasksContainer = connect(mapStateToProps)(Tasks)

const AuthedTask = () => {
  return (
    <Authentication>
      <TasksContainer />
    </Authentication>
  )
}

export default AuthedTask
