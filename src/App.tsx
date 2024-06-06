import { Header } from "./components/header/header"
import './App.scss'
import { Departamento } from "./components/departamento/departamento"
import { Products } from "./components/products/products"
import { Brands } from "./components/brands/brands"

function App() {

  return (
    <>
     <Header/>
     <Departamento/>
     <Products/>
     <Brands/>
    </>
  )
}

export default App
