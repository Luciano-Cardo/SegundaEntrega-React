import { collection, addDoc, getDoc, getDocs, updateDoc, deleteDoc } from "firebase/firestore"
import { db } from "../../firebaseConfig"
import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
import { NavLink } from "react-router-dom"

const NavBar = () => {

  /*
  function handleCrearProducto(){

    const misProductos = [
      {id: 1, nombre: "Charango", precio: 400000, img: "/img/charango.png", categoria: "cuerdas"},
      {id: 2, nombre: "Armonica", precio: 120000, img: "/img/armonica.png", categoria: "viento"},
      {id: 3, nombre: "Guitarra acustica", precio: 700000, img: "/img/acustica.png", categoria: "cuerdas"},
      {id: 4, nombre: "Bajo", precio: 900000, img: "/img/bajo.png", categoria: "cuerdas"},
      {id: 5, nombre: "Bateria", precio: 2500000, img: "/img/bateria.png", categoria: "percusion"},
      {id: 6, nombre: "Ukelele", precio: 300000, img: "/img/ukelele.png", categoria: "cuerdas"},
      {id: 7, nombre: "Guitarra Electrica", precio: 1500000, img: "/img/gibson.png", categoria: "cuerdas"},
      {id: 8, nombre: "Violin", precio: 850000, img: "/img/violin.png", categoria: "cuerdas"},
    ]

    misProductos.forEach(producto => {

      const productosCollection = collection(db, "productos")

      addDoc(productosCollection, producto)
        .then((respuesta)=>{
          console.log(respuesta)
        })
        .catch((error)=>{
          console.log(error)
        })
    })
  }
  */

  return (
    <header>
        <h1>
          <NavLink to="/">SEGUNDA ENTREGA</NavLink>
        </h1>
        {/* <button onClick={handleCrearProducto}>crear producto</button>*/}
        <nav>
          <ul>
            <li>
              <NavLink to="/categorias/cuerdas">Guitarras y bajos</NavLink>
            </li>
            <li>
              <NavLink to="/categorias/teclas">Instrumentos de teclas</NavLink>
            </li>
            <li>
              <NavLink to="/categorias/percusion">Bateria y persecucion</NavLink>
            </li>
            <li>
              <NavLink to="/categorias/viento">Vientos</NavLink>
            </li>
          </ul>
        </nav>
        <CartWidget/>
    </header>
  )
}

export default NavBar