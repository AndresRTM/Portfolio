import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Portfolio">Portfolio</Link></li>
                    <li><Link to="/CV">CV</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}