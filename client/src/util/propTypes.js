import t from 'prop-types'

export const datePropType = (props, propName, componentName) => {
  if (!props[propName]) return
  if (
    !/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.(\d{6}|\d{3})Z/.test(props[propName])
  ) {
    return new Error(
      `Invalid prop ${propName} value: ${props[propName]} supplied to ${componentName}. 
      Date validation failed. `
    )
  }
}

export const guidPropType = (props, propName, componentName) => {
  if (
    props[propName] &&
    !/[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}/.test(
      props[propName]
    )
  ) {
    return new Error(
      `Invalid prop ${propName} value: ${props[propName]} supplied to ${componentName}. 
      Guid validation failed. `
    )
  }
}

export const taskProps = {
  id: guidPropType,
  text: t.string,
  completed: t.bool,
  notes: t.string,
  projectId: guidPropType,
  syncing: t.bool,
  error: t.object,
  archived: t.bool,
  createdAt: datePropType,
}

export const projectProps = {
  id: guidPropType,
  name: t.string,
  inbox: t.bool,
  syncing: t.bool,
  error: t.object,
  archived: t.bool,
  createdAt: datePropType,
}
