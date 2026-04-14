import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="#About.html">About</Link></li>
                    <li><Link to="#CV.html">CV</Link></li>
                    <li><Link to="#Portfolio.html">Portfolio</Link></li>
                    <li><Link to="#Contact.html">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}