import Countrie from "./Countrie";
import NavSearch from "./NavSearch";

export default function Countries() {
    return <>
        <NavSearch />
        <section className="countries">
            <Countrie/>
            <Countrie/>
            <Countrie/>
            <Countrie/>
            <Countrie/>
            <Countrie/>
            <Countrie/>
            <Countrie/>
        </section>
    </>
}