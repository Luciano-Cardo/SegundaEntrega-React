import { createContext, useState } from "react";

export const miContexto = createContext()

const {Provider} = miContexto

const CartProvider = ({children}) => {

  const[cantidad,setCantidad] = useState(0)
  
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