import { createSlice } from '@reduxjs/toolkit'

const defaultSex = { male: false, female: false }

export const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        staged: { sex: { ...defaultSex } },
        applied: { sex: { ...defaultSex } },
    },
    reducers: {
        toggleStagedSex: (state, action) => {
            const value = action.payload
            state.staged.sex[value] = !state.staged.sex[value]
        },
        applyFilters: (state) => {
            state.applied = { ...state.staged }
        },
        resetFilters: (state) => {
            state.staged.sex = { ...defaultSex }
            state.applied.sex = { ...defaultSex }
        },
    },
})

export const { toggleStagedSex, applyFilters, resetFilters } = filterSlice.actions

export default filterSlice.reducer
