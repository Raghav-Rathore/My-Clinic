import { Link } from "react-router-dom"

export default function Home() {
    return <>
        <section id="hero" className="d-flex align-items-center mt-5">
            <div className="container">

                <h2>Register Here for Managing Your PaperWork in easy Way...</h2>

                <Link to="Register" className="btn-get-started scrollto">Get Started</Link>
            </div>
        </section>

        <section id="why-us" className="why-us">
            <div className="container">

                <div className="row">
                    <div className="col-lg-4 d-flex align-items-stretch">
                        <div className="content">
                            <h3>Why Choose Medipure?</h3>
                            <p>At Medipure, we believe in providing exceptional care with a personal touch. Our team of highly skilled professionals is dedicated to your well-being, offering the latest advancements in medicine alongside genuine compassion. Choose us for a tailored approach to healthcare that prioritizes both your physical and emotional needs.
                            </p>
                            <div className="text-center">
                                <Link to="#" className="more-btn">Learn More <i className="bx bx-chevron-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 d-flex align-items-stretch ">
                        <div className="icon-boxes d-flex flex-column justify-content-center">
                            <div className="row">
                                <div className="col-xl-4 d-flex align-items-stretch">
                                    <div className="icon-box mt-4 mt-xl-0">
                                        <i className="bx bx-receipt"></i>
                                        <h4>Medipure</h4>
<p>Where advanced medicine meets optimal health outcomes</p>
                                    </div>
                                </div>
                                <div className="col-xl-4 d-flex align-items-stretch">
                                    <div className="icon-box mt-4 mt-xl-0">
                                        <i className="bx bx-cube-alt"></i>
                                        <h4>Our Track Record</h4>
<p>Proven Success, Year After Year: Our consistent track record speaks for itself. We're a reliable partner for achieving your goals.</p>                                    </div>
                                </div>
                                <div className="col-xl-4 d-flex align-items-stretch">
                                    <div className="icon-box mt-4 mt-xl-0">
                                        <i className="bx bx-images"></i>
                                        <h4>We Have Best Doctors</h4>
                                        <p> Our highly skilled doctors are the best in their fields.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </>
}