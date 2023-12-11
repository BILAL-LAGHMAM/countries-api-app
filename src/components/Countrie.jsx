import { Link } from "react-router-dom";

export default function Countrie(props) {
    return <div className={props.modeIs ? "bg-Dark-countrie countrie" : "countrie"}>
        <article>
            <Link to={`SingleCountrie/${props.numericCode}`}><img src={props.flags} alt={props.flags} /></Link>
        </article>
        <article>
            <h3 className={props.modeIs ? "text-Dark" : ''}>{props.name}</h3>
            <p className={props.modeIs ? "text-Dark" : ''}>
                <span><b>Population:</b> {props.population}</span>
                <span><b>Region:</b> {props.region}</span>
                <span><b>Capital:</b> {props.capital}</span>
            </p>
        </article>
    </div>
}