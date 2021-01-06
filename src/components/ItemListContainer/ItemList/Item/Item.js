import React from 'react';
import {NavLink} from 'react-router-dom'



const Item = ({ id, titulo, precio, imagen}) => {
  return (
   <div className="col s6 m4 l3">
            <div className="card">
                <div className="card-image">
                    <img src={imagen} alt={`titulo-id`}/>
                </div>
                <div className="card-content">
                    <span className="card-title truncate">{titulo}</span>
                    <p>${precio}</p>
                </div>
                <div className="card-action">
                    {<NavLink to={`/item/${id}`}>ver detalle</NavLink>}
                </div>
            </div>
    </div>
  )
}
export default Item;