import React from 'react';
import Item from './Item'


const ItemList = ({items}) => {

    return (
        <> 
        <h1>Fede</h1>
        </>
      /*  <div className="row">
            {items.length > 0
            ? items.map(item=>{
                return (
                    <Item key={item.id} id={item.id} titulo={item.titulo} precio={item.precio} imagen={item.img}/>
                )
            })
            : <Loader/>}
        </div>*/
        
    )
}





export default ItemList



