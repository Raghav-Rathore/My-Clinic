import { Link } from "react-router-dom"
import { useRef, useState } from "react"
import ApiService, { Apiurls } from "../services/ApiService"
import { useDispatch, } from "react-redux"
import { AuthReducer } from "../reduxstore/AuthSlice"
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const [msg, setMsg] = useState("")
    const [loading, setLoading] = useState(false)
    const emailBox = useRef()
    const passBox = useRef()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const ulogin = async (event) => {
        event.preventDefault()
        var ob = {
            email: emailBox.current.value,
            password: passBox.current.value
        }

        try {
            setLoading(true)
            const response = await ApiService.PostAPiCall(Apiurls.LOGIN, ob)
            console.log(response)
            if (response.status) {
                setMsg(response.data.msg)
                const d = dispatch(AuthReducer({ token: response.data.data.token, name: response.data.data.user.name, type: response.data.data.userType, isLogin: true, id: response.data.data.user.id }))
                console.log(d)
                navigate("/")
            }
            else {
                setMsg(response.data.msg)
            }

        } catch (error) {
            setMsg("Network Error !")
        }
        finally {
            setLoading(false)
        }

    }
    return <>
        <section id="appointment" className="appointment section-bg " style={{ marginTop: "80px" }}>
            <div className="container" style={{ width: "50%" }}>
                <h6 className="text-center alert alert-success">Login Form</h6>
                <p>{msg}</p>
                <form className="php-email-form" onSubmit={ulogin}>
                    <div className="row mt-3">
                        <div className="col-12 form-group mt-3 mt-md-0">
                            <input ref={emailBox} type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-md-12 form-group mt-3 mt-md-0">
                            <input ref={passBox} type="password" className="form-control" name="password" id="pass" placeholder="Enter Your Password" required />
                        </div>
                    </div>
                    <div className="text-center"><button className="btn btn-primary btn-sm">{loading ? "login..." : " Login"}</button></div>
                </form>
            </div>
        </section>
    </>
}