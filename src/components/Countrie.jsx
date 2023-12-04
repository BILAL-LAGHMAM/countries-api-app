import { Link } from "react-router-dom";

export default function Countrie() {
    return <div className="countrie">
        <article>
            <Link path=""><img src="https://flagcdn.com/w320/de.png" alt="" /></Link>
        </article>
        <article>
            <h3>Germany</h3>
            <p>
                <span><b>Population:</b> 333</span>
                <span><b>Region:</b> Europ</span>
                <span><b>Capital:</b> Berlin</span>
            </p>
        </article>
    </div>
}