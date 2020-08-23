/** @jsx jsx */
import { jsx } from 'theme-ui'
import t from 'prop-types'
import { useState, useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { updateTaskRequest } from './taskRequests'
import { useParams } from 'react-router-dom'

const textStyle = {
  fontSize: 5,
  fontWeight: 3,
  width: '100%',
  color: 'n.1',
}

const textLabelStyle = {
  cursor: 'pointer',
}

const TextLabel = ({ setEditing, text }) => (
  <div
    sx={{ ...textStyle, ...textLabelStyle }}
    onClick={() => {
      setEditing(true)
    }}
  >
    {text}
  </div>
)

TextLabel.propTypes = {
  setEditing: t.func,
  text: t.string,
}

const TextBox = ({ setEditing, text }) => {
  const textInput = useRef(null)
  const dispatch = useDispatch()
  const { taskId } = useParams()

  useEffect(() => {
    textInput.current.focus()
  })
  const [inputVal, setInputVal] = useState(text)

  const handleChange = (e) => {
    setInputVal(e.target.value)
  }

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      updateText(e.target.value)
    } else if (e.keyCode === 27) {
      setEditing(false)
    }
  }

  const handleBlur = (e) => {
    updateText(e.target.value)
  }

  const updateText = (text) => {
    setEditing(false)
    dispatch(updateTaskRequest({ id: taskId, text }))
  }

  return (
    <input
      type="text"
      sx={textStyle}
      value={inputVal}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
      ref={textInput}
    />
  )
}

TextBox.propTypes = {
  setEditing: t.func,
  text: t.string,
}

const TaskDetailsText = ({ text }) => {
  const [editing, setEditing] = useState(false)

  return editing ? (
    <TextBox setEditing={setEditing} text={text} />
  ) : (
    <TextLabel setEditing={setEditing} text={text} />
  )
}

TaskDetailsText.propTypes = {
  text: t.string,
}

export default TaskDetailsText
