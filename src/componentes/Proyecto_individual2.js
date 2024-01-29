import React from "react";
import '../stylesheets/Proyecto_individual.css'

export function Proyecto_individual(props){
  return(
    
    <div className="contenedor-proyecto-individual">
      
      <img
        className="imagen-proyecto-individual"
        src={require(`../imagenes/${props.imagen}`)}
        alt="Foto de Proyecto"
      />

      <div className="contenedor-texto-proyecto-individual">
        <h2 className="nombre-proyecto-individual">{props.nombre}</h2>
        <p className="descripcion-proyecto-individual">
          {props.descripcion}
        </p>
      </div>
      

      <div className="contenedor-imagen-proyecto-individual-detalles">
        <img
          className="imagen-detalle-proyecto-individual"
          src={require(`../imagenes/${props.imagen_detalle_1}`)}
          alt="Foto de Proyecto"
        />
        <img
          className="imagen-detalle-proyecto-individual"
          src={require(`../imagenes/${props.imagen_detalle_2}`)}
          alt="Foto de Proyecto"
        />
      </div>


    </div>

    );
  }
  