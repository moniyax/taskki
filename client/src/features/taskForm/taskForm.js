import React from 'react'
import { Field, reduxForm, reset } from 'redux-form'
import { connect } from 'react-redux'
import t from 'prop-types'

const TaskForm = ({ handleSubmit, reset }) => {
  const keyDownHandler = (handleSubmit) => (e) => {
    if (e.keyCode === 13) {
      e.preventDefault()
      handleSubmit()
      reset()
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Field
        component="textarea"
        name="taskText"
        cols=" "
        rows=" "
        onKeyDown={keyDownHandler(handleSubmit)}
      ></Field>
    </form>
  )
}

TaskForm.propTypes = {
  handleSubmit: t.func.isRequired,
  reset: t.func.isRequired,
}

const mapDispatchToProps = (dispatch) => ({
  reset: () => dispatch(reset('taskForm')),
})

export default reduxForm({ form: 'taskForm' })(
  connect(null, mapDispatchToProps)(TaskForm)
)
