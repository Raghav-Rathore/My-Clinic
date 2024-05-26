import ApiService, { Apiurls } from "../../services/ApiService"
import { useSelector, useDispatch } from 'react-redux'
import { PatientStatusReducer, listPatientReducer } from "../../reduxstore/PatientSlice"
import { useEffect, useState } from "react"
import { listRecpReducer } from "../../reduxstore/ReceptionSlice"

export default function Appointments() {
    const user = useSelector(state => state.loginUser.value)
    const patientList = useSelector(state => state.patientInfo.value)
    const patient = patientList.filter(ob => ob.doctor_name == user.id)
    const dispatch = useDispatch()
    const [msg, setMsg] = useState("")
    const list = async () => {
        try {
            const response = await ApiService.GetApiCall(Apiurls.APPOINTMENTS_DOC, user.token)
            console.log(response)
            if (response.data.status) {
                dispatch(listPatientReducer(response.data.data))
            } else {
                setMsg(response.data.msg)
            }
        }
        catch (error) {
            setMsg("Network ERROR..!")
        }
    }
    const deactive = async (id) => {
        try {
            const URL = Apiurls.APPOINTMENTS_DONE + id
            const response = await ApiService.PutApiCall(URL, null, user.token)
            if (response.data.status) {
                setMsg(response.data.msg)
                var list = patientList.filter(ob => ob.id != response.data.id)
                dispatch(PatientStatusReducer)
            }
            else {
                setMsg(response.data.msg)
            }
        }
        catch {
            setMsg("Network Error.....")
        }
    }
    const active = async (id) => {
        try {
            const URL = Apiurls.APPOINTMENTS_UNDO + id
            const response = await ApiService.PutApiCall(URL, null, user.token)
            if (response.data.status) {
                setMsg(response.data.msg)
                var list = patientList.filter(ob => ob.id != response.data.id)
                dispatch(PatientStatusReducer)
            }
            else {
                setMsg(response.data.msg)
            }
        }
        catch {
            setMsg("Network Error.....")
        }
    }
    useEffect(() => {
        list()
    }, [list])
    return <>
        <section id="appointment" className="appointment section-bg " style={{ marginTop: "80px" }}>
            <div className="container">
                <div className="section-title">
                    <h2>Appointements</h2>
                    <p>{msg}</p>
                </div>
                <table className=" table table-responsive table-hover">
                    <thead className="text-center">
                        <th>S.no</th>
                        <th>Patient Name</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>diagnosis</th>
                        <th>Date</th>
                        <th>Phone</th>
                        <th>Added By Reception</th>
                        <th>Clinic Address</th>
                        <th>Status</th>
                    </thead>

                    <tbody className="text-center">
                        {patient.map((ob, index) => <tr><td>{index + 1}</td>
                            <td>{ob.name}</td>
                            <td>{ob.gender}</td>
                            <td>{ob.age}</td>
                            <td>{ob.daignosis}</td>
                            <td>{ob.appointmentdate}</td>
                            <td>{ob.phoneNumber}</td>
                            <td>{ob.address?.name}</td>
                            <td>{ob.address?.raddress}</td>
                            <td>{ob.activeStatus ? <button className="btn btn-warning" onClick={() => deactive(ob.id)}>Deactive</button> : <button
                                className="btn btn-info" onClick={() => active(ob.id)}>Active</button>}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </section>
    </>
}