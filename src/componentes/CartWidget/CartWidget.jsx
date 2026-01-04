import { Link } from 'react-router-dom';
import imgCarrito from '../../assets/imgCarrito2.webp';
import "./CartWidget.css"
import { miContexto } from '../../providers/CartProvider';
import { useContext } from 'react';

const CartWidget = () => {

  const valorActual = useContext(miContexto)

  return (
    <Link to="/carrito">
        <img className='imgCarrito' src={imgCarrito} alt="imagen de un carrito de compras"/>
        <strong>
          {valorActual.cantidad}
        </strong>
    </Link>
  )
}

export default CartWidget