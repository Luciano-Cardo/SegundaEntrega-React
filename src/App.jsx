import './App.css'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import NavBar from './componentes/NavBar/NavBar'
import {Routes, Route} from 'react-router-dom'
import NotFound from './componentes/NotFound/NotFound'

function App() {

  return (
    <>

      <NavBar/>

      <Routes>

        <Route path="/" element= {<ItemListContainer/>} />

        <Route path="/categorias/:idCategoria" element= {<ItemListContainer/>} />

        <Route path="/detalle/:idDetalle" element= {<ItemDetailContainer/>} />

         <Route path="*" element={<NotFound />} />

      </Routes>

    </>
  )
}

export default App
