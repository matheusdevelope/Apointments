import React, { useState, useEffect } from 'react'
import InputMask from "react-input-mask";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import './ModelServiceArea.css'
import { GetProdByServ, GetProducts, GetService } from './Api';


export default ({Info1,Info2,Info4,Info5,Info6})=>{
const [products, setProducts] = useState([])
const [search, setSearch] = useState('')
const filtered = products.filter(prod => prod.name.toLowerCase().includes(search.toLowerCase()))
const [item, setItem] = useState([])
const [show, setShow] = useState(false)
const [response, setResponse] = useState()
//inputs
const [codclient,setCodClient] = useState()
const [valueInput,setValueInput]=useState(0)
const [obsInput,setObsInput]=useState()
const [statusInput,setStatusInput]=useState()
const [dtMarcadaInput,setDtMarcadaInput]=useState()
const [hrMarcadaInput,setHrMarcadaInput]=useState()
const [codCatInput, setCodCatInput] = useState()
let _data = {
    client_id: codclient,
    observation: obsInput, 
    value:valueInput,
    status:statusInput,
    category:codCatInput,
    datamarcada: dtMarcadaInput,
    hour: hrMarcadaInput
}   
const ProductsList =()=> {return(
    <div className='SearchList' style={{left: show?0:-500}}>
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
)}
const ListItens = ()=>{return(
    <div className='List'>
         {item.map((item, key) =>(
                <div className='ListItem' key={key}>
                    <a>{item.name}</a>
                    <div className='Value'>
                        <input  type="text" value={item.value}/>
                    </div>
                    <EditIcon fontSize='small' className='Icon'/>
                    <DeleteForeverIcon  fontSize='small' className='Icon'
                    onClick={()=>{handleDeleteItem(key)}}/>
                </div>
    ))} </div>
)}
const newItem = item.map((data)=>{
    data.service_id = response 
    }
)
const handleSetItens = (data)=>{
    const prods = {
        product_id: data.id, value: data.value, name: data.name, service_id: 0 }
    setItem([...item, prods])
    setValueInput(valueInput + data.value)

}
const handleDeleteItem = (key) =>{
    let newItem = [...item]
    newItem.splice(key, 1)
    setItem(newItem)
}
const handleAddNewService = async ()=>{
const Post = await fetch(GetService, {
headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'},
method: "POST",
body: JSON.stringify(_data)
}) 
const res = await Post.json()
setResponse(res.id)
handleAddNewProductByService()
setItem([])
}
const handleAddNewProductByService = async()=>{
    const Post = await fetch(GetProdByServ, {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'},
    method: "POST",
    body: JSON.stringify(item)
    }) 
    const retorno = await Post.json()
}
useEffect(()=>{
    fetch(GetProducts)
    .then(res => {return res.json()
     }).then(data=>{
    setProducts(data)
})     
},[])

const handleSetServiceInfo= ()=>{
    const u = undefined
    if(_data.client_id != u & _data.value != u) {
        alert(_data.value)
    }
    else {alert("Preencha os campos!")}
}
return (
    <div className='AreaView'>
        <div className='LineOne'>
            <div className='Area'>{Info1} <input
             value={codclient} onChange={(ev)=> setCodClient(ev.target.value)} /></div>
            <div className='Area'>{Info2} <input
              value={search} onChange={(ev)=> {setSearch(ev.target.value); setShow(true)}} /></div>
            <div className='Area'>{Info5} <input className='InputObs'
            value={obsInput} onChange={e=>{setObsInput(e.target.value)}}    /></div>
        </div>
        <ProductsList/>
        <ListItens/>
        <div className='LineTwo'>
            <div className='AreaDateHour'>
                <InputMask mask="99-99-9999" placeholder='Data Marcada' value={dtMarcadaInput} onChange={e=>{setDtMarcadaInput(e.target.value)}}/>
                <InputMask mask="99:99" placeholder='Hora Marcada' value={hrMarcadaInput} onChange={e=>{setHrMarcadaInput(e.target.value)}}/>
            </div>
            <div className='AreaButton' onClick={()=>{handleSetServiceInfo()}}>{Info6}</div>
        </div>
    </div>
)
}


