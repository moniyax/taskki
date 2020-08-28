/** @jsx jsx */
import { jsx } from 'theme-ui'
import { datePropType } from '../../util/propTypes'
import moment from 'moment'
import TaskDetailsSectionHeader from './taskDetailsSectionHeader'

const TaskDetailsDate = ({ createdAt }) => (
  <div>
    <TaskDetailsSectionHeader>Created On</TaskDetailsSectionHeader>
    <div sx={{ fontSize: 2 }}>{moment(createdAt).format('MMMM Do YYYY')}</div>
  </div>
)

TaskDetailsDate.propTypes = {
  createdAt: datePropType,
}

export default TaskDetailsDate
