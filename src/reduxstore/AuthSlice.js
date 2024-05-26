import { createSlice } from '@reduxjs/toolkit'

const savedData = JSON.parse(localStorage.getItem("loginInfo"))

const initialState = {
    value: savedData || { token: undefined, name: undefined, type: undefined, isLogin: false, id: undefined }
}

const slice = createSlice({
    name: "user",
    initialState,
    reducers: {
        AuthReducer: (state, action) => {
            state.value = action.payload
            const st = localStorage.setItem("loginInfo", JSON.stringify(action.payload))
        }

    }
})
export const { AuthReducer } = slice.actions
export default slice.reducer
