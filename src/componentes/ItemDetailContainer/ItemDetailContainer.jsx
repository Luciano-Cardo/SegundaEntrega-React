import { useState, useEffect } from "react"
import { getUnProducto } from "../../asyncmock" 
import {ItemDetail} from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState(null)
    const params = useParams()

    useEffect(() => {
        getUnProducto(params.idDetalle)
        .then(respuesta => setProducto(respuesta))
    }, [params.idDetalle])


  return (
    <div>
        <ItemDetail {...producto} />
    </div>
  )
}

export default ItemDetailContainer