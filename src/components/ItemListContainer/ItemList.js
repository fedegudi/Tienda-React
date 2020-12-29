import React from 'react';
import prod from './productos'







const ItemList =(prod)=> {

const [productos,setProductos] = React.useState([])


 React.useEffect(()=>{
    fetch("./productos")

    .then((respuesta)=>{
      return respuesta.json()
    })
    .then((respuesta)=>{
      setProductos(respuesta.results)
    })
  },[])


  return (
    <div>
      <h1>Productos!</h1>
      { productos.length === 0 ? <p>No hay nada</p> : null }
      {productos.map((prod)=>{
        return <p>{prod.nombre}</p>

      })}
    </div>
  );
}

export default ItemList



