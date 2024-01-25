import { Link } from "react-router-dom"

const Navbar = () => {
  return <nav>
    <Link to="/">Domov</Link> <br />
    <Link to="/movies">Filmy</Link> <br />
    <Link to="/serials">Seriály</Link> <br />
  </nav>
}

export default Navbar