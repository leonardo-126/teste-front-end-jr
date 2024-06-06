import { Header } from "./components/header/header"
import './App.scss'
import { Departamento } from "./components/departamento/departamento"
import { Products } from "./components/products/products"
import { Brands } from "./components/brands/brands"
import { Footer } from "./components/footer/footer"

function App() {

  return (
    <>
     <Header/>
     <Departamento/>
     <Products/>
     <Brands/>
     <Footer/>
    </>
  )
}

export default App
