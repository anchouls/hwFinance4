import { createSlice } from '@reduxjs/toolkit'

// `sex` holds the selected values ('male' / 'female'); an empty list means
// "no restriction", which matches the two independent checkboxes in Filter.js.
export const initialFilterState = {
    sex: [],
    mood: 'all',
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState: initialFilterState,
    reducers: {
        toggleSex: (state, action) => {
            const value = action.payload
            state.sex = state.sex.includes(value)
                ? state.sex.filter((sex) => sex !== value)
                : [...state.sex, value]
        },
        setSex: (state, action) => {
            state.sex = action.payload
        },
        setMood: (state, action) => {
            state.mood = action.payload
        },
        resetFilter: () => ({...initialFilterState}),
    },
})

export const { toggleSex, setSex, setMood, resetFilter } = filterSlice.actions

export const selectFilter = (state) => state.filter

export default filterSlice.reducer
