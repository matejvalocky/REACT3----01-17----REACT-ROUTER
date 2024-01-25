import { Link } from "react-router-dom"

const Error = () => {
  return <div>
    <h2>Chyba 404</h2>
    <p>stránka nenájdená</p>
    <h3><Link to="/">Odkaz na hlavnú stránku</Link></h3>
  </div>
}

export default Error