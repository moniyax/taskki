/** @jsx jsx */
import { jsx } from 'theme-ui'
import t from 'prop-types'
import { taskProps } from '../../util/propTypes'
import dayjs from 'dayjs'
import isTomorrow from 'dayjs/plugin/isTomorrow'
import isToday from 'dayjs/plugin/isToday'
import isYesterday from 'dayjs/plugin/isYesterday'

const isWithinWeek = (o, c, d) => {
  const proto = c.prototype
  proto.isWithinWeek = function () {
    const comparisonTemplate = 'YYYY-MM-DD'
    const nextWeek = d().add(7, 'day')

    const date = d(this.format(comparisonTemplate))
    const nextWeekDate = d(nextWeek.format(comparisonTemplate))
    const days = nextWeekDate.diff(date, 'day')
    return days < 8 && days >= 0
  }
}

dayjs.extend(isTomorrow)
dayjs.extend(isToday)
dayjs.extend(isYesterday)
dayjs.extend(isWithinWeek)

const displayDueDate = (dueDate) => {
  const date = dayjs(dueDate)
  const today = dayjs()

  if (date.isToday()) return 'Today'
  if (date.isTomorrow()) return 'Tomorrow'
  if (date.isYesterday()) return 'Yesterday'
  if (date.isWithinWeek()) return dayjs(date).format('dddd')

  let res = dayjs(date).format('MMM D YYYY')
  if (date.year() === today.year()) {
    res = dayjs(date).format('MMM D')
    if (date.month() === today.month()) {
      res = dayjs(date).format('ddd')
    }
  }
  return res
}

const TaskDueDate = ({ dueDate }) => {
  return (
    <div
      sx={{
        color: 'n.3',
        fontSize: 0,
        ml: '20px',
        pb: 2,
      }}
    >
      {displayDueDate(dueDate)}
    </div>
  )
}

TaskDueDate.propTypes = t.exact(taskProps).isRequired

export default TaskDueDate
