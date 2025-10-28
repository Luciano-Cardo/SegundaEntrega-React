import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"

const NavBar = () => {
  return (
    <header>
        <h1>PRIMER ENTREGA</h1>
        <nav>
            <ul>
                <li>Inicio</li>
                <li>Nosotros</li>
                <li>Productos</li>
                <li>Contacto</li>
            </ul>
        </nav>
        <CartWidget/>
    </header>
  )
}

export default NavBar