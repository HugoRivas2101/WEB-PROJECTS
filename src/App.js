import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ProyectoPage from './paginas/ProyectoPage';
import Proyecto1 from './paginas/Proyecto1';
import Proyecto2 from './paginas/Proyecto2';
import Paginacion from './componentes/Paginacion';

function App() {
  return (
    <div className="App">



      <div className="contenedor-principal">

{/*
      <nav>
            <div class="nav-derecha">
        <div class="universidad">
            <h2>Universidad</h2>
            <h2>Nacional de Ingenieria</h2>
        </div>
        <div class="palito"></div>
        
        </div>
        <div class="espacio"></div>
        <div class="nav-izquierda">
            <a href="#inicio">Inicio</a>
            <a href="#Posts">Posts</a>
            <a href="#Comunidad">Comunidad</a>
            <a href="#Proyecto1">Proyectos</a>
        </div>
        </nav>

  */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProyectoPage/>} />
          <Route path="/pag" element={<Paginacion/>} />
          <Route path="/proyecto1" element={<Proyecto1/>} />
          <Route path="/proyecto2" element={<Proyecto2/>} />
        </Routes>
      </BrowserRouter>

      
      </div>
    
    </div>
  );
}

export default App;
