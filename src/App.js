import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';


function App() {
  return (
    <>
    <NavBar />,
    <ItemListContainer 
    destacados="Productos destacados de la semana en Tienda Guud"
    masVendidos="Productos mas vendidos en Tienda Guud" />
    <ItemCount />
    </>
  );
}

export default App;
