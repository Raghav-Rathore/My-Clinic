import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: "recp",
    initialState: {
        value: [],
        upData: undefined
    },
    reducers: {
        newRecpReducer: (state, action) => {
            state.value = action.payload
        },
        listRecpReducer: (state, action) => {
            state.value = action.payload
        },
        receptionDeleteReducer: (state, action) => {
            state.value = action.payload
        },
        updateReceptionReducer: (state, action) => {
            state.upData = action.payload
        }

    }
})
export const { newRecpReducer, listRecpReducer, receptionDeleteReducer, updateReceptionReducer } = slice.actions
export default slice.reducer
