import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid'

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    byId: {},
    ids: [],
  },
  reducers: {
    addTask: {
      reducer(state, action) {
        const { id, text } = action.payload
        state.byId[id] = { id, text, completed: false }
        state.ids.push(id)
      },
      prepare(text) {
        return { payload: { text, id: uuid() } }
      },
    },
  },
})

export const { addTask } = tasksSlice.actions

export const taskCount = (state) => state.ids.length
export const getTasks = (state) => state.ids.map((id) => state.byId[id])

export default tasksSlice.reducer
