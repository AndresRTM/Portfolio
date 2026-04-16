import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <footer>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/CV">CV</Link></li>
                <li><Link to="/Portfolio">Portfolio</Link></li>
            </ul>
            <ul>
                <li><Link to="/Contact">Contact</Link></li>
                <li className="social-icons">
                    <a href="tel:00809808080"><i className="fa-solid fa-phone"></i></a>
                    <a href="mailto:andresdev@duck.com"><i className="fa-solid fa-envelope"></i></a>
                    <a href="https://www.linkedin.com/in/example"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="https://github.com/example"><i className="fa-brands fa-github"></i></a>
                    <a href="https://gitlab.com/example"><i className="fa-brands fa-gitlab"></i></a>
                </li>
            </ul>
            <div>
                <p className="DesignedBy"><em>Designed & developed by Andrés Llano Duran</em></p>
                <p> &copy;2026 All rights reserved</p>
                
            </div>
        </footer>
    )
}   