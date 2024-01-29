import React from "react";
import '../stylesheets/Proyecto.css';
import { Link } from "react-router-dom";

function Proyecto(props){
  return(

    <div className="contenedor-proyecto">
      
      <Link to={`${props.pagina}`}>
      <img
        className="imagen-proyecto"
        src={require(`../imagenes/${props.imagen}`)}
        alt="Foto de Proyecto"
      />
      </Link>
      
      
      <div className="contenedor-texto-proyecto">
        <h2 className="nombre-proyecto">{props.nombre}</h2>
        <div className="contenedor-separador">
          <div className="amarillo"></div>
          <div className="marron"></div>
        </div>
        <p className="descripcion-proyecto">
          {props.descripcion}
        </p>
        <div classname="boton-vermas">
          <Link to={`${props.pagina}`}>
          <button id="vermas">Ver más</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Proyecto;
