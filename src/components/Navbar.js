import { NavLink } from "react-router-dom"
import "./NavBar.css"

const Navbar = () => {
  return <header>
    <nav>
      <NavLink to="/" className={({ isActive }) =>
        isActive ? "activeLink" : "nonActiveLink"
      }>Domov</NavLink> <br />
      <NavLink to="/movies" className={({ isActive }) =>
        isActive ? "activeLink" : "nonActiveLink"
      }>Filmy</NavLink> <br />
      <NavLink to="/serials" className={({ isActive }) =>
        isActive ? "activeLink" : "nonActiveLink"
      }>Seriály</NavLink> <br />
    </nav>
  </header>
}

export default Navbar






