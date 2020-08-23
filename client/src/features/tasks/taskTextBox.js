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

const TaskTextBox = ({ setEditing, text }) => {
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

TaskTextBox.propTypes = {
  setEditing: t.func,
  text: t.string,
}

export default TaskTextBox
