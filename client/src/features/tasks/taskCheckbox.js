/** @jsx jsx */
import { jsx } from 'theme-ui'
import t from 'prop-types'
import { useDispatch } from 'react-redux'
import { updateTaskRequest } from './taskRequests'
import check from './check.svg'
import circle from './circle.svg'
import { guidPropType } from '../../util/propTypes'

const TaskCheckBox = ({ id, completed }) => {
  const dispatch = useDispatch()

  return (
    <span
      onClick={() => {
        dispatch(
          updateTaskRequest({
            id,
            completed: !completed,
          })
        )
      }}
    >
      <input
        type="checkbox"
        defaultChecked={completed}
        sx={{
          display: 'none',
          '& + span': {
            color: 'red',
            display: 'inline-block',
            width: '16px',
            height: '16px',
            backgroundSize: '16px',
            cursor: 'pointer',
            mr: 1,
            backgroundImage: `url(${circle})`,
          },
          '&:checked + span': {
            backgroundImage: `url(${check})`,
            border: 'none',
          },
        }}
      />
      <span></span>
    </span>
  )
}

TaskCheckBox.propTypes = {
  id: guidPropType,
  completed: t.bool,
}

export default TaskCheckBox
