import Proyecto from '../componentes/Proyecto.js';
import './../stylesheets/Proyecto.css';


function ProyectoPage() {
    return (
      <div className="App">  
        <div className="contenedor-principal">

          <Proyecto
            nombre="PROYECTO 1"
            imagen="neeko1.jpeg"
            tema='Astrobiología'
            descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Tenetur et beatae corporis, ipsa ex commodi placeat magnam
            , mollitia impedit doloremque libero neque dolor laudantium,
             inventore exercitationem dignissimos vero molestiae fuga."
             pagina="proyecto1"
          />
  
          <Proyecto
            nombre="PROYECTO 2"
            imagen="neeko2.jpeg"
            tema='Microbiología'
            descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Tenetur et beatae corporis, ipsa ex commodi placeat magnam
            , mollitia impedit doloremque libero neque dolor laudantium,
             inventore exercitationem dignissimos vero molestiae fuga."
             pagina="proyecto2"
          />
  
          <Proyecto
            nombre="PROYECTO 3"
            imagen="neeko3.jpg"
            tema='Astrofísica'
            descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Tenetur et beatae corporis, ipsa ex commodi placeat magnam
            , mollitia impedit doloremque libero neque dolor laudantium,
             inventore exercitationem dignissimos vero molestiae fuga."
             pagina="proyecto2"
          />


        </div>
      </div>
    );
  }
  
  export default ProyectoPage;
  