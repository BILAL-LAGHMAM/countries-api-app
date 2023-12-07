import { useState } from "react";
import { data } from "../data";
import Countrie from "./Countrie";
import NavSearch from "./NavSearch";

export default function Countries() {
    const [regionFilter, setRegionFilter] = useState("")
    const [searchCountries, setSearchCountries] = useState("")
    const regionSelected = (regionData) => {
        if (regionData.inputVal) {
            setSearchCountries(regionData.inputVal)
        } else {
            setSearchCountries("")
        }
        setRegionFilter(regionData.selectVal)
    }
    const searchBySelect = data.filter(value => value.region === regionFilter || !regionFilter)
    const searchByValue = searchBySelect.filter((value) => value.name.toLowerCase().includes(searchCountries.toLowerCase()))
    return <>
        <NavSearch getRegion={regionSelected} />
        <section className="countries">
            {
                searchByValue.length > 0 ?
                    searchByValue.map((value) => {
                        return <Countrie numericCode={value.numericCode} flags={value.flags.png} name={value.name} population={value.population} region={value.region} capital={value.capital} />
                    })
                    : <h1>There is no country named '{searchCountries}'</h1>
            }

        </section>
    </>
}