/** @jsx jsx */
import { jsx } from 'theme-ui'
import { connect } from 'react-redux'
import { getInbox } from './projectsSlice'
import { Link } from 'react-router-dom'
import { projectProps } from '../../util/propTypes'
import t from 'prop-types'

const InboxLink = ({ inbox }) => {
  return inbox.map((_inbox) => (
    <Link key={_inbox.id} to={`/projects/${_inbox.id}`}>
      Inbox
    </Link>
  ))
}

const mapStateToProps = ({ projects }) => ({
  inbox: getInbox(projects),
})

InboxLink.propTypes = {
  inbox: t.arrayOf(t.exact(projectProps)).isRequired,
}

export default connect(mapStateToProps)(InboxLink)
