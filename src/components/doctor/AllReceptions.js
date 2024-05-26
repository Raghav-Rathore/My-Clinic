import ApiService, { Apiurls } from "../../services/ApiService"
import { useSelector, useDispatch } from 'react-redux'
import { listRecpReducer, receptionDeleteReducer, updateReceptionReducer } from "../../reduxstore/ReceptionSlice"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function AllReceptions() {
    const user = useSelector(state => state.loginUser.value)
    const recpList = useSelector(state => state.recepInfo.value)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [msg, setMsg] = useState("")
    const [loading, setLoading] = useState(false)
    const list = async () => {
        try {
            setLoading(true)
            const response = await ApiService.GetApiCall(Apiurls.RECEPTION_LIST, user.token)
            console.log(response)
            if (response.data.status) {
                dispatch(listRecpReducer(response.data.data))
            } else {
                setMsg(response.data.msg)
            }
        }
        catch (error) {
            setMsg("Network ERROR..!")
        }
        finally {
            setLoading(false)
        }
    }
    const update = (ob) => {
        console.log(ob)
        dispatch(updateReceptionReducer(ob))
        navigate('/updateReceptionDetails')
    }
    const dele = async (id) => {
        const status = window.confirm("Are You Sure to want to Delete this record ")
        if (status) {
            const URL = Apiurls.RECEPTION_DELETE + id
            const response = await ApiService.DeleApiCall(URL, user.token)
            console.log(response)
            if (response.data.status) {
                setMsg(response.data.msg)
                var alist = recpList.filter(ob => ob.id != response.data.data.id)
                dispatch(receptionDeleteReducer(alist))
                navigate("/")
            } else {
                setMsg(response.data.msg)
            }
        }
        else {
            setMsg("delete errror")
        }
    }

    useEffect(() => {
        list()
    }, [])

    return <>
        <section id="appointment" className="appointment section-bg " style={{ marginTop: "80px" }}>
            <div className="container">

                <div className="section-title">
                    <h2>My Clinics..!</h2>
                    <p>{msg}</p>
                </div>
                <div>{loading ? <div className="section-title"><div class="spinner-border " role="status">
                    <span class="sr-only">Loading...</span>
                </div> </div> :
                    <table className=" table table-responsive table-hover">
                        <thead className="text-center">
                            <th>S.no</th>
                            <th>Clinic Name</th>
                            <th>Receptionist</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Status</th>
                            <th>Action</th>
                        </thead>

                        <tbody className="text-center">
                            {recpList.map((ob, index) => <tr><td>{index + 1}</td>
                                <td>{ob.raddress}</td>
                                <td>{ob.name}</td>
                                <td>{ob.phoneNumber}</td>
                                <td>{ob.email}</td>
                                <td>{ob.password}</td>
                                <td>{ob.activeStatus ? "Active" : "DeActive"}</td>
                                <td><button className="btn btn-sm btn-primary" onClick={() => update(ob)}>Update</button> &nbsp;
                                    <button className="btn btn-sm btn-danger" onClick={() => dele(ob.id)}>Delete</button>
                                </td>
                            </tr>)}
                        </tbody>
                    </table>
                }
                </div>
            </div>
        </section>
    </>
}