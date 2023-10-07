import { createSlice } from '@reduxjs/toolkit'

const UserSlice = createSlice(
    {
        name: "user",
        initialState: {
            id: 1,
            name: "hamza"
        },
        reducers: {
            add() { },
            edit() { }
        }

    }
)
export const { add, edit } = UserSlice.actions
export default UserSlice.reducer