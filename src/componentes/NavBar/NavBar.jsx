import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <header>
        <h1>
          <NavLink to="/">SEGUNDA ENTREGA</NavLink>
        </h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/categorias/cuerdas">Guitarras y bajos</NavLink>
            </li>
            <li>
              <NavLink to="/categorias/teclas">Instrumentos de teclas</NavLink>
            </li>
            <li>
              <NavLink to="/categorias/percusion">Bateria y persecucion</NavLink>
            </li>
            <li>
              <NavLink to="/categorias/viento">Vientos</NavLink>
            </li>
          </ul>
        </nav>
        <CartWidget/>
    </header>
  )
}

export default NavBar