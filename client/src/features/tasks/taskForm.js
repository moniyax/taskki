/** @jsx jsx */
import { jsx } from 'theme-ui'
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
        rows={3}
        onKeyDown={keyDownHandler(handleSubmit)}
        sx={{
          width: '100%',
          borderRadius: 4,
          borderColor: 'n.3',
          p: 2,
          outline: 'none',
        }}
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
