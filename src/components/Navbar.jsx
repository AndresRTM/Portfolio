import { NavLink } from "react-router-dom"

export default function Navbar() {
    return (
        <header>
            <nav>
                <ul>
                    <li><NavLink to="/" end>Home</NavLink></li>
                    <li><NavLink to="/About">About</NavLink></li>
                    <li><NavLink to="/Portfolio">Portfolio</NavLink></li>
                    <li><NavLink to="/CV">CV</NavLink></li>
                    <li><NavLink to="/Contact">Contact</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}