import { Link } from "react-router-dom"

export default function Header() {
    return <>
        <div id="topbar" class="d-flex align-items-center fixed-top">
            <div class="container d-flex justify-content-between">
                <div class="contact-info d-flex align-items-center">
                    <i class="bi bi-envelope"></i> <a href="mailto:contact@example.com">rathoreraghav684@gmail.com</a>
                    <i class="bi bi-phone"></i> +91 7974803324
                </div>
                <div class="d-none d-lg-flex social-links align-items-center">
                    <Link href="#" class="twitter"><i class="bi bi-twitter"></i></Link>
                    <Link href="#" class="facebook"><i class="bi bi-facebook"></i></Link>
                    <Link href="#" class="instagram"><i class="bi bi-instagram"></i></Link>
                    <Link href="#" class="instagram"><i class="bi bi-linkedin"></i></Link>
                </div>
            </div>
        </div>
    </>
}