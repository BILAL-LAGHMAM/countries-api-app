import { Link } from "react-router-dom";

export default function Nav() {
    return <nav className="navBar">
        <Link to={'/'}><h1>Where in the World?</h1></Link>
        <p><i className="fa-solid fa-moon"></i>Dark Mode</p>
    </nav>
}