import { Link } from "react-router-dom"

const Error = () => {
  return <div>
    <h2>Chyba 404</h2>
    <p>stránka nenájdená</p>
    <p><Link to="/">Úvodná strana</Link></p>
  </div>
}

export default Error