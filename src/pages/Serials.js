import { Link } from "react-router-dom"

const Serials = () => {
    return <section>
        <ul>
            <li><Link to="/">Domovská stránka</Link></li>
            <li><Link to="/movies">Filmy</Link></li>
            <li>Seriály</li>
        </ul>
    </section>
}

export default Serials