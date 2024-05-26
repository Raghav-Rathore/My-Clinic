import { useRef, useState } from "react"
import ApiService, { Apiurls } from "../services/ApiService"

export default function Register() {
    const [msg, setMsg] = useState("")
    const [loading, setLoading] = useState(false)

    const nameBox = useRef()
    const emailBox = useRef()
    const phoneBox = useRef()
    const passBox = useRef()
    const register = async (event) => {
        event.preventDefault()
        var ob = {
            name: nameBox.current.value,
            phoneNumber: phoneBox.current.value,
            email: emailBox.current.value,
            password: passBox.current.value
        }
        console.log(ob)
        try {
            setLoading(true)
            const response = await ApiService.PostAPiCall(Apiurls.REGISTER_API, ob)
            console.log("response", response)
            if (response.status) {
                setMsg(response.data.msg)
            }
        }
        catch (error) {
            console.log("error", error)
            setMsg("Netowrk Error !")
        }
        finally {
            setLoading(false)
        }
    }
    return <>
        <section id="appointment" className="appointment section-bg " style={{ marginTop: "80px" }}>
            <div className="container" style={{ width: "50%" }}>
                <h6 className="text-center alert alert-success">Registeration Form</h6>
                <p>{msg}</p>
                <form className="php-email-form" onSubmit={register} >
                    <div className="row mt-3">
                        <div className="col-12 form-group mt-md-0">
                            <input ref={nameBox} type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-12 form-group mt-3 mt-md-0">
                            <input ref={emailBox} type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-12 form-group mt-md-0">
                            <input ref={phoneBox} type="number" className="form-control" name="phone" id="phone" placeholder="Your Phone" required />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-12 form-group mt-3 mt-md-0">
                            <input ref={passBox} type="password" className="form-control" name="password" id="pass" placeholder="Enter Your Password" required />
                        </div>
                    </div>
                    <div className="text-center"><button type="submit">{loading ? "Saving..." : "Save"}</button></div>
                </form>
            </div>
        </section>
    </>
}