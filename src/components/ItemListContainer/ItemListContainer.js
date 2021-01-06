import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemListContainer/ItemList/ItemList';
import Loader from '../Loader'




const productos =[ 
    {
    categoria: "1",    
    id:"MLA832761839",
    titulo:"T10 Pc Armada Gamer Amd 4gb 1tb Video R7 Mexx",
    precio:"17",
    img: "https://http2.mlstatic.com/D_NQ_NP_936303-MLA29645494633_032019-W.webp"
    },
    {
    categoria: "1",
    id:"MLA871170293",
    titulo:"Pc Completa Gamer Amd Ryzen 5 2400g 1tb 8gb Ram W10",
    precio:"19",
    img:"https://http2.mlstatic.com/D_NQ_NP_706371-MLA31335258860_072019-W.webp"
    },
    {
    categoria: "2",
    id:"MLA883627045",
    titulo:"Combo Actualización Pc Intel I5 9400 8gb B365 M Aorus Elite",
    precio:"22",
    img:"https://http2.mlstatic.com/D_NQ_NP_639214-MLA43244713687_082020-O.webp"
    },
    {
    categoria: "2",
    id:"MLA749898152",
    titulo:"Motherboard Gigabyte B450 Aorus Elite Am4 Ddr4 Ssd M.2 Rgb",
    precio:"34",
    img:"https://http2.mlstatic.com/D_NQ_NP_741459-MLA44277740677_122020-O.webp"
    },
]


const ItemListContainer = () => {
    const [items,setItems] = useState([])
    const {id} = useParams()

    useEffect(()=>{
        let pedido = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(productos)
            },2000)
        })
        pedido
        .then((resultado)=>{
            if(id){
            setItems(resultado.filter(item=>item.categoria===id));
            }else{
                setItems(resultado)
            }
            /*setItems(resultado)*/
        })
        .catch(err=>{
            console.log(err)
        })
    },[id])
    return(
        <div className="container">
        <h1>Productos</h1>
        <ItemList items={items}/>
        </div>
    )
}



export default ItemListContainer



/*<ItemList items={items}/>*/
/*{ items.length === 0 ? <p>No hay nada <Loader/></p> : <ItemList items={items}/> }*/