/** @jsx jsx */
import { jsx, Text } from 'theme-ui'
import t from 'prop-types'

const TaskDetailsSectionHeader = ({ children }) => (
  <Text sx={{ fontSize: 1, color: 'n.3', mb: 2 }} variant="caps">
    {children}
  </Text>
)

TaskDetailsSectionHeader.propTypes = {
  children: t.node.isRequired,
}

export default TaskDetailsSectionHeader
