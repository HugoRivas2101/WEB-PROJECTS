import React from "react";
import '../stylesheets/Proyecto.css';
import { Link } from "react-router-dom";

function Proyecto(props){
  return(

    <div className="contenedor-proyecto">
      
      <img
        className="imagen-proyecto"
        src={require(`../imagenes/${props.imagen}`)}
        alt="Foto de Proyecto"
      />
      
      
      <div className="contenedor-texto-proyecto">
      <Link to={`${props.pagina}`}><h2 className="nombre-proyecto">{props.nombre}</h2></Link>
      <p className='tema-proyecto'>
          <i>{props.tema}</i>
        </p>
        <p className="descripcion-proyecto">
          {props.descripcion}
        </p>
      </div>
    </div>
  );
}

export default Proyecto;
