import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { data } from "../data"

export default function SingleCountrie() {
    const { id } = useParams()
    const [dataValues, setDataValues] = useState([])
    useEffect(() => {
        const getCountrie = data.filter(value => value.numericCode === id)
        setDataValues(getCountrie)
    }, [])
    console.log(dataValues);
    return <section className="sectionSingle">
        <div>
            <Link to="/"><button><i className="fa-solid fa-arrow-left"></i>Back</button></Link>
        </div>
        <div className="single">
            {

                dataValues.map((value) => {
                    return <>
                        <article>
                            {value.flags.png ? <img src={value.flags.png} alt="" /> : ""}
                        </article>
                        <article>
                            {value.name ? <h1>{value.name}</h1> : ""}
                            <article className="content">
                                <p>
                                    {value.nativeName ? <span>Native Name: {value.nativeName}</span> : ""}
                                    {value.population ? <span>Population: {value.population}</span> : ""}
                                    {value.region ? <span>Region: {value.region}</span> : ""}
                                    {value.subregion ? <span>Sub Region: {value.subregion}</span> : ""}
                                    {value.capital ? <span>Capital: {value.capital}</span> : ""}
                                </p>
                                <p>
                                    {value.topLevelDomain ? <span>Top Level Domain: {value.topLevelDomain}</span> : ""}
                                    {value.currencies ? <span>Currentcies: {value.currencies[0].name}</span> : ""}
                                    {value.languages ? <span>Languages: {`${value.languages.map(val => val.name)}.`}</span> : ""}
                                </p>
                            </article>
                            <article>
                                {
                                    value.borders ?
                                        <p>
                                            <b>Border Countries: </b>
                                            {value.borders.map(val => <button>{val})</button>)}
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