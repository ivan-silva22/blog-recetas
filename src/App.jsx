import Menu from "./components/Menu";
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
// import Inicio from "./components/views/Inicio";
import Administrador from "./components/views/Administrador";

function App() {

  return (
    <>
      <Menu/>
      {/* <Inicio></Inicio> */}
      <Administrador></Administrador>
      <Footer/>
    </>
  )
}

export default App
