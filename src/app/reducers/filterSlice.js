import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    query: '',
    onlyActive: false,
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setQuery: (state, action) => {
            state.query = action.payload
        },
        toggleOnlyActive: (state) => {
            state.onlyActive = !state.onlyActive
        },
        resetFilter: () => initialState,
    },
})

export const { setQuery, toggleOnlyActive, resetFilter } = filterSlice.actions

export default filterSlice.reducer
