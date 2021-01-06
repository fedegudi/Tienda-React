import React , {useState} from 'react'

const ItemCount = ({stock,initial}) => {

    const [cantidad,setCantidad] = useState(initial)

    const aumentarCantidad = () => {
        if(cantidad < stock){
            setCantidad(cantidad + 1)
        }
    }

    const disminuirCantidad = () => {
        if(cantidad > 0){
            setCantidad(cantidad - 1)
        }
    }

   const onAdd = () => {
        
    }

    return (



        <div >
        <p style={{color:"blue", fontSize:50}} >Contador de cliks : { cantidad }</p>
        <button onClick={ aumentarCantidad }>Aumentar contador</button>
        <button onClick={ disminuirCantidad } >Bajar contador</button>
        <button onClick={ onAdd }> Agregar</button>
        </div>
        
        
        )
    
    }
export default ItemCount