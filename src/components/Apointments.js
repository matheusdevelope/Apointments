import React, { useState, useEffect } from 'react'
import './Apointments.css'
import AddCircleIcon from '@material-ui/icons/AddCircle';

export default ({showApointments})=>{ 
    const [show,setShow]=useState(false)
    const handleNewService = ()=>{setShow(show?false:true)}
    const [services, setServices] = useState ([])
    useEffect(()=>{
        fetch('http://26.48.46.50:3200/services')
        .then(res => {return res.json()
         }).then(data=>{
        setServices(data)})
    },[])
return( 
<div className='ContentArea 'style={{top: showApointments?0:-1000}}>
    <div className='Header'>
        <a>AGENDAMENTOS</a>
        <div onClick={handleNewService} className='HeaderBNTAdd'> 
            <AddCircleIcon style={{color:'#919191', viewBox:'0 0 50 50'}}/> 
        </div>
    </div>
    
    <div className='AreaServices' style={{marginTop: show?105:0}}>
    <div className='NewService' style={{top: show?0:-500}}>
        <div>
            Adicionar Services
        </div>
    </div>
        {data.map((service)=>(
        <div className='ServiceArea' key={service.id}>
        <a className='Text'>Agendamento Nº; {service.id}</a>
        <a className='Text'>Valor: R${service.value} </a>
        <a className='Text'>Observação{service.observation}</a>
        <a className='Text'>Status Agendamento {service.status}</a>
        <a className='Text'>Data Registro: {service.createdAt}</a>
        </div>))}   
    </div>
</div>
)}

const data = [{
    id:'1',
    value:'120,30',
    observation:"Teste com array",
    status:'Aberto',
    createdAt:'2021-06-09'
},
{
    id:'2',
    value:'120,30',
    observation:"Teste com array",
    status:'Aberto',
    createdAt:'2021-06-09'
},
{
    id:'3',
    value:'120,30',
    observation:"Teste com array",
    status:'Aberto',
    createdAt:'2021-06-09'
},
{
    id:'5',
    value:'120,30',
    observation:"Teste com array",
    status:'Aberto',
    createdAt:'2021-06-09'
},
{
    id:'6',
    value:'120,30',
    observation:"Teste com array",
    status:'Aberto',
    createdAt:'2021-06-09'
},
{
    id:'7',
    value:'120,30',
    observation:"Teste com array",
    status:'Aberto',
    createdAt:'2021-06-09'
},
]