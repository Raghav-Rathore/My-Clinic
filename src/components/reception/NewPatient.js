import { useRef, useState } from "react"
import ApiService, { Apiurls } from "../../services/ApiService"
import { useSelector, useDispatch } from 'react-redux'
import { newPatientReducer } from "../../reduxstore/PatientSlice"

export default function NewPatient() {

    const user = useSelector(state => state.loginUser.value)
    console.log("token", user.token)
    const [msg, setMsg] = useState("")
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const nameBox = useRef()
    const ageBox = useRef()
    const genBox = useRef()
    const dateBox = useRef()
    const daignosisbox = useRef()
    const phoneBox = useRef()
    const timeBox = useRef()
    const save = async (event) => {
        event.preventDefault()
        const ob = {
            name: nameBox.current.value,
            age: ageBox.current.value,
            gender: genBox.current.value,
            phoneNumber: phoneBox.current.value,
            appointmentdate: dateBox.current.value,
            time: timeBox.current.value,
            diagnosis: daignosisbox.current.value
        }
        try {
            setLoading(true)
            const response = await ApiService.PostCall(Apiurls.PATIENTS_SAVE, ob, user.token)
            console.log("response Patient save Successfully", response)
            if (response.status) {
                setMsg(response.data.msg)
                dispatch(newPatientReducer([response.data]))
            } else {
                setMsg(response.data.msg)
            }
        } catch (error) {
            setMsg("Network error !")
        } finally {
            setLoading(false)
        }
    }
    return <>
        <section id="appointment" className="appointment section-bg " style={{ marginTop: "80px" }}>
            <div className="container">

                <div className="section-title">
       <h2>Add New Patient</h2> 
                    <p>{msg}</p>
                </div>

                <form onSubmit={save} className="php-email-form">
                    <div className="row">
                        <div className="col-md-4 form-group mt-md-0">
                            <label>Name</label>
                            <input ref={nameBox} type="text" name="name" className="form-control" id="name" placeholder="Your Name" />
                        </div>
                        <div className="col-md-4 form-group mt-md-0">
                            <label>Gender</label>
                            <select name="genbox" id="genbox" ref={genBox} className="form-control">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <div className="col-md-4 form-group mt-3 mt-md-0">
                            <label>Age</label>
                            <input ref={ageBox} type="number" name="age" className="form-control" id="age" placeholder="Age" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 form-group mt-md-0">
                            <label>Phone</label>
                            <input ref={phoneBox} type="number" className="form-control" name="phone" id="phone" placeholder="Your Phone" />
                        </div>
                        <div className="col-md-6 form-group mt-3 mt-md-0">
                            <label>Appointement Date</label>
                            <input ref={dateBox} type="date" className="form-control" name="date" id="date" placeholder="Enter Your Password" />
                        </div>
                        <div className="col-md-6 form-group mt-3 mt-md-0">
                            <label>Daignosis</label>
                            <input ref={daignosisbox} type="text" className="form-control" name="daignosis" id="daignosis" placeholder="Enter Your Daignosis" />
                        </div>
                        <div className="col-md-6 form-group mt-3 mt-md-0">
                            <label>Time</label>
                            <input ref={timeBox} type="time" className="form-control" name="time" id="time" placeholder="Enter Your Password" />
                        </div>
                    </div>
                    <div className="text-center"><button type="submit">{loading ? "Saving..." : "Save"}</button></div>
                </form>

            </div>
        </section>
    </>
}