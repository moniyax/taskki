/** @jsx jsx */
import { jsx } from 'theme-ui'
import t from 'prop-types'
import { projectProps } from '../../util/propTypes'
import Project from './project'
import { connect } from 'react-redux'
import { getProjects } from './projectsSlice'

const ProjectList = ({ projects }) => {
  return projects.map((project) => (
    <Project key={project.id} id={project.id} name={project.name} />
  ))
}

const mapStateToProps = ({ projects }) => ({
  projects: getProjects(projects),
})

ProjectList.propTypes = {
  projects: t.arrayOf(t.exact(projectProps)).isRequired,
}

export default connect(mapStateToProps)(ProjectList)
