import Menu from "./components/Menu";
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./components/views/Inicio";
import Login from "./components/Login";
import DetalleReseta from "./components/DetalleReseta";
import Registro from "./components/Registro";
import { useState } from "react";
import RutasProtegidas from "./components/routes/RutasProtegidas";
import RutasAdmin from "./components/routes/RutasAdmin";

function App() {
  const usuario = JSON.parse(sessionStorage.getItem('usuario')) || {};
  const [usuarioLogin, setUsuarioLogin] = useState({usuario});
  return (
    <>
      <BrowserRouter>
      <Menu usuarioLogin={usuarioLogin} setUsuarioLogin={setUsuarioLogin}/>
      <Routes>
        <Route exact path="/" element={<Inicio></Inicio>}/>
        <Route exact patch="/registro" element={<Registro></Registro>}></Route>
        <Route exact path="/login" element={<Login setUsuarioLogin={setUsuarioLogin}></Login>}/>
        <Route exact path="/detallereseta" element={<DetalleReseta></DetalleReseta>}></Route>
        <Route exact path="/administrador/*" element={<RutasProtegidas>
          <RutasAdmin></RutasAdmin>
        </RutasProtegidas>}></Route>

      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
