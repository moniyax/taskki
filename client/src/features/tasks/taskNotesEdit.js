/** @jsx jsx */
import { jsx } from 'theme-ui'
import t from 'prop-types'
import { useState, useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { updateTaskRequest } from './taskRequests'
import { useParams } from 'react-router-dom'

const notesInputStyle = {
  width: '100%',
  color: 'n.1',
  outline: 'none',
  borderColor: 'n.4',
  borderRadius: 3,
}

const TaskNotesEdit = ({ setEditing, notes }) => {
  const notesInput = useRef(null)
  const dispatch = useDispatch()
  const { taskId } = useParams()

  useEffect(() => {
    notesInput.current.focus()
  })
  const [inputVal, setInputVal] = useState(notes)

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

  const updateText = (notes) => {
    setEditing(false)
    dispatch(updateTaskRequest({ id: taskId, notes }))
  }

  return (
    <textarea
      sx={notesInputStyle}
      value={inputVal}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
      ref={notesInput}
    />
  )
}

TaskNotesEdit.propTypes = {
  setEditing: t.func,
  notes: t.string,
}

export default TaskNotesEdit
