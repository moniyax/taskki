import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { addTask, getTasks, getTasksRequest } from './tasksSlice'
import TaskForm from '../taskForm/taskForm'
import t from 'prop-types'

const Tasks = ({ addTask, tasks, getTasksRequest }) => {
  useEffect(() => {
    getTasksRequest()
  }, [getTasksRequest])

  const submit = ({ taskText }) => {
    addTask(taskText)
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
  addTask: (text) => dispatch(addTask(text)),
  getTasksRequest: () => dispatch(getTasksRequest()),
})

Tasks.propTypes = {
  addTask: t.func.isRequired,
  getTasksRequest: t.func.isRequired,
  tasks: t.arrayOf(
    t.shape({ text: t.string.isRequired, completed: t.bool.isRequired })
  ),
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks)
