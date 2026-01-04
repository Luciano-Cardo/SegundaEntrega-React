import React, {useContext} from 'react'
import { miContexto } from '../../providers/CartProvider';

export const ItemDetail = ({id, nombre, precio, img}) => {

  const valorActual = useContext(miContexto)

  const handleAgregarAlCarrito = () => {
    valorActual.setCantidad(10)
  }

  return (
    <div>
        <div className="divDetail">
          <h2>Nombre: {nombre} </h2>
          <h2>Precio: {precio} </h2>
          <img src={img} alt={nombre}/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, praesentium.</p>
          <button onClick={handleAgregarAlCarrito}>Agregar al carrito</button>
        </div>
    </div>
  )
}
