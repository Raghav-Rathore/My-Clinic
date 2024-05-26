import { useRef, useState } from "react"
import ApiService, { Apiurls } from "../../services/ApiService"
import { useSelector, useDispatch } from 'react-redux'
import { newRecpReducer } from "../../reduxstore/ReceptionSlice"
export default function NewReception() {
    const user = useSelector(state => state.loginUser.value)
    console.log("token", user.token)
    const [msg, setMsg] = useState("")
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const nameBox = useRef()
    const emailBox = useRef()
    const phoneBox = useRef()
    const passBox = useRef()
    const addressBox = useRef()

    const save = async (event) => {
        event.preventDefault()
        const ob = {
            name: nameBox.current.value,
            email: emailBox.current.value,
            phoneNumber: phoneBox.current.value,
            password: passBox.current.value,
            raddress: addressBox.current.value
        }
        try {
            setLoading(true)
            const response = await ApiService.PostCall(Apiurls.RECEPTION_SAVE, ob, user.token)
            console.log("response recep save", response)
            if (response.status) {
                setMsg(response.data.msg)
                dispatch(newRecpReducer([response.data]))
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
                    <h2>Add New Reception..!</h2>
                    <p>{msg}</p>
                </div>

                <form onSubmit={save} className="php-email-form">
                    <div className="row">
                        <div className="col-md-4 form-group mt-md-0">
                            <label>Name</label>
                            <input ref={nameBox} type="text" name="name" className="form-control" id="name" placeholder="Your Name" />
                        </div>
                        <div className="col-md-4 form-group mt-md-0">
                            <label>Clinic Address</label>
                            <input ref={addressBox} type="text" name="raddress" className="form-control" id="raddress" placeholder="Reception Address" />
                        </div>
                        <div className="col-md-4 form-group mt-3 mt-md-0">
                            <label>Email</label>
                            <input ref={emailBox} type="email" className="form-control" name="email" id="email" placeholder="Your Email" />
                        </div>


                    </div>

                    <div className="row">
                        <div className="col-md-6 form-group mt-md-0">
                            <label>Phone</label>
                            <input ref={phoneBox} type="number" className="form-control" name="phone" id="phone" placeholder="Your Phone" />
                        </div>
                        <div className="col-md-6 form-group mt-3 mt-md-0">
                            <label>Password</label>
                            <input ref={passBox} type="password" className="form-control" name="password" id="pass" placeholder="Enter Your Password" />
                        </div>
                    </div>
                    <div className="text-center"><button type="submit">{loading ? "Saving..." : "Save"}</button></div>
                </form>

            </div>
        </section>
    </>
}