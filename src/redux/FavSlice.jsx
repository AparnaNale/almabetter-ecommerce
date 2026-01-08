import { createSlice } from '@reduxjs/toolkit'

const favSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: []
  },
  reducers: {
    toggleFavorite(state, action) {
      const exists = state.items.find(
        item => item.id === action.payload.id
      )

      if (exists) {
        state.items = state.items.filter(
          item => item.id !== action.payload.id
        )
      } else {
        state.items.push(action.payload)
      }
    },

    removeFromFav(state, action) {
      state.items = state.items.filter(
        item => item.id !== action.payload
      )
    }
  }
})

export const { toggleFavorite, removeFromFav } = favSlice.actions
export default favSlice.reducer
