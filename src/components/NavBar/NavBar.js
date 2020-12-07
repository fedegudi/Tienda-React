import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../logo.svg';


function NavBar (){

    return(
        <div className="NavBar">
            <h1>Tienda Guud</h1>
            <p>Aca va el logo de la tienda.</p>


            <ul class="nav nav-tabs justify-content-end">
  <li class="nav-item">
    <a class="nav-link" href="#">Ofertas</a>
  </li>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Productos</a>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Autos</a>
      <a class="dropdown-item" href="#">Motos</a>
      <a class="dropdown-item" href="#">Bicicletas</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Lanchas</a>
    </div>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Contacto</a>
  </li>
</ul>
 
        </div>
    )

}


export default NavBar;


