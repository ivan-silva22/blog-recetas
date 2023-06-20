import Menu from "./components/Menu";
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Administrador from "./components/views/Administrador";
import Inicio from "./components/views/Inicio";
import Login from "./components/Login";
import DetalleReseta from "./components/DetalleReseta";
import EditarReseta from "./components/views/EditarReseta";
import CrearReseta from "./components/views/CrearReseta";
import Registro from "./components/Registro";

function App() {

  return (
    <>
      <BrowserRouter>
      <Menu/>
      <Routes>
        <Route exact path="/" element={<Inicio></Inicio>}/>
        <Route exact patch="/registro" element={<Registro></Registro>}></Route>
        <Route exact path="/login" element={<Login></Login>}/>
        <Route exact path="/detallereseta" element={<DetalleReseta></DetalleReseta>}></Route>
        <Route exact path="/administrador" element={<Administrador></Administrador>}></Route>
        <Route exact path="/administrador/editarreseta" element={<EditarReseta></EditarReseta>}></Route>
        <Route exact path="/administradro/crearreseta" element={<CrearReseta></CrearReseta>}></Route>

      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
