import React , { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import Loader from '../Loader'

const details = [
    {
        categoria : "1",
        id : "MLA832761839",
        titulo : "T10 Pc Armada Gamer Amd 4gb 1tb Video R7 Mexx",
        descripcion : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti esse dolorum velit, repellendus magnam, dicta in amet atque ab eos numquam neque maiores, asperiores natus nihil molestiae quaerat excepturi eius.",
        garantia : "Garantía de fábrica: 30 días",
        precio : 17,
        img : "https://http2.mlstatic.com/D_NQ_NP_936303-MLA29645494633_032019-W.webp"
    },
    {
        categoria : "1",
        id : "MLA871170293",
        titulo : "Pc Completa Gamer Amd Ryzen 5 2400g 1tb 8gb Ram W10",
        descripcion : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti esse dolorum velit, repellendus magnam, dicta in amet atque ab eos numquam neque maiores, asperiores natus nihil molestiae quaerat excepturi eius.",
        garantia : "Garantía de fábrica: 30 días",
        precio : 19,
        img : "https://http2.mlstatic.com/D_NQ_NP_706371-MLA31335258860_072019-W.webp"
    },
    {
        categoria : "2",
        id : "MLA883627045",
        titulo : "Combo Actualización Pc Intel I5 9400 8gb B365 M Aorus Elite",
        descripcion : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti esse dolorum velit, repellendus magnam, dicta in amet atque ab eos numquam neque maiores, asperiores natus nihil molestiae quaerat excepturi eius.",
        garantia : "Garantía de fábrica: 30 días",
        precio : 22,
        img : "https://http2.mlstatic.com/D_NQ_NP_639214-MLA43244713687_082020-O.webp"
    },
    {
        categoria : "2",
        id : "MLA749898152",
        titulo : "Motherboard Gigabyte B450 Aorus Elite Am4 Ddr4 Ssd M.2 Rgb",
        descripcion : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti esse dolorum velit, repellendus magnam, dicta in amet atque ab eos numquam neque maiores, asperiores natus nihil molestiae quaerat excepturi eius.",
        garantia : "Garantía de fábrica: 30 días",
        precio : 34,
        img : "https://http2.mlstatic.com/D_NQ_NP_741459-MLA44277740677_122020-O.webp"
    }
]

const ItemDetailContainer = () => {

    const [item,setItem] = useState()
    const {id} = useParams()

    useEffect(()=>{

        let pedido = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(details)
            },2000)
        })
        pedido
        .then(resultado=>{
            setItem(resultado.filter(item=>item.id==id)[0]);
            console.log(resultado)
        })
    },[id])

    return (
        <div>
            {item
            ? <ItemDetail item={item}/> 
            : <Loader/>}
        </div>
)}


export default ItemDetailContainer