/** @jsx jsx */
import { jsx } from 'theme-ui'
import t from 'prop-types'
import { Link } from 'react-router-dom'
import { guidPropType } from '../../util/propTypes'

const Project = ({ name, id }) => (
  <li
    sx={{
      py: 1,
    }}
  >
    <Link to={`/projects/${id}`}>{name}</Link>
  </li>
)

Project.propTypes = {
  name: t.string.isRequired,
  id: guidPropType,
}

export default Project
