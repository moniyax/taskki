/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { connect } from 'react-redux'

import t from 'prop-types'
import Task from './task'
import { taskProps } from '../../util/propTypes'
import { getTasks } from './tasksSlice'

const TaskList = ({ tasks }) => (
  <React.Fragment>
    {tasks.map((task) => (
      <Task key={task.id} id={task.id} text={task.text} />
    ))}
  </React.Fragment>
)

const mapStateToProps = ({ tasks }) => ({
  tasks: getTasks(tasks),
})

export default connect(mapStateToProps)(TaskList)

TaskList.propTypes = {
  tasks: t.exact(taskProps).isRequired,
}
