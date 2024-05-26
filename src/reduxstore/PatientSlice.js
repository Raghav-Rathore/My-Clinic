import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: "patient",
    initialState: {
        value: [],
        upData: undefined
    },
    reducers: {
        newPatientReducer: (state, action) => {
            state.value = action.payload
        },
        listPatientReducer: (state, action) => {
            state.value = action.payload
        },
        PatientStatusReducer: (state, action) => {
            state.value = action.payload
        },
        patientDeleteReducer: (state, action) => {
            state.value = action.payload
        },
        updatePatientReducer: (state, action) => {
            state.upData = action.payload
        }

    }
})
export const { PatientStatusReducer, newPatientReducer, listPatientReducer, updatePatientReducer, patientDeleteReducer } = slice.actions
export default slice.reducer
