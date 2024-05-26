import { useRef, useState } from "react"
import ApiService, { Apiurls } from "../../services/ApiService"
import { useSelector, useDispatch } from 'react-redux'
import { newRecpReducer } from "../../reduxstore/ReceptionSlice"
export default function UpdateReception() {
    const user = useSelector(state => state.loginUser.value)
    const recpData = useSelector(state => state.recepInfo.upData)
    console.log("recpData", recpData)
    const [msg, setMsg] = useState("")
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const nameBox = useRef()
    const phoneBox = useRef()
    const oldpassBox = useRef()
    const newpassBox = useRef()

    const save = async (event) => {
        event.preventDefault()
        const ob = {
            name: nameBox.current.value,
            phoneNumber: phoneBox.current.value,
            oldPassword: oldpassBox.current.value,
            password: newpassBox.current.value
        }
        try {
            setLoading(true)
            const URL = Apiurls.RECEPTION_UPDATE + recpData.id
            const response = await ApiService.PutApiCall(URL, ob, user.token)
            console.log("response recep update", response)
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
                    <h2>Updating Record of MR  {recpData.name}</h2>
                    <p>{msg}</p>
                </div>

                <form onSubmit={save} className="php-email-form">
                    <div className="row">
                        <div className="col-md-6 form-group mt-md-0">
                            <label>Name</label>
                            <input ref={nameBox} defaultValue={recpData?.name} type="text" name="name" className="form-control" id="name" placeholder="Your Name" />
                        </div>

                        <div className="col-md-6 form-group mt-md-0">
                            <label>Phone</label>
                            <input ref={phoneBox} defaultValue={recpData?.phoneNumber} type="number" className="form-control" name="phone" id="phone" placeholder="Your Phone" />
                        </div>

                    </div>

                    <div className="row">

                        <div className="col-md-6 form-group mt-3 mt-md-0">
                            <label>Old Password</label>
                            <input ref={oldpassBox} type="password" className="form-control" name="Old Password" id="pass" placeholder="Enter Your Password" />
                        </div>
                        <div className="col-md-6 form-group mt-3 mt-md-0">
                            <label>New Password</label>
                            <input ref={newpassBox} type="password" className="form-control" name="New Password" id="pass" placeholder="Enter Your Password" />
                        </div>
                    </div>
                    <div className="text-center"><button type="submit">{loading ? "Updating..." : "Update"}</button></div>
                </form>

            </div>
        </section>
    </>
}