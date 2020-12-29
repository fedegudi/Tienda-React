import React from 'react';
import Item from './Item';



const ItemListContainer = ({destacados,masVendidos,nombre}) => {
    return(

        <>
        <h2>Bienvenido {nombre}</h2>
        <h3> {destacados} </h3>
        <h3> {masVendidos} </h3>
     
        </>

    )
}


export default ItemListContainer;