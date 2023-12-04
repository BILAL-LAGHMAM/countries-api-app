export default function NavSearch() {
    return <div className="NavSearch">
        <article>
            <i className="fa-solid fa-magnifying-glass"></i><input type="text" placeholder="Search for a Country..." />
        </article>
        <article>
            <select name="" id="">
                <option value="">Filter by Region</option>
                <option value="">Asia</option>
                <option value="">Europ</option>
                <option value="">America</option>
            </select>
        </article>
    </div>
}