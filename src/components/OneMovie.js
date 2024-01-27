import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import movies from "../data"
import "./OneMovie.css"

const OneMovie = () => {
    console.log(useParams())

    const { movieId } = useParams()

    const oneSpecificMovie = movies.find((oneMovie) => {
        return oneMovie.id === parseInt(movieId)
    })

    const { image, title, description, tags } = oneSpecificMovie


    return <section className="one-movie-more">
        <h2>{title}</h2>
        <img src={image} alt="" />
        <p>{description}</p>
        <p>{tags}</p>
        <Link to="/movies" >Späť na všetky filmy</Link>
    </section>
}

export default OneMovie