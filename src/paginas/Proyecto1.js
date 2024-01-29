import { Proyecto_individual } from '../componentes/Proyecto_individual';
import '../stylesheets/Proyecto_individual.css';

function Proyecto1() {
  const imagenesDetalle = ['neeko1.jpeg', 'neeko2.jpeg']; // Agrega más imágenes según sea necesario

  return (     
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
     imagenesDetalle={imagenesDetalle}
    />  
  );
}

export default Proyecto1;