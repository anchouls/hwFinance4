import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    sex: { male: false, female: false },
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setSexFilter: (state, action) => {
            const { key, value } = action.payload;
            state.sex[key] = value;
        },
        resetFilters: () => initialState,
    },
})

export const { setSexFilter, resetFilters } = filterSlice.actions

export default filterSlice.reducer
