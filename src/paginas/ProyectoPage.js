import Proyecto from '../componentes/Proyecto.js';
import './../stylesheets/Proyecto.css';


function ProyectoPage() {



    return (
        <div className="contenedor-principal">

          <Proyecto
            nombre="PROYECTO 1"
            imagen="neeko1.jpeg"
            descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Tenetur et beatae corporis, ipsa ex commodi placeat magnam
            , mollitia impedit doloremque libero neque dolor laudantium,
             inventore exercitationem dignissimos vero molestiae fuga."
             pagina="proyecto1"
          />
  
          <Proyecto
            nombre="PROYECTO 2"
            imagen="neeko2.jpeg"
            descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Tenetur et beatae corporis, ipsa ex commodi placeat magnam
            , mollitia impedit doloremque libero neque dolor laudantium,
             inventore exercitationem dignissimos vero molestiae fuga."
             pagina="proyecto2"
          />
  
          <Proyecto
            nombre="PROYECTO 3"
            imagen="neeko3.jpg"
            descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Tenetur et beatae corporis, ipsa ex commodi placeat magnam
            , mollitia impedit doloremque libero neque dolor laudantium,
             inventore exercitationem dignissimos vero molestiae fuga."
             pagina="proyecto2"
          />


        </div>
    );
  }
  
  export default ProyectoPage;
  