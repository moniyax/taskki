/** @jsx jsx */
import { jsx } from 'theme-ui'
import t from 'prop-types'

const Task = ({ id, text }) => (
  <div
    sx={{
      borderBottom: '1px solid #000',
      borderColor: 'n.6',
      py: 2,
      px: 1,
      mb: 2,
    }}
    key={id}
  >
    {text}
  </div>
)

Task.propTypes = {
  id: t.string,
  text: t.string,
}

export default Task
