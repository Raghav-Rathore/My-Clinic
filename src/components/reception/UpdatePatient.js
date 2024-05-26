import { useRef, useState } from "react"
import ApiService, { Apiurls } from "../../services/ApiService"
import { useSelector, useDispatch } from 'react-redux'

export default function UpdatePatient() {
    const user = useSelector(state => state.loginUser.value)
    const patientData = useSelector(state => state.patientInfo.upData)
    console.log("patientData", patientData)
    const [msg, setMsg] = useState("")
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const nameBox = useRef()
    const phoneBox = useRef()
    const dateBox = useRef()
    const save = async (event) => {
        event.preventDefault()
        const ob = {
            name: nameBox.current.value,
            phoneNumber: phoneBox.current.value,
            appointmentdate: dateBox.current.value,

        }
        try {
            setLoading(true)
            const URL = Apiurls.PATIENT_UPDATE + patientData.id
            const response = await ApiService.PutApiCall(URL, ob, user.token)
            console.log("response patient update", response)
            if (response.status) {
                setMsg(response.data.msg)
                // dispatch(newRecpReducer([response.data]))
            } else {
                setMsg(response.data.msg)
            }
        } catch (error) {
            setMsg("Network error !")
        }
        finally {
            setLoading(false)
        }
    }
    return <>
        <section id="appointment" className="appointment section-bg " style={{ marginTop: "80px" }}>
            <div className="container">
                <div className="section-title">
                    <h2>Updating Record of MR/MISS {patientData.name}</h2>
                    <p>{msg}</p>
                </div>

                <form onSubmit={save} className="php-email-form">
                    <div className="row">
                        <div className="col-md-6 form-group mt-md-0">
                            <label>Name</label>
                            <input ref={nameBox} defaultValue={patientData?.name} type="text" name="name" className="form-control" id="name" placeholder="Your Name" />
                        </div>
                        <div className="col-md-6 form-group mt-md-0">
                            <label>Date</label>
                            <input ref={dateBox} defaultValue={patientData?.appointmentdate} type="date" className="form-control" name="phone" id="phone" placeholder="Your Phone" />
                        </div>
                        <div className="col-md-6 form-group mt-md-0">
                            <label>Phone</label>
                            <input ref={phoneBox} defaultValue={patientData?.phoneNumber} type="number" className="form-control" name="phone" id="phone" placeholder="Your Phone" />
                        </div>

                    </div>
                    <div className="text-center"><button type="submit">{loading ? "Updating..." : "Update"}</button></div>
                </form>

            </div>
        </section>
    </>
}