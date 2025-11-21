import { Link } from "react-router-dom"

const Item = ({id, nombre, precio, img}) => {
  return (
    <>
        <img src={img} alt={nombre}/>
        <h3>Nombre: {nombre} </h3>
        <p>Precio: ${precio} </p>
        <button>
          <Link to= {`/detalle/${id}`} >Ver detalle</Link>
        </button>
        <br></br>
    </>
  )
}

export default Item