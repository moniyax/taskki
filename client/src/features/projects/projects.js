/** @jsx jsx */
import { jsx } from 'theme-ui'
import ProjectList from './projectList'
import AddProject from './addProject'
import InboxLink from './inboxLink'
import { Link } from 'react-router-dom'

const projectsStyle = {
  m: 0,
  listStyleType: 'none',
  p: 0,
}

const Projects = () => {
  return (
    <div
      sx={{
        width: '300px',
        pl: 9,
        bg: 'n.8',
      }}
    >
      <h2 sx={{ fontSize: 2, fontWeight: 3 }}>Projects</h2>

      <ul sx={projectsStyle}>
        <li
          sx={{
            py: 1,
          }}
        >
          <Link to="/">Today</Link>
        </li>
        <InboxLink />
        <AddProject />
        <ProjectList />
      </ul>
    </div>
  )
}

export default Projects
