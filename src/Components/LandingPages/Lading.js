import React from "react";
/*import { Link } from "react-router-dom";
import Footer from "../components/landing/Footer";*/
//import Header from "../Shared/Header";
import ash from '../../Assets/IMG/ash.ico';
import ball from '../../Assets/IMG/ball.ico';
import location from '../../Assets/IMG/location.ico';
export default function Landing() {

  return (
    <>
        <h1 className="shadow p-3 mb-5 bg-body rounded">Al que madruga Dios los ayuda, o en este caso, Consigue un pokemon
          Profesor Oak!
        </h1>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Caracteristicas!<img src={ball} className="icon" alt="ball" /></strong> 
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>La defensa especial.</strong>En las características de un Pokémon, representa la resistencia a los movimientos especiales. Esta es modificada temporalmente en combate por movimientos, habilidades y objetos. Sus puntos base son modificados al subir de nivel, por el uso de vitaminas y objetos.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Significado! <img src={ash} className="icon" alt="ash" /></strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Pokémon</strong> = Una contracción del japonés Poketto Monsutā, que significa monstruo de bolsillo.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Historia! <img src={location} className="icon" alt="location" /></strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Un poco de Historia.</strong> La saga de videojuegos es desarrollada por la compañía programadora de software japonesa Game Freak, con personajes creados por Satoshi Tajiri para la empresa de juguetes Creatures Inc., y a su vez distribuida por Nintendo. La misión en estos juegos es capturar y entrenar a los pokémon (criaturas cuya denominación da nombre al juego), que hasta la fecha alcanzan el número de 890. La posibilidad de intercambiarlos le hizo conseguir una popularidad que se plasmó en un éxito de ventas y la consiguiente aparición de una serie animada, películas y diverso merchandising como peluches, juguetes y cartas..
      </div>
    </div>
  </div>
</div>
    </>
  );
}
