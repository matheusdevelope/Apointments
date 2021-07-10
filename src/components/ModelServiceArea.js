import React, { useState, useEffect } from 'react'
import InputMask from "react-input-mask";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import './ModelServiceArea.css'
import { GetProdByServ, GetProducts, GetService } from './Api';
import ProductsList2 from './Products'

export default ({Info1,Info2,Info5,Info6, show,setShow})=>{
const handleRefresh = ()=>{setShow(show?false:true)}
const [products, setProducts] = useState([])
const [search, setSearch] = useState('')
const filtered = products.filter(prod => prod.name.toLowerCase().includes(search.toLowerCase()))
const [item, setItem] = useState([])
const [showlist, setShowList] = useState(false)
const [response, setResponse] = useState()
//inputs
const [codclient,setCodClient] = useState("")
const [valueInput,setValueInput]=useState(0)
const [obsInput,setObsInput]=useState('')
const [statusInput,setStatusInput]=useState("F")
const [dtMarcadaInput,setDtMarcadaInput]=useState("")
const [hrMarcadaInput,setHrMarcadaInput]=useState("")
const [codCatInput, setCodCatInput] = useState("V")
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
)}
const handleEdit = (e , key)=>{
    const {name, value} = e.target;
    const list = [...item];
    list[key][name] = parseFloat(value);
}

const ListItens = ()=>{return(
    <div className='List'>
         {item.map((item, key) =>(
                <div className='ListItem' key={key}>
                    <a>{item.name}</a>
                    <div className='Value'>
                <input  name='value' type='number' placeholder={item.value}
                onChange={e=>{handleEdit(e, key)}}/>
                
                    </div>
                    <EditIcon fontSize='small' className='Icon'/>
                    <DeleteForeverIcon  fontSize='small' className='Icon'onClick={()=>{handleDeleteItem(key)}}/>
                </div>
    ))} </div>
)}

const newItem = item.map((data)=>{
    data.service_id = response 
    }
)

const handleSetItens = (data)=>{
    const prods = {
        quantidade:1,   
        product_id: data.id,
        value: data.value, 
        name: data.name, 
        service_id: 0 
    }
    setItem([...item, prods])
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
setCodClient("")
setObsInput('')
setValueInput(0)
setStatusInput("F")
setCodCatInput("V")
setDtMarcadaInput("")
setHrMarcadaInput("")
handleRefresh()
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
    var soma =0
    for( var cont = 0; cont < item.length ; cont++){
        soma += item[cont].value }  
    _data.value= soma
    setShowList(false)
    handleRefresh()
    if(_data.client_id != "" & _data.value != 0) {   //obriga a preencher os campos
        if (_data.datamarcada  == "" & _data.hour == ""){    
            handleAddNewService()
            setShowList(false)
        }
        else{        // se data e hora estiverem preenchidas define categoria como agendamento e muda status para "A"
            _data.category ="A"
            _data.status = "A"
            handleAddNewService()
            setShowList(false)
        }
    }
    else {alert("NOPE :)")}
}
return (
    <div className='AreaView'>
        <ProductsList/>
        <div className='LineOne'>
            <div className='Area'>{Info1} <input
             value={codclient} onChange={(ev)=> setCodClient(ev.target.value)} /></div>
            <div className='Area'>{Info2} <input
              value={search} onChange={(ev)=> {setSearch(ev.target.value); setShowList(true)}} /></div>
            <div className='Area'>{Info5} <input className='InputObs'
            value={obsInput} onChange={e=>{setObsInput(e.target.value)}}    /></div>
            <div className='Area'>
            <InputMask mask="99-99-9999" placeholder='Data Marcada' value={dtMarcadaInput} onChange={e=>{setDtMarcadaInput(e.target.value)}}/>
            <InputMask mask="99:99" placeholder='Hora Marcada' value={hrMarcadaInput} onChange={e=>{setHrMarcadaInput(e.target.value)}}/>
            </div>
        </div>
        <div className='LineTwo'>
            <button className='Button' onClick={()=>{handleSetServiceInfo()}}>{Info6}</button>
            <ListItens/>
        </div>
    </div>
)
}




/**
 
 
 */