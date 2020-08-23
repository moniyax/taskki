/** @jsx jsx */
import { jsx } from 'theme-ui'
import t from 'prop-types'

const textStyle = {
  fontSize: 5,
  fontWeight: 3,
  width: '100%',
  color: 'n.1',
}

const textLabelStyle = {
  cursor: 'pointer',
}

const TaskTextLabel = ({ setEditing, text }) => (
  <div
    sx={{ ...textStyle, ...textLabelStyle }}
    onClick={() => {
      setEditing(true)
    }}
  >
    {text}
  </div>
)

TaskTextLabel.propTypes = {
  setEditing: t.func,
  text: t.string,
}

export default TaskTextLabel
