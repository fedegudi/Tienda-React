import React from 'react'
import ItemCount from '../ItemCount/ItemCount'


const ItemDetail = ({item}) => {

    return (
        <div className="container">
            <h3>{item.titulo} - ${item.precio}</h3>
            <img src={item.img} alt="carousel"/>
            <p>{item.descripcion}</p>
            <p>
                <strong>GARANTIA :</strong><br/>
                {item.garantia}
            </p>
            <ItemCount stock={10} initial={1}/>
        </div>
    )
}

export default ItemDetail