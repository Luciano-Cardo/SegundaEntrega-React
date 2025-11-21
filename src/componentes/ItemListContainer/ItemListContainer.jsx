import { useState, useEffect } from "react"
import { getProductos } from "../../asyncmock" 
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {

  const[productos, setProductos] = useState([])
  const params = useParams()

  useEffect(()=>{
    getProductos(params.idCategoria)
      .then(respuesta=>setProductos(respuesta))
      .catch(error=>console.log(error))
  }, [params.idCategoria])

  return (
    <>
      <h2>Productos</h2>
      <ItemList productos={productos} />
    </>
  )
}

export default ItemListContainer