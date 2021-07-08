import React, { useEffect, useState } from 'react'
import { GetProducts } from './Api'
import './ClientListItem.css'
export default ({showProducts, setShowProducts})=>{
const [products,  setProducts] = useState([])

useEffect (()=>{
    const data = fetch(GetProducts)
    .then(res => {
        return res.json()
    })
    .then(data=>{
     setProducts(data)
    })
},[])


return(
<div className='box' style={{left: showProducts?0:-2000}}>
   
</div>
)
}