import React from 'react'


const ItemCount = ({inicial,stock}) =>{

 /*   const handleAdd = () => {
        return ()=>{
            if(stock <=0){
                alert("no hay Stock")
            }else{
                alert("se van a agregar")
            }
        }
    }
*/

    const [contador, setContador] = React.useState(0);

    const [fecha, setFecha] = React.useState("");
    
    const aumentarContador = () =>{
        let cantidad = contador + 1;
        if(cantidad <= stock){
            setContador(cantidad)
        }
    }

    const bajarContador = () =>{
        let cantidad = contador - 1;
        if(cantidad >= 0){
            setContador(cantidad)
        }
    }

    const resetearContador = () =>{
        setContador(0)
    }

    const onAdd= () =>{
        /*todavia no se implementa*/
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
        <button /*onClick={ onAdd }*/> Agregar</button>
        </div>
        
    )
}





export default ItemCount