import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { getTasksRequest, addTaskRequest } from './taskRequests'
import { getTasks } from './tasksSlice'
import TaskForm from './taskForm'
import t from 'prop-types'
import Authentication from '../auth/authentication'

const Tasks = ({ tasks }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTasksRequest())
  }, [dispatch])

  const submit = ({ taskText }) => {
    dispatch(addTaskRequest({ text: taskText }))
  }

  return (
    <Authentication>
      <>
        <button
          onClick={() => {
            dispatch({ type: 'logout' })
          }}
        >
          Log out
        </button>
        <div className="tasks">
          {tasks.map((task) => (
            <div key={task.id}>{task.text}</div>
          ))}
          <TaskForm onSubmit={submit} />
        </div>
      </>
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
