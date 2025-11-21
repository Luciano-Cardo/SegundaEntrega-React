export const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div>
        <h2>Nombre: {nombre} </h2>
        <h2>Precio: {precio} </h2>
        <img src={img} alt={nombre}/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, praesentium.</p>
    </div>
  )
}
