import React, { useState } from "react";
import '../stylesheets/Proyecto_individual.css';

export function Proyecto_individual(props) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % props.imagenesDetalle.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + props.imagenesDetalle.length) % props.imagenesDetalle.length);
  };

  return (
    <div className="contenedor-proyecto-individual">
      <a href="#texto">
        <img
          className="imagen-proyecto-individual"
          src={require(`../imagenes/${props.imagen}`)}
          alt="Foto de Proyecto"
        />
      </a>
      <div className="contenedor-texto-proyecto-individual" id="texto">
        <h2 className="nombre-proyecto-individual">{props.nombre}</h2>
        <p className="descripcion-proyecto-individual">
          {props.descripcion}
        </p>
      </div>
      <div className="carrousel">
        <div className="flecha-izquierda" onClick={prevImage}>&#10092;</div>
        <ul className="contenedor-imagen-proyecto-individual-detalles">
          {props.imagenesDetalle.map((imagen, index) => (
            <li key={index} style={{ display: index === currentImage ? "block" : "none" }}>
              <img
                className="imagen-detalle-proyecto-individual"
                src={require(`../imagenes/${imagen}`)}
                alt={`Foto de Proyecto ${index}`}
              />
            </li>
          ))}
        </ul>
        <div className="flecha-derecha" onClick={nextImage}>&#10093;</div>
      </div>
    </div>
  );
}
