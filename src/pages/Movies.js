import movies from "../data"
import { Link } from "react-router-dom"

const Movies = () => {
    return <section>
        <h1>Filmy</h1>
        <div>
            {movies.map( (oneMovie) => {
                return <article key={oneMovie.id}>
                    <h2>{oneMovie.title}</h2>
                    <img src={oneMovie.image} alt="" /> <br />
                    <Link to={`/all-movies/${oneMovie.id}`}>Viac info</Link>
                </article>
            } )}
        </div>
    </section>
}

export default Movies