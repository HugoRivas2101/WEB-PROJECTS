import { Proyecto_individual } from '../componentes/Proyecto_individual';
import '../stylesheets/Proyecto_individual.css';

function Proyecto1() {
    return (
    <div className="contenedor-proyecto-individual">
      
      <Proyecto_individual
        nombre="PROYECTO 1"
        imagen="neeko1.jpeg"
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
        imagen_detalle_1="neeko1.jpeg"
        imagen_detalle_2="neeko1.jpeg"
      />
    </div>
    );
  }
  
  export default Proyecto1;