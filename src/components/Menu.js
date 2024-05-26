import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { AuthReducer } from "../reduxstore/AuthSlice";

export default function Menu() {

    const user = useSelector(state => state.loginUser.value)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem("loginInfo")
        dispatch(AuthReducer({ token: undefined, name: undefined, type: undefined, isLogin: false }))
        navigate("/")
    }

    return <>
        <header id="header" className="fixed-top">
            <div className="container d-flex align-items-center">
                <h1 className="logo me-auto"><Link to="/">Clinic Application</Link></h1>
                <nav id="navbar" className="navbar order-last order-lg-0">
                    <ul>
                        {user.isLogin ? <>
                            {user.type == "doctor" ? <>
                                <li><Link className="nav-link scrollto active" to="/">Home</Link></li>
                                <li><Link className="nav-link scrollto active" to="/newReception">New Reception</Link></li>
                                <li><Link className="nav-link scrollto active" to="/allReceptions">All Receptions</Link></li>
                                <li><Link className="nav-link scrollto active" to="/appointments">Appointments</Link></li>
                            </> : <></>}

                            {user.type == "reception" ? <>
                                <li><Link className="nav-link scrollto active" to="/">Home</Link></li>
                                <li><Link className="nav-link scrollto active" to="/newPatient">New Patient</Link></li>
                                <li><Link className="nav-link scrollto active" to="/allPatients">All Patients</Link></li>
                            </> : <></>}

                        </>


                            : <><li><Link className="nav-link scrollto active" to="/">Home</Link></li>
                                <li><Link className="nav-link scrollto" to="/about">About</Link></li>
                                <li><Link className="nav-link scrollto" to="/contact">Contact</Link></li></>
                        }

                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>
                {user.isLogin ? <>

                    <button onClick={logout} className="appointment-btn scrollto"><span className="d-none d-md-inline">Logout</span></button>
                </> : <>
                    <Link to="/register" className="appointment-btn scrollto"><span className="d-none d-md-inline">Register</span></Link>
                    <Link to="/login" className="appointment-btn scrollto"><span className="d-none d-md-inline">Login</span></Link>
                </>}

            </div>
        </header></>
}