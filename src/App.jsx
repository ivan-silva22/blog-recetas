import Menu from "./components/Menu";
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Inicio from "./components/views/Inicio";

function App() {

  return (
    <>
      <Menu/>
      <Inicio></Inicio>
      <Footer/>
    </>
  )
}

export default App
