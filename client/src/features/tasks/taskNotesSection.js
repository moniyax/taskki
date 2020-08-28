/** @jsx jsx */
import { jsx, Text } from 'theme-ui'
import t from 'prop-types'
import TaskNotesEdit from './taskNotesEdit'
import { useState } from 'react'
import TaskDetailsSectionHeader from './taskDetailsSectionHeader'

const TaskNotesDisplay = ({ notes, setEditing }) => (
  <div
    sx={{ cursor: 'pointer' }}
    onClick={() => {
      setEditing(true)
    }}
  >
    {notes}
  </div>
)

TaskNotesDisplay.propTypes = {
  notes: t.string,
  setEditing: t.func,
}

const TaskNotesPrompt = ({ setEditing }) => (
  <div
    sx={{
      border: '1px solid',
      borderColor: 'n.4',
      p: 3,
      borderRadius: 4,
      cursor: 'pointer',
      borderStyle: 'dashed',
    }}
    onClick={() => {
      setEditing(true)
    }}
  >
    <Text
      sx={{
        fontSize: 0,
        color: 'n.3',
        mb: 1,
        textAlign: 'center',
      }}
      variant="caps"
    >
      Click to add
    </Text>
  </div>
)

TaskNotesPrompt.propTypes = {
  setEditing: t.func,
}

const TaskNotes = ({ notes, setEditing, editing }) => {
  const detailText = editing ? (
    <TaskNotesEdit setEditing={setEditing} notes={notes} />
  ) : (
    <TaskNotesDisplay setEditing={setEditing} notes={notes} />
  )
  return <div sx={{ mb: 4 }}>{detailText}</div>
}

TaskNotes.propTypes = {
  notes: t.string,
  setEditing: t.func,
  editing: t.bool,
}

const TaskNotesBody = ({ notes }) => {
  const [editing, setEditing] = useState(false)

  if (!notes && !editing) {
    return <TaskNotesPrompt setEditing={setEditing} />
  }

  return <TaskNotes notes={notes} editing={editing} setEditing={setEditing} />
}

TaskNotesBody.propTypes = {
  notes: t.string,
}

const TaskNotesSection = ({ notes }) => (
  <div sx={{ mb: 5 }}>
    <TaskDetailsSectionHeader>Notes</TaskDetailsSectionHeader>
    <TaskNotesBody notes={notes} />
  </div>
)

TaskNotesSection.propTypes = {
  notes: t.string,
}

export default TaskNotesSection
