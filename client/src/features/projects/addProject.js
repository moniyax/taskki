/** @jsx jsx */
import { jsx } from 'theme-ui'
import AddProjectInput from './addProjectInput'
import AddProjectButton from './addProjectButton'
import { useState } from 'react'

const AddProject = () => {
  const [editing, setEditing] = useState(false)

  const addProjectView = editing ? (
    <AddProjectInput setEditing={setEditing} />
  ) : (
    <AddProjectButton setEditing={setEditing} />
  )
  return <div sx={{ mb: 5 }}>{addProjectView}</div>
}

export default AddProject
