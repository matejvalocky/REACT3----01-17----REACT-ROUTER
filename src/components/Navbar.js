import { NavLink } from "react-router-dom"
import "./NavBar.css"

const Navbar = () => {
  return <header>
    <nav>
      <NavLink to="/">Domov</NavLink> <br />
      <NavLink to="/movies">Filmy</NavLink> <br />
      <NavLink to="/serials">Seriály</NavLink> <br />
    </nav>
  </header>
}

export default Navbar






