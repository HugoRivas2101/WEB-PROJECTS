import { useState } from 'react';
import Proyecto from '../componentes/Proyecto.js';
import './../stylesheets/Proyecto.css';


function Paginacion() {

  const lista=[

    {"nombre":"PROYECTO 1","imagen":"neeko1.jpeg","pagina":"proyecto1","descripcion":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur et beatae corporis, ipsa ex commodi placeat magn, mollitia impedit doloremque libero neque dolor laudantium,inventore exercitationem dignissimos vero molestiae fuga."},
    {"nombre":"PROYECTO 2","imagen":"neeko2.jpeg","pagina":"proyecto2","descripcion":"XDLorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur et beatae corporis, ipsa ex commodi placeat magn, mollitia impedit doloremque libero neque dolor laudantium,inventore exercitationem dignissimos vero molestiae fuga."},
    {"nombre":"PROYECTO 3","imagen":"neeko3.jpg","pagina":"proyecto3","descripcion":"XDDLorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur et beatae corporis, ipsa ex commodi placeat magn, mollitia impedit doloremque libero neque dolor laudantium,inventore exercitationem dignissimos vero molestiae fuga."},
    {"nombre":"PROYECTO 4","imagen":"neeko3.jpg","pagina":"proyecto4","descripcion":"XDDDLorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur et beatae corporis, ipsa ex commodi placeat magn, mollitia impedit doloremque libero neque dolor laudantium,inventore exercitationem dignissimos vero molestiae fuga."},
    {"nombre":"PROYECTO 5","imagen":"neeko2.jpeg","pagina":"proyecto5","descripcion":"XDDDDLorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur et beatae corporis, ipsa ex commodi placeat magn, mollitia impedit doloremque libero neque dolor laudantium,inventore exercitationem dignissimos vero molestiae fuga."},
    {"nombre":"PROYECTO 6","imagen":"neeko1.jpeg","pagina":"proyecto6","descripcion":"XDDDDDLorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur et beatae corporis, ipsa ex commodi placeat magn, mollitia impedit doloremque libero neque dolor laudantium,inventore exercitationem dignissimos vero molestiae fuga."},
    {"nombre":"PROYECTO 7","imagen":"neeko1.jpeg","pagina":"proyecto6","descripcion":"XDDDDDLorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur et beatae corporis, ipsa ex commodi placeat magn, mollitia impedit doloremque libero neque dolor laudantium,inventore exercitationem dignissimos vero molestiae fuga."},

  ]

  const proyectosPorPagina=2
  const [paginaActual,setPaginaActual]=useState(1);

  const indiceInicio=(paginaActual-1)*proyectosPorPagina;
  const indiceFin=indiceInicio+proyectosPorPagina;
  const proyectosMostrados=lista.slice(indiceInicio,indiceFin);

  const cambiarPagina=(numeroPagina)=>{
    setPaginaActual(numeroPagina);
  }



  return (
      <div className="contenedor-principal">

        {proyectosMostrados.map((proyecto, index) => (
        <Proyecto key={index} {...proyecto} />
        ))}

        <div className='controles-paginacion'>
        {Array.from({ length: Math.ceil(lista.length / proyectosPorPagina) }, (_, i) => i + 1).map(numeroPagina => (
          <button
            key={numeroPagina}
            onClick={() => cambiarPagina(numeroPagina)}
            className={numeroPagina === paginaActual ? "pagina-actual" : ""}
          >
            {numeroPagina}
          </button>
        ))}
        </div>

      </div>

      

    ); 
  }
  
  export default Paginacion;