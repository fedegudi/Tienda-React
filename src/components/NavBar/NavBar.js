import React from 'react'
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
import M from "materialize-css"







const NavBar = () => {


    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems,{});
    });

    return (
        <>
    {/* <nav>
        <CartWidget />
            <div class="nav-wrapper">
            <a href="#" class="brand-logo">Tienda Guud</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="sass.html">Ofertas</a></li>
                <li><a href="badges.html">Productos</a></li>
            </ul>
            </div>
    </nav> */}

    

<nav className="red accent-2">
            <div className="nav-wrapper">
            <NavLink to="/" exact className="brand-logo black-text">Tienda Guud</NavLink>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger black-text">
                <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
                <li>
                    <NavLink to="/categoria/1" className="black-text">PC</NavLink>
                </li>
                <li>
                    <NavLink to="/categoria/2" className="black-text">Componentes de PC</NavLink>
                </li>
            </ul>
            <CartWidget/>
            </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
            <li>
                <NavLink to="/categoria/1" className="black-text">categoria 1</NavLink>
            </li>
            <li>
                <NavLink to="/categoria/2" className="black-text">categoria 2</NavLink>
            </li>
        </ul>
    </>
    )
}

export default NavBar;