import React, {useState} from "react";
// import { getProducts, productos } from "../mock/data";
import { useEffect } from "react";
import Decor from "./decor";
import { collection, getDocs } from "firebase/firestore"
import { db } from "../service/firebase"



const ItemListContainer = ({})=>{
    const [productos, setProductos] = useState([])

    // useEffect(()=>{
    //     getProducts()
    //     .then((res) => setProductos(res))
    //     .catch((error)=> console.log(error))
    // },[])

useEffect(()=>{
    const coleccionProductos = collection(db, "productos")
    getDocs(coleccionProductos)
    .then((res)=> {
        const list = res.docs.map((item)=>{
            return{
                id:item.id,
                ...item.data()
            }
        })
        setProductos(list)
    })
    .catch((error)=> console.log(error))
},[])


    return (
        <div className="row">

        {productos.map((item)=><Decor key={item.id} item={item}/>)}

        </div>
    );
}

export default ItemListContainer;