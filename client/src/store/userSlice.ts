import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserSlice {
  name: string
}

const initialState: UserSlice = { name: '' }

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setNewUser(state, action: PayloadAction<string>) {
      state.name = action.payload
    },
  },
})

export const { setNewUser } = userSlice.actions

export default userSlice.reducer
