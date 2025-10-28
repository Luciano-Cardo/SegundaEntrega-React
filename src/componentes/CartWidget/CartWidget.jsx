import imgCarrito from '../../assets/imgCarrito2.webp';
import "./CartWidget.css"

const CartWidget = () => {
  return (
    <div>
        <img className='imgCarrito' src={imgCarrito} alt="imagen de un carrito de compras"/>
    </div>
  )
}

export default CartWidget