import React from 'react';
import productos from './productos'






const ItemList =()=> {

const [productos,setProductos] = React.useState([])


 React.useEffect(()=>{
    fetch("https://pokeapi.co/api/v2/pokemon/")

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
      {productos.map((producto)=>{
        return <p>{producto.name}</p>

      })}
    </div>
  );
}

export default ItemList



