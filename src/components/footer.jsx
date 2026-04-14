import { Link } from "react-router-dom"

export default function Footer() {
    return (

         <footer>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="#about">About</Link></li>
                <li><Link to="#cv">CV</Link></li>
                <li><Link to="#portfolio">Portfolio</Link></li>

            </ul>
            <ul>
                <li><Link to="#contact">Contact</Link></li>
                <li class="social-icons">
                    <Link to="tel:00809808080"><i class="fa-solid fa-phone"></i></Link>
                    <Link to="mailto:andresdev@duck.com"><i class="fa-solid fa-envelope"></i></Link>
                    <Link to="https://www.linkedin.com/in/example"><i class="fa-brands fa-linkedin"></i></Link>
                    <Link to="https://github.com/example"><i class="fa-brands fa-github"></i></Link>
                    <Link to="https://gitlab.com/example"><i class="fa-brands fa-gitlab"></i></Link>
                </li>
            </ul>
            <div>
                <p className="DesignedBy"><em>Designed & developed by Andrés Llano Duran</em></p>
                <p> &copy;2026 All rights reserved</p>
            </div>
            </footer>

    )   
}   