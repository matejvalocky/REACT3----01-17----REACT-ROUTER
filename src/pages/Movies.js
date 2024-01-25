import { Link } from "react-router-dom"

const Movies = () => {
    return <section>
        <ul>
            <li><Link to="/">Domovská stránka</Link></li>
            <li>Filmy</li>
            <li><Link to="/serials">Seriály</Link></li>
        </ul>
    </section>
}

export default Movies