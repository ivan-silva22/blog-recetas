import {Routes, Route} from 'react-router-dom';
import Administrador from '../views/Administrador';
import EditarReseta from '../views/EditarReseta';
import CrearReseta from '../views/CrearReseta';

const RutasAdmin = () => {
    return (
        <>
         <Routes>
         <Route exact path="/" element={<Administrador></Administrador>}></Route>
        <Route exact path="/editarreseta" element={<EditarReseta></EditarReseta>}></Route>
        <Route exact path="/crearreseta" element={<CrearReseta></CrearReseta>}></Route>
         </Routes>   
        </>
    );
};

export default RutasAdmin;