//router
import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../../Assets/IMG/logo.png';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {

    return (
        <>
<div>
<div class="container">
  <div class="row align-items-start">
    <div class="col">
    <img src={logo} className="logo" alt="Logo" />
    </div>

    <div class="col">
    
    <div className="circulo fixed-top">
    <ul className="navbar-nav">
        <li className="nav-item">
            <NavLink className="nav-link active link-light" aria-current="page" to='/'><strong>Inicio</strong></NavLink>
        </li>
        
        <li>
            <NavLink to='/poke'>PokemonesSearch</NavLink>
        </li>
    </ul>
    </div>

    </div>


    </div>
        </div>

  
    
</div>
</>
    );
}