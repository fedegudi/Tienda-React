import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemList from './components/ItemListContainer/ItemList'
import productos from './components/ItemListContainer/productos';




function App() {
  return (
    <>
    <NavBar />,
    <ItemListContainer 
    destacados="Productos destacados de la semana en Tienda Guud"
    masVendidos="Productos mas vendidos en Tienda Guud"
    nombre="Fede" />
    <ItemCount
    /*onAdd ={handleAdd}*/
    inicial="1" 
    stock="5" />
    <ItemList props={ productos }/>
    </>
  );
}

export default App;
