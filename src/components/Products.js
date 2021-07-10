import React, { useEffect, useState } from 'react'
import { GetProducts } from './Api'
import './Products.css'
import AddCircleIcon from '@material-ui/icons/AddCircle';

export default ({showProducts})=>{
const [products,  setProducts] = useState([])
const [refresh, setRefresh] = useState(true)
const [checked1, setChecked1] = useState(false)
const [checked2, setChecked2] = useState(false)
const [filter, setFilter] = useState('')

const handleChecked1 = ()=>{
    if(checked2){setChecked1(false)}
    else
    {setChecked1(!checked1);
    setFilter(!checked1?"S":'')}
   }

const handleChecked2 = ()=>{
    if(checked1){setChecked2(false)}else{
    setChecked2(!checked2);setFilter(!checked2?"M":'')}}


const filtercategory = 
products.filter(prod => prod.category.toLowerCase().includes(filter.toLowerCase()))

useEffect (()=>{
    const data = fetch(GetProducts)
    .then(res => {
        return res.json()
    })
    .then(data=>{
     setProducts(data)
    })
},[showProducts, refresh])


const AddProducts =()=>{
    const [checked, setChecked] = useState(false);
    const [category, setCategory] = useState('M')
    const [name, setName] = useState('')
    const [value, setValue] = useState('')
    const [obs, setObs] = useState('')
const handleChecked = ()=>{
    setCategory('S')
    setChecked(!checked)
}
let dados= {
    name: name.toUpperCase(),
    observation:obs.toUpperCase(),
    value: value,
    category: category,
    saldo:0
}
const handleSendProducts = async ()=>{
    const data = await fetch(GetProducts,
    {headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'},
    method: "POST",
    body: JSON.stringify(dados)
    }) 
    const res = await data.json()
    setCategory('M')
    setName('')
    setValue('')
    setObs('')
    setChecked(false)
    setRefresh(!refresh)
}
const handleVerification =()=>{
    if(name != '' & value != ''){
        handleSendProducts()
    }else{
        alert("Nome e Valor são obrigátorios.")
    }
}
    return(
        <div className='AreaAddProduct'>
            <input placeholder='Nome Produto' value={name}
                onChange={(e)=>{setName(e.target.value)}}/>

            <div className='TextAddProd'>R$
            <input placeholder='0,00'value={value} type='number'
            onChange={(e)=>{setValue(e.target.value)}} />
            </div>

            <input placeholder='Observação' value={obs}
            onChange={(e)=>{setObs(e.target.value)}}/>

            <div className='TextAddProd'>Serviço?
            <input type="checkbox" defaultChecked={checked}
            onChange={handleChecked} />
            </div>

            <button ><AddCircleIcon style={{color:'rgba(77, 141, 224, 0.904)'}}
            onClick={handleVerification} /></button>
        </div>
    )
}

return(
   
<div className='boxProducts' style={{top: showProducts?0:-2000}}>
<div className='headerProd'>
    <div className='FilterSelector'>
        <div className='AreaFilterSelector'>
            <input className='CheckInput' type="checkbox" defaultChecked={checked1}
            onChange={handleChecked1}/> Serviços</div>
        <div className='AreaFilterSelector'>
            <input  className='CheckInput'type="checkbox" defaultChecked={checked2}
            onChange={handleChecked2}/> Produtos</div>
    </div>
    Serviços e Produtos
    <div className='FilterSelector'></div>
</div>
<AddProducts/>
<div className='ScrollProd'>
 {filtercategory.map(data=>(
      <div key={data.id} className={`AreaProd${data.category}`}>
          <div className='NameProd'>{data.name}</div>
         <div className='BoxValues'>R$ <a>{data.value}</a></div>
         <div className='BoxSaldo'>{data.saldo}</div>
         <div className='BoxObs'>{data.observation}</div>          
      </div>
 )) }
 </div>
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