import React, { useEffect, useState } from 'react'
import { GetProducts } from './Api'
import './Products.css'

export default ({showProducts})=>{
const [products,  setProducts] = useState([])

useEffect (()=>{
    const data = fetch(GetProducts)
    .then(res => {
        return res.json()
    })
    .then(data=>{
     setProducts(data)
    })
},[showProducts])



return(
   
<div className='boxProducts' style={{top: showProducts?0:-2000}}>
<div className='headerProd'>Serviços e Produtos</div>
 {products.map(data=>(
      <div key={data.id}>
          <a>{data.name}</a>
          <a>{data.value}</a>
          <a>{data.observation}</a>
          <a>{data.createdAt}</a>
          
      </div>
 )) }
</div>

) 
}

/**
 * 
 
<div className='SearchList' style={{left: showlist?0:-500}}>
        <div className='SearchListHeader'>PRODUTOS</div>
        {filtered.map((data, key) =>(
            <div className={`SearchItemList` }
            key={data.id}
            onClick={()=>{handleSetItens(data); setSearch('')}}>
                <a>{data.name.toUpperCase()}</a>
                <div className='SearchItemLine2'>
                <a>R$: {data.value}</a>
                </div>
            </div>
))} </div>  





 * 
 */