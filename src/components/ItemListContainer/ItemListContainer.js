import React, { useEffect, useState } from 'react'




const productos =[ 
    {
    categoria: "1",    
    id:"1",
    titulo:"Notebook",
    precio:"17",
    img: "https://http2.mlstatic.com/D_668117-MLA31786420833_082019-I.jpg"
    },
    {
    categoria: "1",
    id:"2",
    titulo:"PC",
    precio:"19",
    img:"https://http2.mlstatic.com/D_725124-MLA40927542006_022020-I.jpg"
    },
    {
    categoria: "2",
    id:"3",
    titulo:"Teclado",
    precio:"22",
    img:"https://http2.mlstatic.com/D_617506-MLA43746164726_102020-I.jpg"
    },
    {
    categoria: "2",
    id:"4",
    titulo:"Mouse",
    precio:"34",
    img:"https://http2.mlstatic.com/D_761041-MLA41995986461_052020-I.jpg"
    },

]



const ItemListContainer = () => {
    
    const [items,setItems] = useState([])

    useEffect(()=>{
        
        let pedido = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(productos)
            },2000)
        })

        pedido
        .then((resultado)=>{
            console.log("Pedido exitoso")
            console.log(resultado)
            /*if(resultado.status === 200){
                let transformacion = resultado.json()
                return transformacion
            }*/
        })

    },[])
    
    
    return(
        <div className="container">
        <h1>Productos</h1>
        { items.length === 0 ? <p>No hay nada</p> : null } 
        </div>

    )
}


export default ItemListContainer;