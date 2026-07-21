import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        sex: 'all',
        mood: 'all',
    },
    reducers: {
        setSex: (state, action) => {
            state.sex = action.payload
        },
        setMood: (state, action) => {
            state.mood = action.payload
        },
    },
})

export const { setSex, setMood } = filterSlice.actions

export default filterSlice.reducer
