import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Nav(props) {
    const [modeValue, setModeValue] = useState(false);
    const ChangeDark = () => {
        !modeValue ? setModeValue(true) : setModeValue(false)
    }
    useEffect(() => {
        props.mode(modeValue)
    }, [modeValue, props.mode])
    return <nav className="navBar" style={{ backgroundColor: modeValue ? "hsl(209, 23%, 22%)" : '' }}>
        <Link to={'/'}><h1 style={{ color: modeValue ? "hsl(0, 0%, 100%)" : '' }}>Where in the World?</h1></Link>
        <button onClick={ChangeDark} className={modeValue ? "btnDark btnMode" : "btnMode"}><i className="fa-solid fa-moon"></i>Dark Mode</button>
    </nav>
}