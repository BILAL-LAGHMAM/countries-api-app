import { useEffect, useState } from "react";
export default function NavSearch(props) {
    const [values, setValues] = useState([])
    const toCountries = (e) => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }
    useEffect(() => {
        props.getRegion(values)
    }, [values, props.getRegion])
    return <div className="NavSearch">
        <article className={props.modeIs ? "bg-Dark-countrie text-Dark" : ""}>
            <i className="fa-solid fa-magnifying-glass"></i><input className={props.modeIs ? "bg-Dark-countrie text-Dark" : ""} name="inputVal" onChange={toCountries} type="text" placeholder="Search for a Country..." />
        </article>
        <article>
            <select className={props.modeIs ? "bg-Dark-countrie text-Dark" : ""} onChange={toCountries} name="selectVal">
                <option value="">Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </article>
    </div >
}