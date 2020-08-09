import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getTasks, getTasksRequest, addTaskRequest } from './tasksSlice'
import TaskForm from '../taskForm/taskForm'
import t from 'prop-types'

const Tasks = ({ addTaskRequest, tasks, getTasksRequest }) => {
  useEffect(() => {
    getTasksRequest()
  }, [getTasksRequest])

  const submit = ({ taskText }) => {
    addTaskRequest({ text: taskText })
  }

  return (
    <div className="tasks">
      {tasks.map((task) => (
        <div key={task.id}>{task.text}</div>
      ))}
      <div></div>
      <TaskForm onSubmit={submit} />
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Tasks)
