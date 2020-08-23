/** @jsx jsx */
import { jsx } from 'theme-ui'
import t from 'prop-types'
import { useState } from 'react'
import TaskEditInput from './taskEditInput'

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

const TaskDetailsText = ({ text }) => {
  const [editing, setEditing] = useState(false)

  const detailText = editing ? (
    <TaskEditInput setEditing={setEditing} text={text} />
  ) : (
    <TaskTextLabel setEditing={setEditing} text={text} />
  )
  return <div sx={{ mb: 5 }}>{detailText}</div>
}

TaskDetailsText.propTypes = {
  text: t.string,
}

export default TaskDetailsText
