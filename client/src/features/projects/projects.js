/** @jsx jsx */
import { jsx } from 'theme-ui'
import ProjectList from './projectList'
import AddProject from './addProject'

const projectsStyle = {
  width: '300px',
  bg: 'n.8',
  m: '0',
  listStyleType: 'none',
  pl: 9,
}

const Projects = () => {
  return (
    <ul sx={projectsStyle}>
      <h2 sx={{ fontSize: 2, fontWeight: 3 }}>Projects</h2>
      <AddProject/>
      <ProjectList />
    </ul>
  )
}

export default Projects
