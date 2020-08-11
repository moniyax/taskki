import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { getTasks, getTasksRequest, addTaskRequest } from './tasksSlice'
import TaskForm from './taskForm'
import t from 'prop-types'
import Authentication from '../auth/authentication'

const Tasks = ({ addTaskRequest, tasks, getTasksRequest }) => {
  useEffect(() => {
    getTasksRequest()
  }, [getTasksRequest])

  const submit = ({ taskText }) => {
    addTaskRequest({ text: taskText })
  }

  const dispatch = useDispatch()

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

const mapDispatchToProps = (dispatch) => ({
  addTaskRequest: (text) => dispatch(addTaskRequest(text)),
  getTasksRequest: () => dispatch(getTasksRequest()),
})

Tasks.propTypes = {
  addTaskRequest: t.func.isRequired,
  getTasksRequest: t.func.isRequired,
  tasks: t.arrayOf(
    t.shape({ text: t.string.isRequired, completed: t.bool.isRequired })
  ),
}
const TasksContainer = connect(mapStateToProps, mapDispatchToProps)(Tasks)

const AuthTask = () => {
  return (
    <Authentication>
      <TasksContainer />
    </Authentication>
  )
}

export default AuthTask
