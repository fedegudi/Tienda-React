import React from 'react'


const ItemCount = () =>{

    const [contador, setContador] = React.useState(1);

    const [fecha, setFecha] = React.useState("");
    
    const aumentarContador = () =>{
       setContador(contador+1)
    }

    const bajarContador = () =>{
        setContador(contador-1)
    }

    const resetearContador = () =>{
        setContador(1)
    }

    const ultimoClick = () =>{
        setFecha(new Date().toLocaleString());
    }

    return(
        
        <div onClick={ ultimoClick } 
        style= {{border:"red", borderStyle:"solid"}}>
        <p>{fecha}</p>
        <p style={{color:"blue", fontSize:50}} >Contador de cliks : { contador }</p>
        <button onClick={ aumentarContador }>Aumentar contador</button>
        <button onClick={ bajarContador } >Bajar contador</button>
        <button onClick={ resetearContador } >Resetear contador</button>
        </div>
        
    )
}





export default ItemCount