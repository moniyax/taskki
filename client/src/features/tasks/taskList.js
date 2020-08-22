/** @jsx jsx */
import { jsx } from 'theme-ui'
import { connect } from 'react-redux'

import t from 'prop-types'
import Task from './task'
import { taskProps } from '../../util/propTypes'
import { getTasks } from './tasksSlice'
import { useCallback } from 'react'

const TaskList = ({ tasks }) => {
  const taskGroup = useCallback(
    (predicate) =>
      tasks
        .filter(predicate)
        .map((task) => (
          <Task
            key={task.id}
            id={task.id}
            text={task.text}
            completed={task.completed}
          />
        )),
    [tasks]
  )

  return (
    <div>
      {taskGroup((task) => !task.completed)}
      {taskGroup((task) => task.completed)}
    </div>
  )
}

const mapStateToProps = ({ tasks }) => ({
  tasks: getTasks(tasks),
})

export default connect(mapStateToProps)(TaskList)

TaskList.propTypes = {
  tasks: t.arrayOf(t.exact(taskProps)).isRequired,
}
