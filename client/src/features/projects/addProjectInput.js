/** @jsx jsx */
import { jsx } from 'theme-ui'
import t from 'prop-types'
import { useState, useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addProjectRequest } from './projectRequests'

const textStyle = {
  width: '80%',
  color: 'n.1',
  outline: 'none',
}

const AddProjectInput = ({ setEditing }) => {
  const textInput = useRef(null)
  const dispatch = useDispatch()

  useEffect(() => {
    textInput.current.focus()
  })

  const [inputVal, setInputVal] = useState('')

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

  const updateText = (name) => {
    setEditing(false)
    dispatch(addProjectRequest({ name }))
  }

  return (
    <input
      type="text"
      sx={textStyle}
      value={inputVal}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      ref={textInput}
    />
  )
}

AddProjectInput.propTypes = {
  setEditing: t.func,
  text: t.string,
}

export default AddProjectInput
