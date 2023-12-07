import { Link } from "react-router-dom";

export default function Countrie(props) {
    return <div className="countrie">
        <article>
            <Link to={`SingleCountrie/${props.numericCode}`}><img src={props.flags} alt={props.flags} /></Link>
        </article>
        <article>
            <h3>{props.name}</h3>
            <p>
                <span><b>Population:</b> {props.population}</span>
                <span><b>Region:</b> {props.region}</span>
                <span><b>Capital:</b> {props.capital}</span>
            </p>
        </article>
    </div>
}