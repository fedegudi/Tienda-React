import React from 'react'
import Loader from '../../Loader'
import Item from '../ItemList/Item/Item'



const ItemList = ({items}) => {
    return (
       <div className="row">
        {items.length > 0
        ? items.map(item=>{
                return (
                    <Item key={item.id} id={item.id} titulo={item.titulo} precio={item.precio} imagen={item.img}/>
                )
                
            })
        : <Loader />
}
            
        </div>
    )
}


export default ItemList