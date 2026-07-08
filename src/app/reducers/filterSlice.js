import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        sex: {
            male: false,
            female: false,
        },
        applied: {
            sex: {
                male: false,
                female: false,
            },
        },
    },
    reducers: {
        toggleSex: (state, action) => {
            const value = action.payload;
            state.sex[value] = !state.sex[value];
        },
        applyFilters: (state) => {
            state.applied.sex = { ...state.sex };
        },
    },
});

export const { toggleSex, applyFilters } = filterSlice.actions;

export default filterSlice.reducer;
