import { Link, Outlet } from "react-router-dom"

const Home = () => {
    return <section>
        <ul>
            <li>Domovská stránkaaaa</li>
            <Outlet />
        </ul>
    </section>
}

export default Home