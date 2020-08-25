/** @jsx jsx */
import { jsx } from 'theme-ui'
import t from 'prop-types'

const Project = ({ name }) => (
  <li
    sx={{
      py: 1,
    }}
  >
    {name}
  </li>
)

Project.propTypes = {
  name: t.string.isRequired,
}

export default Project
