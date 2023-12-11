import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { data } from "../data"

export default function SingleCountrie(props) {
    const { id } = useParams()
    const [dataValues, setDataValues] = useState([])
    useEffect(() => {
        const getCountrie = data.filter(value => value.numericCode === id)
        setDataValues(getCountrie)
    }, [])
    return <section className="sectionSingle">
        <div>
            <Link to="/"><button className={props.modeIs ? "bg-Dark-button text-Dark" : ""}><i className="fa-solid fa-arrow-left"></i>Back</button></Link>
        </div>
        <div className="single">
            {

                dataValues.map((value) => {
                    return <>
                        <article>
                            {value.flags.png ? <img src={value.flags.png} alt="" /> : ""}
                        </article>
                        <article>
                            {value.name ? <h1 className={props.modeIs ? "text-Dark" : ""}>{value.name}</h1> : ""}
                            <article className="content">
                                <p className={props.modeIs ? "text-Dark" : ""}>
                                    {value.nativeName ? <span><b>Native Name:</b> {value.nativeName}</span> : ""}
                                    {value.population ? <span><b>Population:</b> {value.population}</span> : ""}
                                    {value.region ? <span><b>Region:</b> {value.region}</span> : ""}
                                    {value.subregion ? <span><b>Sub Region:</b> {value.subregion}</span> : ""}
                                    {value.capital ? <span><b>Capital:</b> {value.capital}</span> : ""}
                                </p>
                                <p className={props.modeIs ? "text-Dark" : ""}>
                                    {value.topLevelDomain ? <span><b>Top Level Domain:</b> {value.topLevelDomain}</span> : ""}
                                    {value.currencies ? <span><b>Currentcies:</b> {value.currencies[0].name}</span> : ""}
                                    {value.languages ? <span><b>Languages:</b> {`${value.languages.map(val => val.name)}.`}</span> : ""}
                                </p>
                            </article>
                            <article>
                                {
                                    value.borders ?
                                        <p className={props.modeIs ? "text-Dark" : ""}>
                                            <b>Border Countries: </b>
                                            {value.borders.map(val => <button className={props.modeIs ? "bg-Dark-button text-Dark" : ""}>{val}</button>)}
                                        </p>
                                        : ""
                                }
                            </article>
                        </article>
                    </>
                })

            }
        </div>
    </section>
}