import { Header } from "./components/header/header"
import './App.scss'
import { Banner } from "./components/baner/banner"
import { Departamento } from "./components/departamento/departamento"
import { Category } from "./components/categorias/categoria"

function App() {

  return (
    <>
     <Header/>
     <Banner/>
     <Departamento/>
     <Category/>
    </>
  )
}

export default App
