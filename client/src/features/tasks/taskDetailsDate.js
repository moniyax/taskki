/** @jsx jsx */
import { jsx } from 'theme-ui'
import { datePropType } from '../../util/propTypes'
import TaskDetailsSectionHeader from './taskDetailsSectionHeader'
import dayjs from 'dayjs'

const TaskDetailsDate = ({ createdAt }) => (
  <div>
    <TaskDetailsSectionHeader>Created On</TaskDetailsSectionHeader>
    <div sx={{ fontSize: 2 }}>{dayjs(createdAt).format('MMM D YYYY')}</div>
  </div>
)

TaskDetailsDate.propTypes = {
  createdAt: datePropType,
}

export default TaskDetailsDate
