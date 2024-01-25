import { Link } from "react-router-dom"

const Home = () => {
    return <section>
        <ul>
            <li>Domovská stránka</li>
            <li><Link to="/movies">Filmy</Link></li>
            <li><Link to="/serials">Seriály</Link></li>
        </ul>
    </section>
}

export default Home