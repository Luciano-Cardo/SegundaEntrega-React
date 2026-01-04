import { createContext, useState } from "react";

export const miContexto = createContext()

const {Provider} = miContexto

const CartProvider = ({children}) => {

  const[cantidad,setCantidad] = useState(0)
  const[items, setItems] = useState([])

  function agregarItem (){
    const copia = [...items]

    const nuevoItem = {}
    copia.push(nuevoItem)

    setItems(copia)
  }
  
  const valorDelContexto = {
    cantidad : cantidad,
    items:[],
    setCantidad : setCantidad
  }  

  return (
    <Provider value={valorDelContexto}>
        {children}
    </Provider>
  )
}
export default CartProvider