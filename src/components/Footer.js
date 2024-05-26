import { Link } from "react-router-dom"

export default function Footer() {
    return <>
        <footer id="footer">



            <div className="container d-md-flex py-4">

                {/* <div className="me-md-auto text-center text-md-start">
                    <div className="copyright">
                        &copy; Copyright <strong><span>Medilab</span></strong>. All Rights Reserved
                    </div>
                    <div className="credits">

                        Designed by <Link to="https://bootstrapmade.com/">BootstrapMade</Link>
                    </div>
                </div> */}
                <div className="social-links text-center text-md-right pt-3 pt-md-0">
                    <Link to="#" className="twitter"><i className="bx bxl-twitter"></i></Link>
                    <Link to="#" className="facebook"><i className="bx bxl-facebook"></i></Link>
                    <Link to="#" className="instagram"><i className="bx bxl-instagram"></i></Link>
                    <Link to="#" className="google-plus"><i className="bx bxl-skype"></i></Link>
                    <Link to="#" className="linkedin"><i className="bx bxl-linkedin"></i></Link>
                </div>
            </div>
        </footer>
    </>
}