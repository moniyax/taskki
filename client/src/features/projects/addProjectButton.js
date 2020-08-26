/** @jsx jsx */
import { jsx, Button } from 'theme-ui'
import add from './add1.svg'
import t from 'prop-types'

const AddProjectButton = ({ setEditing }) => (
  <Button
    sx={{
      mb: 3,
      fontSize: 2,
      color: 'n.2',
      mt: 4,
      px: 0,
      bg: 'transparent',
      outline: 'none',
      cursor: 'pointer',
    }}
    onClick={() => {
      setEditing(true)
    }}
  >
    <img src={add} height="12px" sx={{ mr: 1 }} />
    Add project
  </Button>
)

AddProjectButton.propTypes = {
  setEditing: t.func,
}

export default AddProjectButton
