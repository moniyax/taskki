/** @jsx jsx */
import { jsx, Text } from 'theme-ui'
import { datePropType } from '../../util/propTypes'
import moment from 'moment'

const TaskDate = ({ createdAt }) => (
  <div>
    <Text sx={{ fontSize: 1, color: 'n.3', mb: 2 }} variant="caps">
      Created On
    </Text>
    <div sx={{ fontSize: 2 }}>{moment(createdAt).format('MMMM Do YYYY')}</div>
  </div>
)

TaskDate.propTypes = {
  createdAt: datePropType,
}

export default TaskDate
