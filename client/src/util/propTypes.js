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

export const userProps = {
  id: t.number,
  name: t.string,
  avatarKey: t.string,
  username: t.string,
  lastSeen: datePropType,
  isOnline: t.bool,
}

const { lastSeen, ...cUserProps } = userProps
export const contactUserProps = cUserProps

export const currentUserProps = {
  ...userProps,
  token: t.string,
  email: t.string,
}

export const commonMessageProps = {
  id: guidPropType,
  text: t.string,
  senderId: t.number,
  sender: t.exact(currentUserProps),
  conversationId: t.string,
  mediaKey: t.string,
  mediaName: t.string,
  mediaSize: t.number,
  mediaType: t.string,
  createdAt: datePropType,
  updatedAt: datePropType,
  selected: t.bool,
}

export const replyMessageProps = {
  ...commonMessageProps,
}

export const messageProps = {
  ...commonMessageProps,
  replyMessageId: guidPropType,
  replyMessage: t.exact(replyMessageProps),
  replyTo: t.exact(replyMessageProps),
  byCurrentUser: t.bool,
  offline: t.bool,
  status: t.string,
}

export const conversationProps = {
  id: guidPropType,
  createdAt: t.string,
  users: t.arrayOf(t.number),
  accepted: t.bool,
  messages: t.arrayOf(guidPropType),
  userLastRead: datePropType,
  peerLastRead: datePropType,
  peer: t.number.isRequired,
  replyTo: guidPropType,
  isCreating: t.bool,
  unreadReceivedMessageCount: t.number,
  messagesFetched: t.bool,
  messageAddedTimestamp: t.number,
  peerTyping: t.bool,
}

export const taskProps = {
  id: guidPropType,
  text: t.string,
  completed: t.bool,
  syncing: t.bool,
  error: t.object,
  archived: t.bool,
  createdAt: datePropType,
}

export const projectProps = {
  id: guidPropType,
  name: t.string,
  syncing: t.bool,
  error: t.object,
  archived: t.bool,
  createdAt: datePropType,
}

export const messageDateStrType = (props, propName, componentName) => {
  if (!props[propName]) return
  if (
    !/^\w+\s\w+\s.+\s\d{4}$|^\d{1,2}:\d{2}:\d{2}\s\w{2}$/.test(props[propName])
  ) {
    return new Error(
      `Invalid prop ${propName} value: ${props[propName]} supplied to ${componentName}. 
      Date validation failed. `
    )
  }
}
