import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./AuthSlice";
import ReceptionSlice from './ReceptionSlice';
import PatientSlice from "./PatientSlice";

const store = configureStore({
    reducer: {
        loginUser: userReducer,
        recepInfo: ReceptionSlice,
        patientInfo: PatientSlice,
    }
})
export default store