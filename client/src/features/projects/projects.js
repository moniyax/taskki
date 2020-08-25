/** @jsx jsx */
import { jsx } from 'theme-ui'
import t from 'prop-types'
import { projectProps } from '../../util/propTypes'
import Project from './project'

const projectsStyle = {
  width: '300px',
  bg: 'n.8',
  m: '0',
  listStyleType: 'none',
  pl: 9
}

const Projects = ({ projects }) => {
  return (
    <ul sx={projectsStyle}>
      <h2 sx={{ fontSize: 2, fontWeight: 3 }}>Projects</h2>
      {projects.map((project) => (
        <Project key={project.id} name={project.name} />
      ))}
    </ul>
  )
}

Projects.propTypes = {
  projects: t.arrayOf(t.shape(projectProps)).isRequired,
}

export default Projects
