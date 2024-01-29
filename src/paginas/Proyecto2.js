import { Proyecto_individual } from '../componentes/Proyecto_individual';
import '../stylesheets/Proyecto_individual.css';

function Proyecto2() {
    return (
    <div className="contenedor-proyecto-individual">
      
      <Proyecto_individual
        nombre="PROYECTO 2"
        imagen="neeko2.jpeg"
        descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Tenetur et beatae corporis, ipsa ex commodi placeat magnam
            , mollitia impedit doloremque libero neque dolor laudantium,
             inventore exercitationem dignissimos vero molestiae fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
             Tenetur et beatae corporis, ipsa ex commodi placeat magnam
             , mollitia impedit doloremque libero neque dolor laudantium,
              inventore exercitationem dignissimos vero molestiae fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Tenetur et beatae corporis, ipsa ex commodi placeat magnam
              , mollitia impedit doloremque libero neque dolor laudantium,
               inventore exercitationem dignissimos vero molestiae fuga."
        imagen_detalle_1="neeko2.jpeg"
        imagen_detalle_2="neeko2.jpeg"
      />
    </div>
    );
  }
  
  export default Proyecto2;