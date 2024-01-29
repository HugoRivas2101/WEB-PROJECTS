import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Proyecto_individual from './componentes/Proyecto_individual.js';

import ProyectoPage from './paginas/ProyectoPage';
import Proyecto1 from './paginas/Proyecto1';
import Proyecto2 from './paginas/Proyecto2';


function App() {
  return (
    <div className="App">
      
      <div className="contenedor-principal">

        <h1>PROYECTOS</h1>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProyectoPage/>} />
            <Route path="/proyecto1" element={<Proyecto1/>} />
            <Route path="/proyecto2" element={<Proyecto2/>} />
          </Routes>
        </BrowserRouter>

      
      </div>
    </div>
  );
}

export default App;