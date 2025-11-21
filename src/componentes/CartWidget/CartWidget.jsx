import { Link } from 'react-router-dom';
import imgCarrito from '../../assets/imgCarrito2.webp';
import "./CartWidget.css"

const CartWidget = () => {
  return (
    <Link to="/carrito">
        <img className='imgCarrito' src={imgCarrito} alt="imagen de un carrito de compras"/>
    </Link>
  )
}

export default CartWidget